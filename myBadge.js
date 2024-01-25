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

function monMenu({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  export default monMenu;