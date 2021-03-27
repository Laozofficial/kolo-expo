import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { NavBar, Block } from 'galio-framework';
import { CardItem, Body, Container, Content  } from 'native-base';
import { Card, Layout, Text, Divider,Input,  TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import NavBarHeader from '../components/NavBarHeader';
import PaystackWebView from "react-native-paystack-webview";


const AlertIcon = (props) => (
  <Icon {...props} name='error-outline'/>
);

const CardHeader = () => {
    return (
        <View View style = {
            {
                alignItems: 'center',
                marginTop: '10%'
            }
        } >
            <Text>Fund Balance</Text>
        </View>
    )
}

const payButton = () => {
    return (
        <View>
            <Button status="success">
                Add Funds To Wallet
            </Button>
        </View>
    )
}

var uuid_number = '';

const uuid = (length = 20) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    uuid_number = result;
}

uuid();


const FundWalletScreen = ({route, navigation}) => {
 
    const { amount } = route.params;

    return (
      <View style={{ flex: 1 }}>
        <PaystackWebView
                buttonText="Pay Now"
                showPayButton
                paystackKey="pk_test_1f212c820f129376877470b80a80c4196b3de99a"
                amount={`${amount}`}
                billingEmail="laozofficial@gmail.com"
                billingMobile="09787377462"
                billingName="Oluwatobi Shokunbi"
                ActivityIndicatorColor="green"
                SafeAreaViewContainer={{ marginTop: 5 }}
                SafeAreaViewContainerModal={{ marginTop: 5 }}
                refNumber={uuid_number}
                onCancel={(e) => {
                    // handle response here
                    // console.log()
                    console.log(uuid_number);
                    navigation.navigate('Home');
                }}
                onSuccess={(e) => {
                    
                }}
                autoStart
                
        />
      </View>
    );


}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
        // backgroundColor: '#0854AD',
        // borderRadius: 90,
        // borderBottomEndRadius: 10,
        width: "100%",
        // marginLeft: "10%",
        // marginRight: "10%",
        // paddingTop: "5%"
    }
})


export default FundWalletScreen;