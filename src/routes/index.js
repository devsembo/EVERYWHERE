import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

import Movies from '../Pages/Movies';
import Netlix from '../Pages/Netflix';
import Prime from '../Pages/Prime';

import StackRoutes from "./stackRoutes";

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#000000',
                    paddingTop: 50,
                },

                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF',
            }}
        >
            <Drawer.Screen
                name="HomeDrawer"
                component={StackRoutes}
                options={{
                    title: 'Inicio',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        />

                    )
                }}
            />
            <Drawer.Screen
                name="Movies"
                component={Movies}
                options={{
                    title: 'Favoritos',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialIcons
                            name={focused ? 'favorite' : 'favorite'}
                            size={size}
                            color={color}
                        />

                    )

                }}
            />
            <Drawer.Screen
                name="Netflix"
                component= {Netlix}
                options={{
                    title: 'Netflix',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'netflix' : 'netflix'}
                            size={size}
                            color={color}
                        />

                    )

                }}
            />


            <Drawer.Screen
                name="Prime Video"
                component={Prime}
                options={{
                    title: 'Prime Video',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'logo-amazon' : 'logo-amazon'}
                            size={size}
                            color={color}
                        />

                    )

                }}
            />


        </Drawer.Navigator>
    )
}

export default Routes;