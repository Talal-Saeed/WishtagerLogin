/*import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default class Logo extends Component {
    render(){
        return (
                <View style={styles.container}>              
                    <Image style= {{width:200,height:200}}
                    source={require('../Images/Logo.png')}
                    />
                    <Text style={styles.logoText}>Save Now, Shop Later</Text>                  
                </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flexGrow:1,
       justifyContent:'flex-end',
       alignItems:'center'
       
    },
    logoText:{
       marginVertical:15,
        fontSize: 18,
        color:'rgba(255,255,255,0.7)'

    }
});
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.Logocontainer}>
				<Image  style={{width:200, height: 200}}
          			source={require('../Images/Logo.png')}/>
          		<Text style={styles.logoText}>Save Now, Shop Later</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  Logocontainer : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});