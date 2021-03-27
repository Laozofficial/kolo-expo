import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback, Platform, Alert } from 'react-native';
import { NavBar, Block, Input } from 'galio-framework';
import { CardItem, Body, Container, Content, Fab, ActionSheet } from 'native-base';
import moment  from 'moment';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, Modal, Datepicker, Spinner , Select, SelectGroup, SelectItem, IndexPath} from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';




function CompleteSignUpScreen() {
    const data = [
        {
            title:'boom',
           description: 'hello world'
        },
        {
             title:'boomy',
           description: 'ello world'
        }
   ]



    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const [bank, setBank] = useState('');
    const [visible, setVisible] = useState(false);
    const [accountNumber, setAccountNumber] = useState('0694255043');
    const [bvn, setBvn] = useState('');


    const renderOption = (item, index) => (
        <Picker.Item key={index} label={`${item.title}`}  value={`${item.description}`} />
    );

    const verifyUser = () => {
        if (accountNumber == '' || bvn == '') {
            Alert.alert(
                "Error",
                "Some fields are empty",
                [
                     { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }
    }

    return (
        <View>
            <ScrollView>
                <Card style={styles.card}>
                    <Input
                        placeholder="Account number"
                        placeholderTextColor="#000"
                        icon=""
                        family="MaterialCommunityIcons"
                        iconSize={14}
                        iconColor="black"
                        label="Account Number"
                        style={styles.input}
                        onChangeText={(val) => setAccountNumber(val) }/>
                    
                    <Input
                        placeholder="Your BVN"
                        placeholderTextColor="#000"
                        icon=""
                        family="MaterialCommunityIcons"
                        iconSize={14}
                        iconColor="black"
                        label="Enter Your BVN"
                        style={styles.input}
                        onChangeText={(val) => setBvn(val) }/>
                    
                    <Text style={{ marginTop:'5%' }}>Select Your Bank</Text>
                    <Picker
                        selectedValue={bank}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => setBank(itemValue)}
                        prompt="Select Bank"
                    >
                      {data.map(renderOption)}
                    </Picker>

                    <Button appearance="primary" onPress={() => verifyUser()}>
                        Verify Account Number
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
           </ScrollView>
         </View>
     )
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        // width: "90%"
    },
    submitButton: {
        // width: "80%"
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
        paddingBottom: '3%',
        // flexDirection: 'row'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default CompleteSignUpScreen;