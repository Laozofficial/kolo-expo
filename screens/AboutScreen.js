import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback, Platform, Alert } from 'react-native';
import { NavBar, Block, Input } from 'galio-framework';
import { CardItem, Body, Container, Content, Fab, ActionSheet } from 'native-base';
import moment  from 'moment';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, Modal, Datepicker, Spinner } from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import NavBarHeader from '../components/NavBarHeader';


function AboutScreen() {
    return (
        <View>
            <NavBarHeader title="About Us"/>
        </View>
    )
}

export default AboutScreen;