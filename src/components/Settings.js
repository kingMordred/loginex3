import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, useColorScheme } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../components/ImageViewer';
import { HomeScreen } from '../app/modules';
import { get, save } from '../app/modules/Storage';

const PlaceholderImage = require('../assets/soflogo.png');

const ButtonsScreen = () => {

  const appearance = useColorScheme();
  const setAppTheme = useCallback(async () => {
    const IS_FIRST = await get('IS_FIRST');
    console.log(IS_FIRST);
    if (IS_FIRST === null) {
      save('Theme', appearance);
      save('IsDefault', true);
      save('IS_FIRST', true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  const [selectedImage, setSelectedImage] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <TouchableOpacity style={styles.button} onPress={pickImageAsync}>
        <MaterialIcons name="photo-camera" size={24} color="#ff6347" />
        <Text style={styles.buttonText} >Change Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="language" size={24} color="#ff6347" />
        <Text style={styles.buttonText}>Language Options</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <FontAwesome name="gear" size={24} color="#ff6347" />
        <Text style={styles.buttonText}>General Preferences</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>General Settings</Text>
            <Text style={{ fontSize: 16 }}>(to do)</Text>
            <HomeScreen></HomeScreen>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10 }} onPress={() => setModalVisible(false)}>
              <Text style={{ color: 'blue' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="lock-closed" size={24} color="#ff6347" />
        <Text style={styles.buttonText}>Security and Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#ff6347',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30,
  },
});

export default ButtonsScreen;
