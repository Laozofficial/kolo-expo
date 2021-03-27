import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'galio-framework';
import { Input, Block } from 'galio-framework';

 function LoginScreen ({navigation})  {
     
    
        return (
            <View style={styles.container}>
                {/* <Text>This is the Login Page</Text> */}
                <Image source={require('../../assets/piggybank.png')} />

                {/* Email Input */}
                <Input
                    placeholder="email address"
                    placeholderTextColor="#000"
                    icon="email"
                    family="MaterialCommunityIcons"
                    iconSize={14}
                    iconColor="black"
                    style={styles.input} />
                
                {/* Password input */}
                <Input
                    placeholder="Password"
                    placeholderTextColor="#000"
                    icon="unlock"
                    family="AntDesign"
                    iconSize={14}
                    iconColor="black"
                    style={styles.input}
                    />

                {/* button for submit */}
                <Button color="info"
                    onPress={() => navigation.navigate('Home')}
                    style={styles.submitButton}>
                    Login
                </Button>
                <Text>-OR-</Text>

                {/* button to route to register page */}
                <Button color="danger"
                    style={styles.submitButton}
                    onPress={() => navigation.navigate('Register')}>
                    Register
                </Button>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "80%"
    },
    submitButton: {
        width: "80%"
    }
});

export default LoginScreen;