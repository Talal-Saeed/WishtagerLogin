
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import firebase from 'firebase';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class HomeScreen extends Component{
    static navigationOptions= {
        drawerIcon:(
        <Image source={require('../Images/Notification.png')}
        style={{height:24,width:24}}/>
    )
}
  render() {
    return (

      <Container >    
           <Header style={{marginTop:10}}>
              <Left style={{paddingStart:0}}>
                  <Icon name="ios-menu" onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                  />
              </Left>
          </Header>
        <Content contentContainerStyle={
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>

         <Text>Home Screen</Text>
        <Button Button onPress={() => firebase.auth().signOut()}><Text>Logout</Text></Button>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


