 import React, {useEffect, useState} from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function DetailUser({route, navigation}) {
    const {identification, Name, Lastname, Birthday, City, Telephone, id } = route.params.user;
    const deleteUser = async() =>{
        try{
            const response = await fetch('https://mywebsite.com/endpoint/deleteuser', {
                method: 'DELETE',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: id
              
                })
              });
              const json = await response.json();
              Alert.alert("Usuario borrado");
              navigation.goBack();
         }catch(error){
        Alert.alert(error);
         }
    }

    const updateUser = ()=>{
        navigation.navigate('Update',{user: route.params.user});
    }
    return (
        <View style={styles.container}>
            <View style={styles.detailCard}>
            <Text>identification: {identification}</Text>
    <Text>Name: {Name} {Lastname}</Text>
    <Text>Birthday: {Birthday}</Text>
    <Text>City: {City}</Text>
    <Text>Telephone: {Telephone}</Text>
    <View style={styles.buttonsView}>
        <TouchableHighlight onPress ={updateUser} style={styles.editButton}>
            <Text>Edit</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={deleteUser} style={styles.deleteButton}>
            <Text>Delete</Text>
        </TouchableHighlight>
    </View>
    </View>
        </View>
    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    detailCard: {
       borderColor: 'black',
       borderRadius: 5,
       borderWidth: 1,
       width: Dimensions.get('screen').width * 1.0
    },
    textCreateButton:{
        color: 'white'
    },
    buttonsView:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    editButton:{
        backgroundColor: '#27DFD6',
    padding: 15,
    alignItems: 'center',
    width: Dimensions.get('screen').width*0.4,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5
    },
    deleteButton:{
        backgroundColor: '#27DFD6',
    padding: 15,
    alignItems: 'center',
    width: Dimensions.get('screen').width*0.4,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5
    }
    });
    export default DetailUser; 