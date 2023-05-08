import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native';

const PopupMessage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Show Popup"
        onPress={() => setModalVisible(true)}
      />
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
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Popup Message</Text>
            <Text style={{ fontSize: 16 }}>Hello World!</Text>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10 }} onPress={() => setModalVisible(false)}>
              <Text style={{ color: 'blue' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopupMessage;
