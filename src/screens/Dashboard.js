import  { useState, useEffect } from 'react';
import LoadingDialog from '../components/Loading';
import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import LoButton from '../components/LoButton'
import Button from '../components/Button'
import AnimatedTyping from '../components/AnimatedTyping';
import { useNavigation, StackActions } from '@react-navigation/native';
import { get, save } from '../app/modules/Storage';

export default function Dashboard({ navigation }) {
  const navigationn = useNavigation();
  const navigateToNextScreen = () => {
    navigationn.navigate('Workspace');
  }
  const handleTwoFunctions = () => {
    handleLoad();
    navigateToNextScreen();
  };

  const [loadingVisible, setLoadingVisible] = useState(false);
  const handleLoad = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      // code to execute after 1 second
      setLoadingVisible(false);
    }, 12000);
    
  };
  return (
    <Background>
      <Header />
      <AnimatedTyping text={["Let's start by connecting to Spark."]} />
      <Button mode="outlined" onPress={handleTwoFunctions} > Connect </Button>
      <LoadingDialog visible={loadingVisible}/>
      <LoButton
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </LoButton>
    </Background>
  )
}
