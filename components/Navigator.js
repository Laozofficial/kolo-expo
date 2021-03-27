import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import IndexScreen from '../screens/IndexScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { Icon } from 'react-native-elements';
import * as eva from '@eva-design/eva';



const HomeIcon = (props) => (
  <Icon {...props} name='home'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='rowing'/>
);

const UserIcon = (props) => (
  <Icon {...props} name='person'/>
);


// const { Navigator, Screen } = createStackNavigator();
const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();


// const BottomTabBar = ({ navigation, state }) => (
//   <BottomNavigation
//     selectedIndex={state.index}
//     onSelect={index => navigation.navigate(state.routeNames[index])}>
//     <BottomNavigationTab title='Home'/>
//     <BottomNavigationTab title='ORDERS'/>
//   </BottomNavigation>
// );

// const TabNavigator = () => (
//   <Navigator tabBar={props => <BottomTabBar {...props} />}>
//     <Screen name='Home' component={HomeScreen}/>
//     {/* <Screen name='Orders' component={OrdersScreen}/> */}
//   </Navigator>
// );

export const BottomTabBar = ({ navigation, state }) => {

  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <React.Fragment>
      <BottomNavigation 
         style={styles.bottomNavigation}
         electedIndex={state.index}
         {...bottomState}
         onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Home' icon={HomeIcon}/>
        <BottomNavigationTab title='Index' icon={BellIcon}/>
        <BottomNavigationTab title='Profile' icon={UserIcon}/>
      </BottomNavigation>
    </React.Fragment>
  );
};

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='Index' component={IndexScreen} />
        <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
);

 function HomeTabs() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name = "Login" component = {LoginScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Home" component={BottomTabBar} options={{headerShown: false}}/>
              {/* <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Index" component={IndexScreen} />
              <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
   </SafeAreaView>
  );
}



export const AppNavigator = () => (
  <NavigationContainer>
        <HomeTabs/>
        {/* <TheStackNavigator/> */}
  </NavigationContainer>
);

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});