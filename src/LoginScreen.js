import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View, TouchableOpacity, Image} from 'react-native';
import firebase from 'firebase';
import MyItems from './MyItems';
import Spinner from './Spinner';
import {Container, Content, Item, Form, Button, Header, Input, Label} from 'native-base';
import Logo from './Logo'; 
import {Actions} from 'react-native-router-flux';
 
 class LoginScreen extends Component{
        state = {
            email: '',
            password:'',
            error:'',
            loading: false 
        };
          /* componentDidMount (){
            firebase.auth().onAuthStateChanged((user) =>{
                if(user != null){
                    <MyItems />
                }
            })
        }
        */
        signInUser = () => {
            const { email, password } = this.state;

            this.setState({ error: '', loading: true });
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                    .catch (this.onLoginFail.bind(this));    
        }      
        onLoginFail() {
            this.setState({ error: 'Incorrect Email or Password' , loading: false });
          }
        
          onLoginSuccess() {
            this.setState({
              email: '',
              password: '',
              loading: false,
              error: ''
            });
          }

        signUp() {
            Actions.signup()
        }
            
        renderButton() {
            if (this.state.loading) {
              return <Spinner size="small" />;
            }
        
            return (
              <Button style={{marginTop:10, borderRadius:25}}
              block                         
              success
              onPress= {() =>this.signInUser(this.state.email,this.state.password)}
              >
                 <Text style={{color:'white'}}>Login</Text>
              </Button>
            );
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

                     <Text style={styles.errorTextStyle}>
                         {this.state.error}
                    </Text>

                    {this.renderButton()}

                </Form>
                    <Container style={styles.signupTextCont}>
                      <Text style={styles.signupText}>Don't have an account yet?</Text>
                      <TouchableOpacity onPress={this.signUp}><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
				</Container>
            </Container>
            
    );
  }


 }
export default LoginScreen;
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
},
errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
