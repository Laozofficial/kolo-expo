import React, { Component, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NavBar, Block, Input, Toast } from 'galio-framework';
import { CardItem, Body, Container, Content, Header,Icon ,Fab  } from 'native-base';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import NavBarHeader from '../components/NavBarHeader';


const SubmitIcon = () => {
     return (
        <Icon name="send" style={{ color:'#fff' }}/>
    );
}

function EditProfileScreen({ navigation }) {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isShow, setShow] = useState(false); //toast  state

    const updatePassword = () => {
        if (password == '' || newPassword == '' || confirmNewPassword == '') {
            Alert.alert(
                "Error",
                "Some Fields are empty",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed")
                    }
                ]
            )
        } else {
            // run ajax request here
            Alert.alert(
                "Success",
                "Password Updated",
                [
                    {
                        text: "OK",
                        onPress: () => navigation.navigate('Profile')
                    }
                ]
            )
        }
    }

    

    return (
        <Block safe style={styles.container}>
            
            <Card status="primary" style={styles.card}>
                <Input
                    placeholder="Enter Old Password"
                    placeholderTextColor="#000"
                    left
                    icon="unlock"
                    family="antdesign"
                    iconSize={14}
                    iconColor="black"
                    password
                    viewPass
                    style={styles.input}
                    label="Enter Old Password"
                    onChangeText={(val) => setPassword(val)}
                />

                 <Input
                    placeholder="Enter New Password"
                    placeholderTextColor="#000"
                    left
                    icon="unlock"
                    family="antdesign"
                    iconSize={14}
                    iconColor="black"
                    password
                    viewPass
                    style={styles.input}
                    label="Enter New Password"
                    onChangeText={(val) => setNewPassword(val)}
                />

                
                <Input
                    placeholder="Confirm New Password"
                    placeholderTextColor="#000"
                    left
                    icon="unlock"
                    family="antdesign"
                    iconSize={14}
                    iconColor="black"
                    password
                    viewPass
                    style={styles.input}
                    label="Confirm New Password"
                    onChangeText={(val) => setConfirmNewPassword(val)}
                />

                  {/* <Toast isShow={isShow} positionIndicator="bottom" color="success">Password has been updated</Toast> */}
                  <Button status="primary"
                        onPress={() => updatePassword()}
                        style={styles.submitButton}
                        accessoryLeft={SubmitIcon}>
                        Update Password
                    </Button>
            </Card>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 34,
        borderRadius: 30,
        marginTop: "5%",
        marginBottom: "10%",
        // alignItems: 'center',
        marginLeft: '3%',
        marginRight: '3%',
        // paddingTop: '3%',
        paddingBottom: '3%'
    },
    input: {
        width: "100%"
    },
    submitButton: {
        marginTop:'4%'
    }
})

export default EditProfileScreen;