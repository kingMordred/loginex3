import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AnimatedTyping from '../components/AnimatedTyping';
import MeetingRooms from '../components/MeetingRooms';

const LiveFeed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Text style={styles.videoText}>Live Video Feed</Text>
      </View>
      <View style={styles.rightContainer}>
        <MeetingRooms />
        <View style={styles.emptyBox} />
        <View style={styles.buttonContainer}>
          <AnimatedTyping text={["Use or your Keyboard arrow keys or the Buttons below to move or stop the robot."]} />
          <TouchableOpacity style={styles.button}>
          <MaterialIcons name="arrow-drop-up" size={50} color='#ff6347' />
          </TouchableOpacity>
          <View style={styles.horizontalButtons}>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="arrow-left" size={50} color='#ff6347' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.stopButton}>
              <MaterialIcons name="stop" size={50} color='#ff6347' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="arrow-right" size={50} color='#ff6347' />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  videoContainer: {
    flex: 2,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  emptyBox: {
    flex: 0.05,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    padding: 1,
    marginBottom: 16,
  },
  horizontalButtons: {
    flexDirection: 'row',
  },
  stopButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 100,
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  arrowButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  arrowButton: {
    backgroundColor: '#007aff',
    padding: 20,
    borderRadius: 30,
  },
});
export default LiveFeed;  