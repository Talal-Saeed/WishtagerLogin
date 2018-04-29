/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View, TouchableOpacity, Image} from 'react-native';
import firebase from 'firebase';
import {Container, Content, Item, Form, Button, Header, Input, Label} from 'native-base';
import Logo from './src/Logo';

const config = {
    apiKey: "AIzaSyDPV7d1kyEdn2FjRB0SQhpvuW64wobQ5ME",
    authDomain: "wishtagerlogin.firebaseapp.com",
    databaseURL: "https://wishtagerlogin.firebaseio.com",
    projectId: "wishtagerlogin",
    storageBucket: "wishtagerlogin.appspot.com",
    messagingSenderId: "171774866604"
  };
  firebase.initializeApp(config);

  
export default class App extends Component {
    constructor (props)
    {
        super(props)

        this.state = ({
            email: '',
            password:'',
            error:''
        })
    }
        componentDidMount (){
            firebase.auth().onAuthStateChanged((user) =>{
                if(user != null){
                    console.log(user)
                }
            })
        }

        signUpUser = (email,password) => {
            if(this.state.password.length<6){
                alert ("Please enter atleast 6 characters")
                return;
            }
            
                firebase.auth().createUserWithEmailAndPassword(email,password)

      }

         signUpFB = async (email,password) => {
            const {type,token}=await Expo.Facebook.logInWithReadPermissionsAsync(
                '2039855036334582', {permissions:['public_profile']})
                if(this.type == 'success'){
                    const credential= firebase.auth.FacebookAuthProvider.credential(token)
                    firebase.auth().signInWithCredential(credential).catch((error) =>{
                        console.log(error)
                    })
                }
        }
    render() {
    return (
            <Container style={styles.container}>
                    <Logo />
                <Form>
                    <Item floatingLabel>
                        <Label style={{color:'white'}}>
                            Email
                        </Label>
                            <Input 
                            
                            style={{color:'white'}}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email)=> this.setState({email})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label style={{color:'white'}}>
                             Password
                        </Label>
                            <Input style={{color:'white'}}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password)=> this.setState({password})}/>
                    </Item>
                    <Button style={{marginTop:10, borderRadius:25}}
                        block                         
                        success
                        onPress= {() =>this.signUpUser(this.state.email,this.state.password)}
                        >
                           <Text style={{color:'white'}}>Sign Up</Text>
                    </Button>
                    <Button style={{marginTop:10, borderRadius:25}}
                        block                         
                        primary
                        onPress= {() => this.signUpFB()}
                        //onPress= {() => this.signUpFB(this.state.email,this.state.password)}
                        >
                           <Text style={{color:'white'}}>Login With Facebook</Text>
                          
                    </Button>
                </Form>
                    <Container style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</Container>
            </Container>
            
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#1c313a',
  },
  signupTextCont : {
    flexGrow: 1,
  alignItems:'flex-end',
  justifyContent :'center',
  paddingVertical:16,
  flexDirection:'row'
},
signupText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:16
},
signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
}
});
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar 
  } from 'react-native';
  
  import firebase from 'firebase';

  import MyItems from './src/MyItems';
  import SignUpScreen from './src/SignUpScreen'
  import Spinner from './src/Spinner';
  import LoginScreen from './src/LoginScreen';
  import Routes from './src/Routes';
  
  export default class App extends Component {
    state = { loggedIn: null };
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDPV7d1kyEdn2FjRB0SQhpvuW64wobQ5ME",
            authDomain: "wishtagerlogin.firebaseapp.com",
            databaseURL: "https://wishtagerlogin.firebaseio.com",
            projectId: "wishtagerlogin",
            storageBucket: "wishtagerlogin.appspot.com",
            messagingSenderId: "171774866604"
          }
          firebase.initializeApp(config);
         
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
                   }else{
                       this.setState({loggedIn:false});
                   }
        });
            
        }
         
       renderContent() {
            switch (this.state.loggedIn) {
              case true:
                return <MyItems />;
                  
             case false:
                return <SignUpScreen />;
              default:
                return <Spinner size="large" />;
            }
          }
        
    render() {
      return (
        <View style={styles.container}>
          <StatusBar
             backgroundColor="#1c313a"
             barStyle="light-content"
           />
          {this.renderContent()}
        
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
    }
  });