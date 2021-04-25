import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    title: {
        fontSize: 22,
        textAlign: 'left',
        lineHeight: 23,
        marginTop: 20,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 23,
        textAlign: 'left',
        fontFamily: fonts.text,
        color: colors.body_dark,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
        marginLeft: 32,
        paddingRight: 32
    },
    plants: {
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    flatlist: {
        flexDirection: 'column',
    },
});

interface EnvironmentProps {
    key: string;
    title: string;
}
export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    };
}

export default function PlantSelect() {
    const [environment, setEnvironment] = useState<EnvironmentProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment);
        if (environment === 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant => plant.environments.includes(environment));
        setFilteredPlants(filtered)
    }
    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

        if (!data)
            return setLoading(true);
        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data)
            setFilteredPlants(data)

        }
        setLoading(false);
        setLoadingMore(false);
    }
    function handleFlatMore(distance: number) {
        if (distance < 1)
            return;
        setLoadingMore(true);
        setPage(oldValue => oldValue + 1)
        fetchPlants();
    }

    useEffect(() => {
        async function fetchEnvironment() {
            const { data } = await api.get(`plants_environments?_sort=title&_order=asc`);

            setEnvironment([
                {
                    key: 'all',
                    title: 'Todos',
                }
                , ...data])
        }

        fetchEnvironment()
    }, []);
    useEffect(() => {


        fetchPlants()
    }, []);

    if (loading)
        return <Load />

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subTitle}>
                    você quer colocar sua planta?
                </Text>
            </View>
            <View >
                <FlatList
                    data={environment}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <EnvironmentButton
                            title={item.title}
                            active={item.key === environmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>
            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item} />
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFlatMore(distanceFromEnd)
                    }
                    numColumns={2}
                    ListFooterComponent={
                        loadingMore
                            ?
                            <ActivityIndicator color={colors.green} />
                            : <></>
                    }

                />

            </View>
        </View>)
}