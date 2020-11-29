 import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent(props){
    const {identification, Name, Lastname} = props.user
    return (
        <View>
            <Text>{identification}</Text>
    <Text>{Name} {Lastname}</Text>
        </View>
    )

};


const styles = StyleSheet.create({
    
    });
    export default CardComponent; 