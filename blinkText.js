import React, {Component} from 'react';
import {Platform,Text,View} from 'react-native';


export default class blinkText extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // setInterval(function () {
    //   this.setState({ showText: !this.state.showText });
    // }, 1000);

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 100);
  }

  render() {
    let diaplay = this.state.showText ? this.props.text : ' ';
    // console.log(diaplay);
    return(
      <Text>{diaplay}</Text>
    );
  }
}
