import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { NavBar, Block, Input } from 'galio-framework';
import { CardItem, Body, Container, Content  } from 'native-base';
import { Card, Layout, Text, Divider,  TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import NavBarHeader from '../components/NavBarHeader';


const MoneyIcon = (props) => {
    return (
        <Icon name="send" color="#fff"/>
    );
}

function SelectAmountScreen ({navigation}) {

    const [amount, setAmount] = useState('');

        return (
            <Block safe>
                <NavBarHeader title="Fund Wallet"/>
                <Card style={styles.card} status="primary">
                    <Text h4 style={{ marginBottom: '10%' }}>How Much Do You Fund Your Wallet With ? </Text>
                        <Input
                            placeholder="Enter An Amount"
                            placeholderTextColor="#000"
                            icon="attach-money"
                            family="MaterialCommunity"
                            iconSize={14}
                            iconColor="black"
                            style={styles.input}
                            type="number-pad"
                            onChangeText={(val) => setAmount(val)}
                            />

                    {/* <Text style={{ color: '#000' }}>
                        {amount}
                    </Text> */}


                        <Button status="primary"
                            onPress={() => navigation.navigate('FundWallet',{amount: `${amount}`})}
                        // onPress={this.submitAmount}
                            style={styles.submitButton}
                            accessoryLeft={MoneyIcon}>
                            Fund Wallet
                        </Button>
                </Card>
            </Block>
        )
    }


const styles = StyleSheet.create({
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
}
})

export default SelectAmountScreen