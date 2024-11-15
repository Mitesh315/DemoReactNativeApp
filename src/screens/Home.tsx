import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import ElevatedCards from '../components/ElevatedCards'
import FancyCards from '../components/FancyCards'
import ActionCard from '../components/ActionCard'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}:HomeProps) => {
  const [text, setText] = useState('')
  return (
    <ScrollView>
    <View style = {styles.container}>
      <TextInput
      placeholder = 'Enter your text here..'
      onChangeText = {newtext => setText(newtext)}
      defaultValue = {text}
      />
      <Text style = {styles.smallText}>Home Screen</Text>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ElevatedCards />   
      
      <FancyCards />
      <FancyCards />
      <FancyCards />
      <FancyCards />
      <FancyCards />
      <ActionCard />


      <Button 
      title = 'Go to details'
      onPress = {() => navigation.push("Details", {
        productId : "45"
      })}
      />

    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        margin : 8
    },
    smallText : {
        color : 'black',
        margin : 8
    },
    displayInputText : {
      color : 'red',
      fontSize : 80,
      fontFamily : 'arial',
      padding : 20
    },
    headingText : {
      fontSize : 24,
      fontWeight : 'bold',
      paddingHorizontal : 8
  }
})