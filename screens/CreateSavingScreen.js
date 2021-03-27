import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback, Platform, Alert } from 'react-native';
import { NavBar, Block, Input } from 'galio-framework';
import { CardItem, Body, Container, Content, Fab, ActionSheet } from 'native-base';
import moment  from 'moment';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, Modal, Datepicker, Spinner } from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import NavBarHeader from '../components/NavBarHeader';



const dateService = new MomentDateService();

function CreateSavingScreen() {
    const [date, setDate] = useState(moment());
    const [visible, setVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('amount');


    const openKolo = () => {
        var check_if_date_is_not_greater_than_today = (moment(date).diff(moment(), 'day') <= 0);

        if (check_if_date_is_not_greater_than_today) {
            Alert.alert(
                "Error",
                "Your Maturity Date Cannot be Set To Today and cannot be set to a day less than today",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
             if (title == '' || description == '' || amount == '') {
                 Alert.alert(
                     "Error",
                     "Some fields are empty",
                     [{
                         text: "OK"
                     }]
                 )
             } else {
                 setVisible(true);//show modal for ajax request
             }
        }
        
    }
     
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
    };


    return (
        <Block safe>
            <Card style={styles.card} status="primary">
                <Input
                    placeholder="New Saving Kolo Title"
                    // icon="pencil"
                    iconColor="#000"
                    left
                    placeholderTextColor="#000"
                    family="material"
                    label="New Savings Kolo Title"
                    style={styles.input}
                    onChangeText={(val) => setTitle(val)}
                />

                <Input
                    placeholder="Description"
                    // icon="pencil"
                    iconColor="#000"
                    left
                    placeholderTextColor="#000"
                    family="material"
                    label="What are you saving for ?"
                    style={styles.input, styles.textarea}
                    onChangeText={(val) => setDescription(val)}
                />

                <Input
                    placeholder="Amount"
                    // icon="pencil"
                    iconColor="#000"
                    left
                    placeholderTextColor="#000"
                    family="material"
                    label="How Much do you want to save ?"
                    style={styles.input, styles.textarea}
                    type="numeric"
                    onChangeText={(val) => setAmount(val)}
                />

                 <Datepicker
                    placeholder='Pick Date'
                    date={date}
                    dateService={dateService}
                    onSelect={nextDate => setDate(nextDate)}
                    label="Saving Maturity Date"
                    style={{ marginTop: '2%',marginBottom:'5%', color:'#000' }}
                    caption="You will be charged a 10% fee in you try to break the kolo before the selected date"
                />

                
                <Button appearance="primary"
                onPress={() => openKolo()}>
                    Open Kolo
                </Button>


                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true}>
                        <Spinner size='medium' style={{ alignContent:'center', alignItems: 'center' }}/>
                    </Card>
                </Modal>
            </Card>
        </Block>
    )
}

const styles = StyleSheet.create({
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
        marginBottom:'2%'
    },
    textarea: {
        // height:'5%'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default CreateSavingScreen;