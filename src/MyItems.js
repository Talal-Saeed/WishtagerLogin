import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator,DrawerItems}  from 'react-navigation'

//custom files 

import SettingsScreen from './SettingsScreen'
import HomeScreen from "./HomeScreen";


export default class MyItems extends Component {
    render(){
        return(
            <MyApp />
        );
    }
}

const CustomDrawerContentComponent = (props) =>(
    <Container>
        <Header style={{padding:10,height:200, backgroundColor:'white' }}>
            <Body>
                <Image
                style={styles.drawerImage}
                source={require('../Images/Logo.png')} />     
            </Body>
        </Header>
        <Content><DrawerItems {...props}/></Content>
    </Container>

)
  

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
 
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
     contentComponent: CustomDrawerContentComponent, 
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
