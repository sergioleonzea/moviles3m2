 import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const UpdateUser({route, navigation }) {
    
 try{
    const response = await fetch('https://mywebsite.com/endpoint/updateuser', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: route.params.user.id,
          identification: identification,
          Name: Name,
          Lastname: Lastname,
          Birthday: Birthday,
          City: City,
          Telephone: Telephone
      
        })
      });
      const json = await response.json();
      Alert.alert("Usuario actualizado");
      navigation.navigate('Home');
 }catch(error){
Alert.alert(error);
 }
}

function UpdateUser(navigation) {  const [identification, setIdentification] = useState("");
    
    const [Name, setName] = useState("");  
    const [Lastname, setLastname] = useState(""); 
    const [Birthday, setBirthday] = useState(""); 
    const [City, setCity] = useState("");
    const [Telephone, setTelephone] = useState("");
    
   
    useEffect(()=>{
        
        setIdentification(route.params.user.identification);
        setName(route.params.user.Name);
        setLastname(route.params.user.Lastname);
        setBirthday(route.params.user.Birthday);
        setCity(route.params.user.City);
        setTelephone(route.params.user.Telephone);

    },[]);
return(
  <View style={StyleSheet.container}>
<TextInput style={styles.textInput} value={identification} onChangeText = {text => setIdentification(text)} placeholder="identification"></TextInput>
<TextInput style={styles.textInput} value={Name} onChangeText = {text => setName(text)} placeholder="Name"></TextInput>
<TextInput style={styles.textInput} value={Lastname} onChangeText = {text => setLastname(text)} placeholder="Lastname"></TextInput>
<TextInput style={styles.textInput} value={Birthday} onChangeText = {text => setBirthday(text)} placeholder="Birthday"></TextInput>
<TextInput style={styles.textInput} value={City} onChangeText = {text => setCity(text)} placeholder="City"></TextInput>
<TextInput style={styles.textInput} value={Telephone} onchangeText = {text => setTelephone(text)} placeholder="Telephone"></TextInput>
<TouchableHighlight style = {styles.createButton} onPress={updateUser} >
        <Text style={styles.textCreateButton}>Update User</Text>
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
export default UpdateUser; 