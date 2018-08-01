/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,Button,NavigatorIOS,TouchableHighlight} from 'react-native';
import BlinkText from './blinkText.js';
import myVC from './My.js';
import testVC from './TestLayout.js';

export default class Main extends Component {

    constructor(props){
      super(props)
    }

    render() {
      return (
          <NavigatorIOS
              initialRoute={{
                  component: MainView,
                  title: 'My Initial Scene',
                  passProps: {index: 1},
              }}
              style={{flex:1}}
              translucent={false}
          />
      );
    }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class MainView extends Component {

    constructor(props) {
        super(props)
        console.log('react-native 真的不习惯');
    }
    componentWillMount(){

    }

  _onForward(){
      const nav = this.props.navigator
      nav.push({
        title:'布局测试',
        component:myVC,
    })
  }

  _imageTap(){
      const nav = this.props.navigator
      nav.push({
          title:'我的',
          component:testVC,
      })
  }


  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={this._imageTap.bind(this)}>
              <Image source={require('./source/123.jpeg')} style={styles.backImage} />
          </TouchableHighlight>
          <BlinkText text='react-native 真的不习惯' style={styles.blink} />
          <Button title="Tap me" onPress={this._onForward.bind(this)} style={styles.pushbutton}/>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCF4',
  },
    pushbutton:{
      justifyContent:'center',
    },
    backImage: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  blink: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



