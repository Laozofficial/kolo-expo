import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavBar, Block } from 'galio-framework';
import { CardItem, Body, Container, Content, Header,Icon  } from 'native-base';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBarHeader from '../components/NavBarHeader';



// const { Navigator, Screen } = createBottomTabNavigator();

const data = new Array(30).fill({
    title: 'Item',
    description: 'Description for Item',
});



const TransactionScreen = () => {
     const Headings = (props) => (
        <View {...props}>
            <Text category='s1'>Transactions History</Text>
            {/* <Text category='s1'>By Wikipedia</Text> */}
        </View>
    );

   

    const ListIcon = (props) => (
        <Icon {...props} name="arrow-forward" style={{ color: '#d8d8cf' }}/>
    );

    
    const renderItem = ({ item, index }) => (
        <ListItem title={`-\u20A6 ${item.title}`}
        description={`- ${item.description}`}
            accessoryLeft={ListIcon}
        />
    );
   

    
        return (
            
                <Layout style={styles.container}>
                {/* <NavBarHeader title="Welcome"/> */}
               {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Welcome', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
                {/* <Card style={styles.card}>
                    <Text>Account Balance : {'\u20A6'} 5000</Text>
                </Card> */}
                
                <Card style={styles.card} header={Headings} status="primary">
                    <ScrollView>
                    <List
                        style={styles.lists}
                        data={data}
                        ItemSeparatorComponent={Divider}
                        renderItem={renderItem}
                       
                    />
                    {/* <Button Button style={styles.button} appearance='ghost' accessoryLeft={StarIcon}
                        onPress={() => navigation.navigate('Transactions')}>
                        See All Transactions
                    </Button> */}
                     </ScrollView>
                </Card>
                
            </Layout>
        );
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
        // paddingBottom:
        
    },
    container: {
        // borderRadius: 50,
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
        height: "100%",
        paddingBottom: "10%",
        paddingLeft: "3%",
        paddingRight: "3%"
    }
})


export default TransactionScreen;