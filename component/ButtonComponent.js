/**
 * Created by Administrator on 2017/3/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class ButtonComponent extends Component{


    constructor(props){
        super(props);
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render(){

        if (this.props.select==1){
            return(
                <View style={styles.selectContainer} ref={component => this._root = component}>
                    <Text style={styles.selectText}>{this.props.title}</Text>
                    <Image style={styles.selectTag} source={require('../images/skuBtn_selected_icon@2x.png')}/>
                </View>
            )
        }else if (this.props.select==2){
            return(
                <View style={styles.unSelectContainer} ref={component => this._root = component}>
                    <Text style={styles.unSelectText}>{this.props.title}</Text>
                </View>
            )
        }else if (this.props.select==3){
            return(
                <View style={styles.forbidContainer} ref={component => this._root = component}>
                    <Text style={styles.forbidText}>{this.props.title}</Text>
                </View>
            )
        }
    }
}

var styles = StyleSheet.create({
    selectContainer:{
        borderRadius:3,
        height:50,
        borderWidth:2,
        margin:10,
        flexDirection:'row',
        borderColor:'#2AC1BC',
        justifyContent:'center',
        alignItems:'center'
    },
    selectText:{
        color:'#2AC1BC',
        fontSize:16,
        marginLeft:10
    },
    selectTag:{
        alignSelf:'flex-end'
    },
    unSelectContainer:{
        borderRadius:3,
        height:50,
        borderWidth:2,
        margin:10,
        flexDirection:'row',
        borderColor:'#D8DADC',
        justifyContent:'center',
        alignItems:'center'
    },
    unSelectText:{
        color:'#000',
        fontSize:16,
        textAlign:'center',
        marginLeft:10,
        marginRight:10
    },
    forbidContainer:{
        borderRadius:3,
        height:50,
        borderColor:'#D8DADC',
        borderWidth:2,
        backgroundColor:'#FAFAFA',
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    forbidText:{
        color:'#D8DADC',
        fontSize:16,
        marginLeft:10,
        marginRight:10
    }
});