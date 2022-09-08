import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "../Pages/Home";
import Detail from '../Pages/Detail';
import Search from "../Pages/Search";

const stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <stack.Navigator>
            <stack.Screen
             name="Inicio"
             component={Home}
             options={{
                headerShown: false
             }}
             />

             <stack.Screen 
             name="Detail"
             component={Detail}
             options={{
                headerShown: false,
                title: 'Detalhes'
             }}
             />
             <stack.Screen
             name="Search"
             component={Search}
             options={{
                title: "Sua busca",
                headerTintColor: "#FF0000",
                headerTitleStyle:{
                    color: "#FF0000"
                },
                headerStyle:{
                    backgroundColor: '#000000'
                }
             }}
             />
        </stack.Navigator>
    )
}

export default StackRoutes;