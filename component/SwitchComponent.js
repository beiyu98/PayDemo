/**
 * Created by Administrator on 2017/3/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class SwitchComponent extends Component{

    constructor(props){
        super(props);
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render(){

        var props = this.props;
        var icon;
        if (props.icon==1){
            icon = require('../images/alipay_icon.png');
        }else if (props.icon ==2){
            icon = require('../images/weipay_icon.png');
        }

        var select;
        if (props.flag ===true){
            select =require('../images/paySelect_icon@2x.png');
        }else {
            select =require('../images/payUnSelect_icon@2x.png');
        }

      return(
          <View ref={component => this._root = component}>
                  <View style={styles.selectContainer}>
                      <Image style={styles.divideSpace} source={select}/>
                      <Image style={styles.divideSpace} source={icon}/>
                      <Text style={styles.divideSpace}>{props.account}</Text>
                  </View>
              <View style={styles.greyLine}></View>
          </View>
      )
    }
}

var styles = StyleSheet.create({
    selectContainer: {
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    greyBg:{
        height:40,
        backgroundColor:'#F7F7F7',
        paddingLeft:15,
        justifyContent:'center'

    },
    titleText:{
        fontSize:15,
        color:'#2AC1BC'
    },
    contentText:{
        fontSize:18,
        padding:15
    },
    greyLine:{
        height:2,
        backgroundColor:'#D8DADC',
        marginLeft:20,
        marginRight:20
    },
    divideSpace:{
        marginLeft:15
    }
});