import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { NavBar, Block, Input } from 'galio-framework';
import { CardItem, Body, Container, Content, Fab, ActionSheet  } from 'native-base';
import { Card, Layout, Text, Divider,  TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction, Modal } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import NavBarHeader from '../components/NavBarHeader';

const data = new Array(30).fill({
    title: 'Item',
    description: 'Description for Item',
});

const ListIcon = (props) => (
        <Icon {...props} name="arrow-forward" style={{ color: '#d8d8cf' }}/>
);

const viewMoreIcon = () => {
    return (
        <Icon name="remove-red-eye" color="blue" raised/>
    )
}
    
const actionIcon = (props) => ( 
        // <Icon name="remove-red-eye" color="#fff" raised/>
     <Button Button style={styles.button} appearance='ghost' size="tiny" accessoryLeft={viewMoreIcon}
        onPress={() => console.log('Transactions')}>
    </Button>
);




function SavingScreen({ navigation }) {

    const [active, setActive] = useState(false);
    const [visible, setVisible] = useState(false);

        const renderItem = ({ item, index }) => (
            <Card Card style={styles.card} status="primary">
                 <ListItem title={`-\u20A6 ${item.title}`}
                        description={`- ${item.description}`}
                        accessoryLeft={ListIcon}
                        // accessoryRight={actionIcon}
                    />
           </Card>
        );


    return (
        <View>
             <NavBarHeader title="Save Cash" />
                <Card>
                    <Text style={{ color: '#000', textAlign: 'center' }}>All Your Savings Show Up Here</Text>
                </Card>
            <ScrollView>
               
                <List
                    style={styles.lists}
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={renderItem}
                />
            </ScrollView>
            <Fab
                active={active}
                direction="left"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => navigation.navigate('CreateSaving')}>
                <Icon name="add" color="#fff" />
            </Fab>

            {/* <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Input
                    
                    />
                <Button onPress={() => setVisible(false)}>
                    DISMISS
                </Button>
                </Card>
            </Modal> */}
        </View>
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
        marginTop: "3%",
        // alignItems: 'center',
        marginLeft: '3%',
        marginRight: '3%',
        // paddingTop: '3%',
        // paddingBottom: '3%',
    // flexDirection: 'row'
    },
    button: {
        marginTop: '0%',
        marginBottom: '0%',
        paddingTop: '0%',
        paddingBottom: '0%'
    },
    card_header: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 34,
        borderRadius: 30,
        marginTop: "3%",
        alignItems: 'center',
        marginLeft: '3%',
        marginRight: '3%',
        paddingTop: '3%',
        paddingBottom: '3%',
        backgroundColor: '#2A64CA'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default SavingScreen;