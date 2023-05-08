import React, { useState, useEffect } from 'react';
import { Modal, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingDialog = ({ visible }) => {
  const [message, setMessage] = useState('Establishing connection...');
  const [showActivityIndicator, setShowActivityIndicator] = useState(true);

  useEffect(() => {
    let timer1, timer2, timer3, timer4, timer5;

    if (visible) {
      timer1 = setTimeout(() => {
        setMessage('Connected !');
        setShowActivityIndicator(false);
      }, 3000);

      timer2 = setTimeout(() => {
        setMessage('Checking if Spark is in use...');
        setShowActivityIndicator(true);
      }, 4000);

      timer3 = setTimeout(() => {
        setMessage('Checking battery status...');
        setShowActivityIndicator(true);
      }, 7000);

      timer4 = setTimeout(() => {
        setMessage('Everything seems to be Ok!');
        setShowActivityIndicator(false);
      }, 10000);

      timer5 = setTimeout(() => {
        setMessage('');
      }, 12000);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [visible]);

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.dialog}>
          {showActivityIndicator && <ActivityIndicator size="large" color="#fff" />}
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  dialog: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  message: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default LoadingDialog;
