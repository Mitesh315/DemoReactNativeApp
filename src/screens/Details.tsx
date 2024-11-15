import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { useNavigation } from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import ElevatedCards from '../components/ElevatedCards'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>



const Details = ({route} : DetailsProps) => {

    const {productId} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <ScrollView>
    <View style = {styles.container}>
    
    <ElevatedCards />

      <Text>Details : {productId}</Text>
      <Button 
      title='Go to home'
      onPress={()=> navigation.goBack()}
      />

    <Button 
      title='Go to home'
      onPress={()=> navigation.popToTop()}
      />

    </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    smallText : {
        color : 'black'
    }
})