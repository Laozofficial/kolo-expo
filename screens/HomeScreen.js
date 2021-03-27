import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavBar, Block } from 'galio-framework';
import { CardItem, Body, Container, Content, Icon, Title  } from 'native-base';
import { Card, Layout, Text, Divider, TopNavigation, List, Button, ListItem, BottomNavigation, BottomNavigationTab, TopNavigationAction } from '@ui-kitten/components';
import { Header } from 'react-native-elements';
import NavBarHeader from '../components/NavBarHeader';


const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
});




const HomeScreen = ({navigation}) => {


    const Headings = (props) => (
        <View {...props}>
            <Text category='s1'>Latest Transactions History</Text>
            {/* <Text category='s1'>By Wikipedia</Text> */}
        </View>
    );

    const balanceHeader = (props) => (
        <View {...props} >
            <Text category='s1'>Account Balance</Text>
        </View>
    )

    const StarIcon = (props) => (
        <Icon {...props} name='list' />
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
            <ScrollView>
                <Layout style={styles.container}>
                <NavBarHeader title="Welcome"/>
                <Card style={styles.card} header={balanceHeader} status="primary">
                        {/* <Text category='h5' status="primary" style={{ fontWeight: 'bold' }}>Account Balance </Text> */}
                        <Text category="h5">- {'\u20A6'} 5000</Text>
                </Card>
                
                <Card style={styles.card_List} header={Headings} status="primary">
                    <List
                        style={styles.lists}
                        data={data}
                        ItemSeparatorComponent={Divider}
                        renderItem={renderItem}
                       
                    />
                    <Button Button style={styles.button} appearance='ghost' accessoryLeft={StarIcon}
                        onPress={() => navigation.navigate('Transactions')}>
                        See All Transactions
                    </Button>
                </Card>
                
            </Layout>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        height:'100%'
    },
    input: {
        width: "80%"
    },
    submitButton: {
        width: "80%"
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
    card_List: {
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

    },
    cardRadius: {
        borderRadius: 90,
    }
});

export default HomeScreen;