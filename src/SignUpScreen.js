/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View, TouchableOpacity, Image} from 'react-native';
import firebase from 'firebase';
import {Container, Content, Item, Form, Button, Header, Input, Label} from 'native-base';
import Logo from './Logo';
import MyItems from './MyItems';
import Spinner from './Spinner';
import {Actions} from 'react-native-router-flux';



  
export default class App extends Component {
    constructor (props)
    {
        super(props)

        this.state = ({
            email: '',
            password:'',
            error:'',
            loading: false
        })
    }
        /*componentDidMount (){
            firebase.auth().onAuthStateChanged((user) =>{
                if(user != null){
                    <MyItems />
                }
            })
        }
*/
        signUpUser = () => {
            const { email, password } = this.state;

            this.setState({ error: '', loading: true });

            if(this.state.password.length<6){
                alert ("Please enter atleast 6 characters")
                return;
            }
            else{

                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                        .catch(this.onLoginFail.bind(this));
             }}
         /*signUpFB = async (email,password) => {
            const {type,token}=await Expo.Facebook.logInWithReadPermissionsAsync(
                '2039855036334582', {permissions:['public_profile']})
                if(this.type == 'success'){
                    const credential= firebase.auth.FacebookAuthProvider.credential(token)
                    firebase.auth().signInWithCredential(credential).catch((error) =>{
                        console.log(error)
                    })
                }*/
        
      /*  async loginWithFacebook (){
            const {type,token}=await Expo.Facebook.logInWithReadPermissionsAsync(
                '2039855036334582', {permissions:['public_profile']})
                if(this.type === 'success'){
                    const credential= firebase.auth.FacebookAuthProvider.credential(token)
                    firebase.auth().signInWithCredential(credential).catch((error) =>{
                        console.log(error)
                    })
        }}*/
        onLoginFail() {
            this.setState({ error: 'There Seems to be Some Error Please Try Again' , loading: false });
          }
        
          onLoginSuccess() {
            this.setState({
              email: '',
              password: '',
              loading: false,
              error: ''
            });
          }

        async logIn() {
            const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2039855036334582', {
                permissions: ['public_profile'],
              });
            if (type === 'success') {
                const credential= firebase.auth.FacebookAuthProvider.credential(token)
                firebase.auth().signInWithCredential(credential)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            }
          }
        goBack() {
            Actions.pop();
        }
            renderButtonSU(){
                {
                    if (this.state.loading) {
                      return <Spinner size="small" />;
                    }
                
                    return (
                        <Button style={{marginTop:10, borderRadius:25}}
                        block                         
                        success
                        onPress= {() =>this.signUpUser(this.state.email,this.state.password)}
                        >
                           <Text style={{color:'white'}}>Sign Up</Text>
                    </Button>
                    );
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

                    {this.renderButtonSU()}
                   
                    <Button style={{marginTop:10, borderRadius:25}}
                        block                         
                        primary
                        onPress= {() => this.logIn()}
                        //onPress= {() => this.signUpFB(this.state.email,this.state.password)}
                        >
                           <Text style={{color:'white'}}>Login With Facebook</Text>
                          
                    </Button>
                </Form>
                    <Container style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>
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
