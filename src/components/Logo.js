import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/soflogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 300,
    marginBottom: 30,
    
  },
})
