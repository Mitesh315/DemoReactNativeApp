import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWithWebsite(websiteLink : string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingtText}>ActionCard</Text>
      <View style = {[styles.card, styles.elevatedcard]}>
        <View style = {styles.headingContainer}>
        <Text style = {styles.headerText}>
            What's New
        </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {

    },
    headingtText : {},
    card : {},
    elevatedcard : {},
    headingContainer : {},
    headerText : {}

})