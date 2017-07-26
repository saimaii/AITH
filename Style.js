'use strict'
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({

    header:{
        width:385,
        height: 60,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent:'space-between'


    },
    headerDetail:{
        width:80,
        height: 50,
        backgroundColor: '#42a5f5',
        marginLeft:5,
        borderRadius:10,
        alignItems: 'center',
        justifyContent:'space-between',
        marginRight:5,
        marginTop:5,
        marginBottom:5

    },
    headerDetail1:{
        width:20,
        height: 60,
        backgroundColor: '#42a5f5',
        marginLeft:5,
        borderRadius:5,


    },
    textHeader:{
        textAlign:'center',
        color:'#fafafa',
        fontWeight:'bold'
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft:5,
        backgroundColor:'#bbdefb',
        marginTop:100

    },
    containerDetail:{
        width:100,
        height: 100,
        backgroundColor: '#42a5f5',
    },
    block: {
        backgroundColor: '#42a5f5',
        height: 90,
        width: 90
    },



});