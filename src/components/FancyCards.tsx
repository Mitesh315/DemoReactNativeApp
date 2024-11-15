import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image 
        source = {{
            uri : 'https://media.istockphoto.com/id/900920654/photo/grand-anse-mahe-island-seychelles-beach-coastline.jpg?s=612x612&w=0&k=20&c=9hRgfY0yAIyltc00wh__i6GPyY7nR50ApZM4Suclzl4='
        }}
        style = {styles.cardImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Island</Text>
            <Text style = {styles.cardLabel}>Some country</Text>
            <Text style = {styles.cardDescription}>Places can visited that are very natural...</Text>
            <Text style = {styles.cardFooter}>Good Place</Text>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    card : {
        width : 350,
        height : 360,
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal : 16,
        borderColor : 'black',

    },
    cardElevated : {
        backgroundColor : 'white',
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1
        }
    },
    cardImage : {
       height : 180,
       marginBottom : 8,
       borderTopLeftRadius : 6,
       borderTopRightRadius : 6
    },
    cardBody : {
        flex : 1,
        flexGrow : 1,
        paddingHorizontal : 12
    },
    cardTitle : {
        color : '#228b22',
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 4
    },
    cardLabel : {
        color : '#ff8c00',
        fontSize : 14,
        marginBottom : 6
    },
    cardDescription : {
        color : '#dc143c',
        fontSize : 12,
        marginBottom : 12,
        marginTop : 6,
        flexShrink : 1
    },
    cardFooter : {
        color : 'black'

    }


})