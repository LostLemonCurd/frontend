import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { s } from './Loading.style'

export function Loading({}){
    return (
        <View style={s.container}>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    );
}