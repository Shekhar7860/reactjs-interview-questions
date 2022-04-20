import React from 'react'
import {View, Text, StyleSheet,  TouchableOpacity, Linking, ScrollView} from 'react-native'

const Sponsoring = ({navigation}) => {return(<View style={{ flex: 1}}>
    <ScrollView style={{width :'80%', alignSelf : 'center', marginTop : 20}}>
<Text style={styless.text}>For learning react, you firstly need to learn three languages HTML, CSS and javascript
</Text>
<Text style={styless.text2}>No, you dont need to become very much advanced in these technologies, you only need to learn basics so as to make your career.</Text>
<TouchableOpacity style={styless.button} onPress={() => Linking.openURL('https://www.facebook.com')}>
<Text style={styless.textStyle}>Get React.js Interview Questions</Text>
</TouchableOpacity>
</ScrollView>
</View>)
}



export default Sponsoring

const styless = StyleSheet.create({
    text : {
        fontSize : 30
    },
    text2 : {
        marginTop : 20,
        fontSize : 30
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
        fontSize : 20,
        textAlign : 'center'
    }
})