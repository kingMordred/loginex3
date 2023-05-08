import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import AnimatedTyping from '../components/AnimatedTyping';
import Animetest from '../components/Animetest';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Animetest text="Welcome to Spark" style={{ color: '#1F4181', fontWeight: 'bold', fontSize: 21, marginBottom: 30, }} />
      <AnimatedTyping text={["The Autonomous Robot - Log in or sign up to get started."]} />
      <StatusBar style="light" />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
