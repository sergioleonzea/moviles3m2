import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

 const CreateUser = async () =>{
 try{
    const response = await fetch('https://mywebsite.com/endpoint/createuser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identification: identification,
          Name: Name,
          Lastname: Lastname,
          Birthday: Birthday,
          City: City,
          Telephone: Telephone
      
        })
      });
      const json = await response.json();
      Alert.alert("Usuario creado");
      navigation.goBack();
 }catch(error){
Alert.alert(error);
 }
} 
const pressMe =() =>{
    Alert.alert("Cuidado");
  }
function CreateUser(navigation) {
    const [identification, setIdentification] = useState("");
    /* const validateForm = (event) =>{
        if(Identification == ""){
            event.preventDefault();
            console.log("Vacio");
        }
        else if(Identification.length < 10){
            event.preventDefault();
            console.log("Cantidad insuficiente");
        }
    } */
    const [Name, setName] = useState("");
   /*  const validateForm = (event) =>{
        if(Name == ""){
            event.preventDefault();
            console.log("Vacio");
        }
        
    } */
    const [Lastname, setLastname] = useState("");
   /*  const validateForm = (event) =>{
        if(Lastname == ""){
            event.preventDefault();
            console.log("Vacio");
        }
    } */
    const [Birthday, setBirthday] = useState("");
   /*  const validateForm = (event) =>{
        if(Birthday == ""){
            event.preventDefault();
            console.log("Vacio");
        }
    } */
    const [City, setCity] = useState("");
   /*  const validateForm = (event) =>{
        if(City == ""){
            event.preventDefault();
            console.log("Vacio");
        }
    } */
    const [Telephone, setTelephone] = useState("");
    /* const validateForm = (event) =>{
        if(Telephone == ""){
            event.preventDefault();
            console.log("Vacio");
        }
    } */
    
return(
  <View style={StyleSheet.container}>
<TextInput style={styles.textInput} onChangeText = {text => setIdentification(text)} placeholder="identification"></TextInput>
<TextInput style={styles.textInput} onChangeText = {text => setName(text)} placeholder="Name"></TextInput>
<TextInput style={styles.textInput} onChangeText = {text => setLastname(text)} placeholder="Lastname"></TextInput>
<TextInput style={styles.textInput} onChangeText = {text => setBirthday(text)} placeholder="Birthday"></TextInput>
<TextInput style={styles.textInput} onChangeText = {text => setCity(text)} placeholder="City"></TextInput>
<TextInput style={styles.textInput} onchangeText = {text => setTelephone(text)} placeholder="Telephone"></TextInput>
<TouchableHighlight style = {styles.createButton} onPress={CreateUser} >
        <Text style={styles.textCreateButton}>Create user</Text>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.createButton} onPress={pressMe}  >
        <Text style={styles.textCreateButton}>Delete User</Text>
    </TouchableHighlight>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center'
},
textInput: {
    
    textAlign: 'center',
    marginTop: 10,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    width: Dimensions.get('screen').width*1.0
},
createButton: {
    backgroundColor: '#27DFD6',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    width: Dimensions.get('screen').width*1.0,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1A298A'
    
},
textCreateButton:{
    color: 'white'
    
}
});
export default CreateUser;