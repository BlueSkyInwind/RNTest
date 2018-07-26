
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text, View,ListView,TouchableOpacity,AlertIOS} from 'react-native';
import testData from './TestData.json'

export default class MyView extends Component {

    constructor(props) {
        super(props);
        this._postTestReqeust()
        var listV = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            //分区需要加下面的
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2
        });
        this.state = {
            //不分组使用: cloneWithRows()
            // 分组使用: cloneWithRowsAndSections()
            dataSource: listV.cloneWithRowsAndSections(testData)
        }
    }

    _postTestReqeust(){
        var url = "https://h5.faxindai.com/apigw/client/" + "handata/summary"
        fetch(url,{
            method:'GET',
            headers:{
                "channel":"1",
                "version":"1.0.0",
                "platformType":"16",
            },
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((json) => {
            console.log(json.data.amount)
            console.log(json)
        }).catch(error => {
            console.log(error)
        })
    }

    _rendRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity onPress={()=>{
                AlertIOS.alert(rowID)
                highlightRow(sectionID,rowID)
            }}>
                <View style={{height:90,justifyContent:'center'}}>
                    <Text>{rowData}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderSeparator(sectionID,rowID,adjacentRowHighlighted) {
        return (
            <View style={{backgroundColor:'#454545',height:1}}>
            </View>
        )
    }

    _renderHeader(){
        return(
            <View style={styles.headerV}>
                <Text style={{textAlign:'center'}}>{'头部视图'}</Text>
            </View>
        )
    }

    _renderFooter(){
        return(
            <View style={styles.headerV}>
                <Text>{'尾部视图'}</Text>
            </View>
        )
    }

    _renderSectionHeader(sectionData,sectionID){
        return(
            <View style={[{height: 40}, {backgroundColor:'red'}]}>
                <View style={[{flex:1}, {justifyContent: 'center'}]}>
                    <Text style={{paddingLeft: 10}}>{sectionID}</Text>
                </View>
            </View>
        )
    }


    render(){
        return(
            <ListView
                style={styles.listV}
                dataSource={this.state.dataSource}
                renderRow={this._rendRow.bind(this)}
                renderSeparator={this._renderSeparator.bind(this)}
                //头部和尾部
                // renderHeader={this._renderHeader.bind(this)}
                // renderFooter={this._renderFooter.bind(this)}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    listV:{
        marginTop: 0,
    },
    headerV:{
        backgroundColor:'red',
        height:30,
        justifyContent:'center'
    }
})










