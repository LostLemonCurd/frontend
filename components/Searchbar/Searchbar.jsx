import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { s } from './Searchbar.style'
import { useEffect, useState } from 'react'
import { Txt } from '../../components/Txt/Txt'
import { useRoute, useNavigation } from '@react-navigation/native';

export function Searchbar({ onSubmit }){
    return (
        <TextInput 
            onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)} 
            style={s.searchbar} 
            placeholder={'Rechercher un livre'}
        />
    );
}