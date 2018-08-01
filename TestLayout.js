
/**
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';

export default class TestLayout extends Component {


    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={styles.bodyView} >
                <View style={styles.viewOne}></View>
                <View style={styles.viewTwo}></View>
                <View style={styles.viewThree}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    bodyView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:'#454545',
    },
    viewOne:{
         // width:50,
         height:50,
        backgroundColor:'powderblue',
    },
    viewTwo:{
         // width:50,
         height:50,
        backgroundColor:'skyblue',
    },
    viewThree:{
         // width:50,
         height:50,
        backgroundColor:'steelblue',
    },
})