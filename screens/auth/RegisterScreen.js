import React, { Component, useState } from 'react';
import { View, StyleSheet, Image , ScrollView } from 'react-native';
// import { Button } from 'galio-framework';
import { Input, Block } from 'galio-framework';
import { CardItem, Body, Container, Content, Icon, Title } from 'native-base';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';

function RegisterScreen ({navigation}) {
        return (
            <Block fluid shadowColor="#000" space="evenly" safe style={{ marginTop: "25%"  }}>
                     <Card style={styles.card} >
                        <Text category="h4" style={{ marginBottom: '5%', textAlign: 'center' }}>Create a new Account</Text>
                        {/* fist name */}
                         <Input
                            placeholder="Fist Name"
                            placeholderTextColor="#000"
                            icon="person"
                            family="MaterialCommunityIcons"
                            iconSize={14}
                            iconColor="black"
                        style={styles.input} />
                    
                            {/* last name */}
                         <Input
                            placeholder="Last Name"
                            placeholderTextColor="#000"
                            icon="person"
                            family="MaterialCommunityIcons"
                            iconSize={14}
                            iconColor="black"
                            style={styles.input} />


                        {/* Email Input */}
                        <Input
                            placeholder="email address"
                            placeholderTextColor="#000"
                            icon="email"
                            family="MaterialCommunityIcons"
                            iconSize={14}
                            iconColor="black"
                            style={styles.input} />

                        {/* phone number */}
                         <Input
                            placeholder="Phone Number"
                            placeholderTextColor="#000"
                            icon="phone"
                            family="MaterialCommunityIcons"
                            iconSize={14}
                            iconColor="black"
                            style={styles.input} />

                         {/* Password input */}
                        <Input
                            placeholder="Password"
                            placeholderTextColor="#000"
                            icon="lock"
                            family="MaterialCommunityIcons"
                            iconSize={14}
                            iconColor="black"
                            style={styles.input}
                            password
                            viewPass
                            help="must be atleast 8 characters"
                            bottomHelp
                            />

                            {/* Password input */}
                        <Input
                            placeholder="Confirm Password"
                            placeholderTextColor="#000"
                            icon="lock"
                            family="MaterialCommunityIcons"
                            iconSize={14}
                            iconColor="black"
                            style={styles.input}
                            password
                            viewPass
                             help="must be atleast 8 characters"
                            bottomHelp
                         />


                            {/* button for submit */}
                        <Button color="info"
                            onPress={() => navigation.navigate('CompleteSignUp')}
                            style={styles.submitButton}>
                            Register
                        </Button>
                
                    </Card>
            </Block>
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
});

export default RegisterScreen;