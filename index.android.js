/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableHighlight
} from 'react-native';

import SwitchComponent from './component/SwitchComponent'
import ButtonComponent from './component/ButtonComponent'

export default class PayDemo extends Component {

    constructor(props){
        super(props);
        this.state={
            aliPay:false,
            wechatPay:false,
            oneBox:1,
            sixBox:2,
            twelveBox:3
        }
    }

  render() {
    return (
      <View style={styles.selectContainer}>
        <View style={styles.greyBg}>
          <Text style={styles.titleText}>优惠券</Text>
        </View>
          <Text style={styles.contentText}>使用优惠券：满100减10</Text>
        <View style={styles.greyBg}>
          <Text style={styles.titleText}>支付方式</Text>
        </View>
          <View>
              <TouchableHighlight onPress={this._aliPayPress.bind(this)}>
                  <SwitchComponent account="支付宝" icon='1' flag={this.state.aliPay}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._wechatPayPress.bind(this)}>
                  <SwitchComponent account="微信支付" icon='2' flag={this.state.wechatPay}/>
              </TouchableHighlight>
          </View>
          <View style={styles.boxContainer}>
              <TouchableHighlight underlayColor='#4169e1' onPress={this._oneBoxPress.bind(this)}>
                  <ButtonComponent title="1盒" select={this.state.oneBox}/>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#4169e1' onPress={this._sixBoxPress.bind(this)}>
                  <ButtonComponent title="1打（6盒）" select={this.state.sixBox}/>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#4169e1' onPress={this._twelveBoxPress.bind(this)}>
                  <ButtonComponent title="1箱（12盒）" select={this.state.twelveBox}/>
              </TouchableHighlight>
          </View>
      </View>
    );
  }

  _oneBoxPress(){
        this.setState({
           oneBox:1,
            sixBox:2
        });
  }

    _sixBoxPress(){
        this.setState({
            oneBox:2,
            sixBox:1
        });
    }

    _twelveBoxPress(){

    }

  _aliPayPress(){
      this.setState({
          wechatPay:false,
          aliPay:true,
      })
  }

    _wechatPayPress(){
        this.setState({
            wechatPay:true,
            aliPay:false,
        })
    }


}

var styles = StyleSheet.create({
  selectContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    boxContainer:{
      flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center'
    },
    test1:{
      color:'#000'
    }
});

AppRegistry.registerComponent('PayDemo', () => PayDemo);
