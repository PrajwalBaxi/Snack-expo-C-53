import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class App extends Component {
  displayalert(){
    alert("Nothing added yet")
  }
  render() {
    return (
      <View style={{marginTop:0,marginLeft: 10,marginRight: 10}}>
      <Text >Docs       Tutorial      Blog        Community</Text>
      <h1>REACT</h1>
      <h2>A javascript library for building users interfaces</h2>
      
        <Button title="Get Started" color="blue" onPress={this.displayalert} width='10'/>
        </View>
    );
  }
}