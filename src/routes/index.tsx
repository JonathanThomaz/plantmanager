import React, { useState } from 'react';
import StackRoutes from './stack.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import AuthRoutes from './tabs.routes';

const Routes: React.FC = () => {
    const [userName, setUserName] = useState<string | null>(null)
    useEffect(() => {
        async function loadStorageData() {
            try {
                const user = await AsyncStorage.getItem('@plantmanager:user');
                setUserName(user)
            } catch (error) {
                throw new Error(error);
            }
        }

        loadStorageData()
    }, [])
    return !!userName ? <AuthRoutes /> : <StackRoutes />



}



export default Routes;