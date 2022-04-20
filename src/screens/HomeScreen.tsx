import React from 'react'
import {View, Text, StyleSheet,  TouchableOpacity, ScrollView} from 'react-native'
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
const HomeScreen = ({navigation}) => {return(
<View style={{ flex: 1 }}>
<BannerAd
unitId={'ca-app-pub-4515670409707693/5160193301'}
size={BannerAdSize.SMART_BANNER}
requestOptions={{
requestNonPersonalizedAdsOnly: true,}}
onAdLoaded={() => {
console.log('Advert loaded');}}
onAdFailedToLoad={(error) => {
console.error('Advert failed to load: ', error);}}
/>
    <ScrollView style={{width :'80%', alignSelf : 'center', marginTop : 20}}>
<Text style={styless.text}>Welcome to Journey Towards React JS developer.  No matter what is your profile, what particular degree you hold, if you have courage, you can become a react.js developer
    If you want to know more, click this button
</Text>
<TouchableOpacity style={styless.button} onPress={() => navigation.navigate('Info')}>
<Text style={styless.textStyle}>Lets Get Started</Text>
</TouchableOpacity>
</ScrollView>
</View>)
}



export default HomeScreen

const styless = StyleSheet.create({
    text : {
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
        fontSize : 20
    }
})