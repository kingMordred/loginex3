import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header'

const MeetingRooms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available meeting rooms:</Text>
      <Header />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Paris</Text>
          <Text style={styles.hintText}>free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Frankfurt</Text>
          <Text style={styles.hintText}>free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.disabledButton]}>
          <Text style={[styles.buttonText, styles.disabledButtonText]}>Room 3</Text>
          <Text style={[styles.hintText, styles.disabledHintText]}>busy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.disabledButton]}>
          <Text style={[styles.buttonText, styles.disabledButtonText]}>Room 4</Text>
          <Text style={[styles.hintText, styles.disabledHintText]}>busy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#007f00',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hintText: {
    color: '#fff',
    fontSize: 12,
    fontStyle: 'italic',
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  disabledButtonText: {
    color: '#808080',
  },
  disabledHintText: {
    color: '#808080',
  },
});

export default MeetingRooms;
