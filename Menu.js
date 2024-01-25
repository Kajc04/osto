import * as React from 'react';
import {useState} from 'react';
import { Button, View, ScrollView, Text, TextInput, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faBowlRice} from '@fortawesome/free-solid-svg-icons/faBowlRice'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';

function Menu({navigation}) {
    return (
      <ScrollView>
        <View  style={{ flex: 1, alignItems: 'center', margin:2, marginTop:20}}>
            <Text>Menu du 00/00/0000 </Text>
        <View style={{}}>
            <Text style={{color:'grey', fontWeight:'600', width:350,}}>Matin</Text>
            <View style={{ flex: 1, flexDirection:'column', border:'1px solid white', borderRadius:10, backgroundColor:'white'}} >
            <View style={{flex:1, flexDirection:'row', }}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/cafe.png')}></Image>
            <Text  style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA </Text>
            </View>

            <View style={{flex:1, flexDirection:'row',}}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/bread.png')}></Image>
            <Text style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA AAAAAAAA </Text>
            </View>
            </View>

            

        </View>

        <View style={{marginTop:20}}>
            <Text style={{color:'grey', fontWeight:'600', width:350,}}>Midi</Text>
            <View style={{ flex: 1, flexDirection:'column', border:'1px solid white', borderRadius:10, backgroundColor:'white'}} >
            
            <View style={{flex:1, flexDirection:'row', }}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/spagetti.jpeg')}></Image>
            <Text  style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA </Text>
            </View>

            <View style={{flex:1, flexDirection:'row',}}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/rice.png')}></Image>
            <Text style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA AAAAAAAA </Text>
            </View>

            <View style={{flex:1, flexDirection:'row',}}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/soupe.png')}></Image>
            <Text style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA AAAAAAAA </Text>
            </View>

            </View>

            
            

        </View>

        <View style={{marginTop:20}}>
            <Text style={{color:'grey', fontWeight:'600', width:350,}}>Midi</Text>
            <View style={{ flex: 1, flexDirection:'column', border:'1px solid white', borderRadius:10, backgroundColor:'white'}} >
            
            <View style={{flex:1, flexDirection:'row', }}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/salad.jpeg')}></Image>
            <Text  style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA </Text>
            </View>

            <View style={{flex:1, flexDirection:'row',}}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/fish.jpeg')}></Image>
            <Text style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA AAAAAAAA </Text>
            </View>

            <View style={{flex:1, flexDirection:'row',}}>
            <Image style={{width: 60, height: 60, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/meat.png')}></Image>
            <Text style={{ width:200, fontWeight:'600'}}> AAAAAAAA AAAAAAAA AAAAAAAA </Text>
            </View>

            </View>

            
            

        </View>
        </View>
      </ScrollView>
    );
  }

  export default Menu;