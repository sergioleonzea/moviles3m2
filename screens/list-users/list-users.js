import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import CardComponent from './card-component';
import {useIsFocused} from '@react-navigation/native';

function ListUsers({navigation}) {
    const ifFocused = useIsFocused();
    const [users, setUsers] = useState([]);
    const listUsers = async () =>{
        let response = await fetch('https://mywebsite.com/endpoint/listUsers');
        let json = await response.json();
        setUsers(json.users);
    }
    const detailUser = (item) => {
navigation.navigate('Detail',{user: item});
    }
     useEffect(()=>{
        
        listUsers();

    },[isFocused]); 
return (
    <View style={styles.container}>
    <TouchableHighlight style = {styles.createButton} onPress= {() => navigation.navigate('Create')}> 
        <Text style={styles.textCreateButton}>Create user</Text>
    </TouchableHighlight>
    <FlatList
    data={users}
    renderItem={({item}) => <TouchableHighlight onPress={() => detailUser(item)} style={styles.listButton}>
<CardComponent user={item}/>
    </TouchableHighlight>}
    keyExtractor={item => item.id}
    ></FlatList>
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
createButton: {
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    width: Dimensions.get('screen').width*1.0,
    marginTop: 10,
    borderRadius: 5
},
textCreateButton:{
    color: 'white'
},
listButton:{
    marginTop: 10,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    width: Dimensions.get('screen').width*1.0
}
});

export default ListUsers;