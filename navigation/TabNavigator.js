import { TabActions } from "@react-navigation/native";
import React, { Component } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';

import CreateBottomNavigator from 'react-navigation/bottom-tabs';
import CreatePost from '../screens';
import Feed from '../screens';
import Prefil from '../screens';

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused 
                            ? 'book'
                            : 'book-outline';
                    }else if ( route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}             
    )
}