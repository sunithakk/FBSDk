/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { LoginButton, AccessToken,LoginManager} from 'react-native-fbsdk';


LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
  console.log(result)
  AccessToken.getCurrentAccessToken().then((token) => {
    console.log(token)
    TOKEN = token;
  })
  
})
fbsignin = async(data)=>{
    console.log(data)
  //api call and routing
 
}
export default class LoginPage extends Component {
  componentDidMount(){
    setTimeout(SplashScreen.hide, 2000);
  }
  
  render() {
    
    return (
      <View style={styles.container}>
       <Text>login page.....</Text>
       <LoginButton
          onLoginFinished={
            (error, result) => {
              console.log(result)
              console.log(error)
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(alert(data.userID) )
                    console.log(data.accessToken.toString())
                   
                    this.fbsignin(data)
                  }
                
                )
              }
            }
          }
          onLogoutFinished={() => console.log("inside facebook logout....")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
