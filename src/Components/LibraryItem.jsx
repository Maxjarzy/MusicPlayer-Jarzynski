import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LibraryItem = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default LibraryItem

const styles = StyleSheet.create({})