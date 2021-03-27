import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens import
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ForgetPasswordScreen from './screens/auth/ForgetPasswordScreen';
import SelectAmountScreen from './screens/SelectAmountScreen';
import ProfileScreen from './screens/ProfileScreen';
import TransactionScreen from './screens/TransactionScreen';
import FundWalletScreen from './screens/FundWalletScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SavingScreen from './screens/SavingScreen';
import CreateSavingScreen from './screens/CreateSavingScreen';
import CompleteSignUpScreen from './screens/auth/CompleteSignUpScreen';
import AboutScreen from './screens/AboutScreen';

// other imports
import * as eva from '@eva-design/eva';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { ApplicationProvider, BottomNavigation, TopNavigation, TopNavigationAction, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator position="left">
      <Drawer.Screen name="Transactions" component={TransactionScreen} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // You can return any component that you like here!
            if (route.name === 'Home') {
              iconName = focused ? 'home'   : 'house-siding';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Fund Wallet') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Savings') {
              iconName = focused ? 'attach-money' : 'attach-money';
            } else if (route.name === 'About') {
              iconName = focused ? 'error' : 'error-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen name="Home" component={HomeScreen} navigationOptions={{ tabBarIcon: ({ color }) => (<Icon name="home"  color={color}/>)  }}/>
           <Tab.Screen name="Fund Wallet" component={SelectAmountScreen} navigationOptions={{ tabBarIcon: ({ color }) => (<Icon name="plus" color={color} />) }} />
          <Tab.Screen name="Savings" component={SavingScreen} navigationOptions={{ tabBarIcon: ({ color }) => (<Icon name="user" color={color}/>)  }}/>
          <Tab.Screen name="Profile" component={ProfileScreen} navigationOptions={{ tabBarIcon: ({ color }) => (<Icon name="user"  color={color} />) }} />
          <Tab.Screen name="About" component={AboutScreen} navigationOptions={{ tabBarIcon: ({ color }) => (<Icon name="user"  color={color} />) }} />
        </Tab.Navigator>
  );
}

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name = "Login" component = {LoginScreen} options={{headerShown: false}}/>
                  <Stack.Screen name="Home" component={TabStack} options={{headerShown: false}}/>
                  <Stack.Screen name="Register" component={RegisterScreen} />
                  <Stack.Screen name="FundWallet" component={FundWalletScreen} />
                  <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
                  <Stack.Screen name="Transactions" component={TransactionScreen} />
                  <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
                  <Stack.Screen name="CreateSaving" component={CreateSavingScreen} />
                  <Stack.Screen name="CompleteSignUp" component={CompleteSignUpScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;

// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, IconRegistry, BottomNavigation, BottomNavigationTab, } from '@ui-kitten/components';
// // import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { AppNavigator } from './components/Navigator';



// export default () => (
//   <>
//     {/* <IconRegistry icons={EvaIconsPack}/> */}
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <AppNavigator/>
//     </ApplicationProvider>
//   </>
// );