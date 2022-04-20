import React from 'react'
import {View, Text, StyleSheet,  TouchableOpacity, Linking, ScrollView} from 'react-native'

const Information = ({navigation}) => {return(<View style={{ flex: 1 }}>
    <ScrollView style={{width :'80%', alignSelf : 'center', marginTop : 20}}>
<Text style={styless.text}>React.js is a javascript library for developing rich-user interfaces 
</Text>
<Text style={styless.text2}>By Learning react, you can move towards react-native or next.js</Text>
<Text style={styless.text2}>So, if you want to go to mobile apps or even if you want to stay into web technologies, react is the way to go </Text>
<Text style={styless.text2}>For More  Info, click on Below Button</Text>
<TouchableOpacity style={styless.button} onPress={() => navigation.navigate('Spon')}>
<Text style={styless.textStyle}>Become a react.js developer</Text>
</TouchableOpacity>
</ScrollView>
</View>)
}



export default Information

const styless = StyleSheet.create({
    text : {
        fontSize : 30
    },
    text2 : {
        marginTop : 20,
        fontSize : 20
    },
    button : {
        backgroundColor : 'green',
        width : '80%',
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        marginTop : 35
    },
    textStyle : {
        color : '#ffffff',
        fontSize : 20
    }
})