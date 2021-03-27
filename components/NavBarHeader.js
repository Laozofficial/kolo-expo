import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavBar, Block } from 'galio-framework';
import { CardItem, Body, Container, Content  } from 'native-base';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';
// import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';



// const { Navigator, Screen } = createBottomTabNavigator();

function RightIcon ({navigation})  {
    // render() {
        return (
            <Icon name="home" color="#fff" onPress={() => navigation.navigate('Transactions') }/>
        );
    // }
}

class LeftIcon extends Component {
    render() {
        return (
            <Icon name="menu" color="#fff" onPress={() => this.props.navigation.openDrawer()}/>
        );
    }
}

class NavBarHeader extends Component {
    render() {
        return (
            <Header
                centerContainerStyle={{ color: '#fff' }}
                placement="center"
                // leftComponent={<LeftIcon/>}
                centerComponent={{ text: `${this.props.title}`, style: {color: '#fff'} }}
                // rightComponent={<RightIcon/>}
            />
        )
    }
}


export default NavBarHeader;