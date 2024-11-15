import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    
      
      <ScrollView horizontal style = {styles.container} showsHorizontalScrollIndicator = {false}>
        
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>

  )
}

const styles = StyleSheet.create({
    container : {
        padding : 8,
        flex : 1
    },
    card : {
        flex : 1,
        width : 100,
        height : 100,
        backgroundColor : 'blue',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 4,
        margin : 8
        
    },
    cardElevated : {
        elevation : 1,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : 'black',
        shadowOpacity : 0,
        shadowRadius : 2,
        fontSize : 20,
        fontWeight : 'bold'
    }

})