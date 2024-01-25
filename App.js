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
import Menu from './Menu';




function HomeScreen({ navigation, route }) {
  
const [modalVisible, setModalVisible] = useState(false);
 
  


  return (
    <ScrollView>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: '', flexDirection: 'column'}}>
     <Text style={{fontSize:20, marginTop: 10,paddingTop:20,
  paddingBottom: 10, width: '90%', border:'solid #ffeeba ', borderTopLeftRadius:5, borderTopRightRadius:5, borderBottomLeftRadius:5,  borderBottomRightRadius:5,   justifyContent: '',  paddingRight: 40,  paddingLeft: 40, backgroundColor: '#ffeeba',
  color: '#856404',fontSize:"auto", fontWeight: 400, marginBottom:0}}>Merci de faire scanner le code. Bonne dégustation  !!! </Text>

<Image style={{width: 30,height: 30, zIndex: 10, alignSelf:'center', top: 80}} source={require('./assets/inphbLogoFb.png')}></Image> 
<View style={{flex:1, flexDirection:'column', alignContent:'center',  top:-20,alignItems:'center', justifyContent:'center', height:'auto', border:'1px solid white', borderRadius:20, marginTop: 0, backgroundColor:'white', padding:15, paddingTop:10,marginBottom:0}}>

<Image style={{width: 150,height:150, paddingTop:0, margin:0,}} source={require('./assets/qrcode.png')}></Image>
      

    </View> 
    </View>

  <View style={{ flex: 1, alignItems: 'center', justifyContent: '', top:-10 }}>
       
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              style={[styles.button, styles.buttonClose, {marginTop:0}]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fermer X</Text>
            </Pressable>

            
            
            <View
        style={[
          styles.box,
          {
            transform: [{rotate: '90deg'}],
          },
        ]}>
        <Image style={{width: '90%', height:'20%', paddingTop:0, margin:0, }} source={require('./assets/headingInphbLogo.png')}></Image>
        
        <View style={{flex:1, flexDirection:'row'}}>

        <Image style={{width: 120, height: 120, paddingTop:0, margin:5, marginRight:20}} source={require('./assets/profileMe.png')}></Image>
        <View style={{marginRight:10}}>
          <View><Text style={{fontWeight:'bold', color:'rgb(255, 55, 9)'}}>C.E.N°22INP°AAAA</Text></View>
          <View  style={{ flexDirection:'row', marginBottom:2, marginTop:0,}}><Text style={{fontWeight:'bold'}}>Nom </Text><Text>: AAAAAAAA</Text></View>
          <View  style={{flexDirection:'row', marginBottom:2, marginTop:0,}}><Text style={{fontWeight:'bold'}}>Prénoms </Text><Text>: AAAAAAAA</Text></View>
          <View  style={{flexDirection:'row', marginBottom:2,marginTop:0,}}><Text style={{fontWeight:'bold'}}>Né(e)</Text><Text>: AAAAAAAA</Text></View>
          <View  style={{flexDirection:'row', marginBottom:2,marginTop:0,}}><Text style={{fontWeight:'bold'}}>Ecole </Text><Text>: AAAAAAAA</Text></View>
          <View  style={{flexDirection:'row', marginBottom:2,marginTop:0,}}><Text style={{fontWeight:'bold'}}>Filière </Text><Text>: AAAAAAAA</Text></View>
        </View>

        <Image style={{width: 80, height: 80, paddingTop:0, margin:5}} source={require('./assets/qrcode.png')}></Image>
        
        </View>
        <Text style={{fontSize:10, }}>powered by assocau ©</Text>

      </View>
      <View style={[styles.shadow, { flexDirection:'row',width: 240, marginTop: 0,  border:'solid rgb(240, 239, 239)', borderRadius: 50,padding: 4,elevation: 2,   overflow: 'hidden',  justifyContent: '', backgroundColor:'rgb(191, 191, 191)', color: 'grey'}]}>
      <Text style={{marginLeft: 8,paddingTop: 4, marginRight:8,fontSize:20, color: 'black', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>Votre solde :</Text><TouchableOpacity style={[styles.button, styles.buttonOpen, {border:'solid rgb(240, 239, 239)', borderRadius: 50, padding:5, marginLeft:0, backgroundColor:'white'}]}>
       <Text style={{fontSize:20, color: 'black'}}>00000 F <FontAwesomeIcon size={20} icon={faBowlRice}  color='white' /></Text>
       </TouchableOpacity>
      </View>
            
          </View>

          
        </View>
      </Modal>   
        


      
       <View style={{width: 300,  marginTop: 10, border:'solid rgb(240, 239, 239)', borderTopLeftRadius:5, borderTopRightRadius:5, borderBottomLeftRadius:5,  borderBottomRightRadius:5,   overflow: 'hidden',   justifyContent: '',padding: 10,  paddingRight: 30,  paddingLeft: 30, backgroundColor:'white', color: 'rgb(227, 227, 227)'}}>
       <TouchableOpacity style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}  >
            <Text style={{fontSize:20, color: 'white'}}>Mon Badge   <FontAwesomeIcon size={20} icon={faCreditCard} color='white' /></Text>
      </TouchableOpacity>
      </View>
      
      
      <View style={[styles.shadow, { width: 300, marginTop: 10,  border:'solid rgb(240, 239, 239)', borderTopLeftRadius:5, borderTopRightRadius:5, borderBottomLeftRadius:5,  borderBottomRightRadius:5,   overflow: 'hidden',  justifyContent: '', padding: 10,paddingRight: 50,  paddingLeft: 50, backgroundColor:'white', color: 'grey'}]}>
      <TouchableOpacity style={[styles.button, styles.buttonOpen]}  onPress={() => navigation.navigate('Menu')}>
       <Text style={{fontSize:20, color: 'white'}}>Menu du jour   <FontAwesomeIcon size={20} icon={faBowlRice}  color='white' /></Text>
       </TouchableOpacity>
      </View>
      
      <View style={{ width: 300,  marginTop: 10,   justifyContent: '', border:'solid rgb(240, 239, 239)',borderTopLeftRadius:5, borderTopRightRadius:5, borderBottomLeftRadius:5,  borderBottomRightRadius:5, padding: 10, paddingRight: 60,  paddingLeft: 60, backgroundColor:'white', color: 'black'}}>
      <TouchableOpacity style={[styles.button, styles.buttonOpen]}>
       <Text style={{fontSize:20, color: 'white'}}>Réglages   <FontAwesomeIcon size={20} icon={faWrench}  color='white'/></Text>
       </TouchableOpacity>
      </View>

     





      

    </View>

    
    

    

      
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: "auto"
  },
  shadow:{
    
  },
  modalView: {
    width: "100%",
    height:"100%",
    bottom:0,
    margin: 20,
    paddingTop:10,
    backgroundColor: 'rgb(242, 242, 242)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'rgb(52, 128, 103)',
  },
  buttonClose: {
    backgroundColor: 'rgb(52, 128, 103)3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  box: {
    
    height: 250,
    width: 400,
    padding:10,
    borderRadius: 10,
    border:'solid rgb(227, 227, 227)',
    marginVertical: 90,
    backgroundColor: 'white',
    alignItems: '',
    justifyContent: '',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'',
        headerStyle :{
          backgroundColor : 'white',
          
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          
          <TouchableOpacity style={{margin:20}}>
            <FontAwesomeIcon size={20} icon={faUser} />
          </TouchableOpacity>
         
        ),
        headerLeft: () => (
          
          <TouchableOpacity style={{margin:20}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>osto <FontAwesomeIcon icon={faBowlRice} size={20}/></Text>
          </TouchableOpacity>
         
        ) 
      
      }
      } />

<Stack.Screen name="Menu" component={Menu} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;