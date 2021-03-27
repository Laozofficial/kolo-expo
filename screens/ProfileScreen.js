import React, { Component, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar, Block } from 'galio-framework';
import { CardItem, Body, Container, Content, Header,Icon ,Fab  } from 'native-base';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, Avatar } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import NavBarHeader from '../components/NavBarHeader';


const ProfileScreen = ({ navigation }) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(value => !value);

    return (
        <Block safe style={styles.container}>
            <NavBarHeader title="Profile" />
             <Avatar style={styles.avatar} size='giant' source={require('../assets/piggybank.png')}/>
            <Card transparent style={styles.card} status="primary">
                <Text category="h5" style={{ marginBottom: '5%', fontWeight: 'bold' }}>Profile Details</Text>
                <Text style={styles.gap}>Email: Laozofficial@gmail.com</Text>
                <Divider />
                <Text style={styles.gap}>Name: Laoz Ellison</Text>
                <Divider />
                <Text style={styles.gap}>Phone Number: 09098311785</Text>
                <Divider />
             
            </Card>


             <Card transparent status="primary" style={styles.card}>
                <Text category="h5" style={{ marginBottom: '5%', fontWeight:'bold' }}>Account Details</Text>
                <Text style={styles.gap}>BVN Number: 121242312</Text>
                <Divider />
                <Text style={styles.gap}>Account: Laoz Ellison</Text>
                <Divider />
                <Text style={styles.gap}>Phone Number: 09098311785</Text>
                <Divider />
                <Text style={styles.gap}>Account Number: 131312432</Text>
                <Divider />
                <Text style={styles.gap}>Bank Name: Access Bank</Text>
                <Divider/>
            </Card>


            <Fab
                active={active}
                direction="left"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => navigation.navigate('EditProfile')}>
                <Icon name="pencil" />
          </Fab>
           
       </Block>
   )
}

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '3%'
    },
    gap: {
        marginBottom: '3%',
        marginTop: '8%',
         shadowColor: "#000",
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },
    top: {
        marginTop: '10%',
         shadowColor: "#000",
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 222,
        color: 'white',
    },
    card: {
         shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 34,
        borderRadius: 30,
        marginTop: "5%",
        marginBottom: "10%",
        marginLeft: '3%',
        marginRight: '3%',
    },
    container: {
        height:"100%"
    }
});


export default ProfileScreen;