import  { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Chatter() {
  let [messages, setMessages] = useState([{ text: "Hello, how may I help you today ?", from: "bot" }]);
  let [newMessage, setNewMessage] = useState("");

  let handleMessageSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage.trim(), from: "me" }]);
      setNewMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View key={index} style={message.from === "me" ? styles.sentMessageContainer : styles.receivedMessageContainer}>
            <Text style={message.from === "me" ? styles.sentMessageText : styles.receivedMessageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
          onSubmitEditing={handleMessageSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16
  },
  receivedMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    maxWidth: "80%",
    padding: 8,
    marginBottom: 8
  },
  receivedMessageText: {
    color: "#333333",
    fontSize: 16
  },
  sentMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#007aff",
    borderRadius: 20,
    maxWidth: "80%",
    padding: 8,
    marginBottom: 8
  },
  sentMessageText: {
    color: "#ffffff",
    fontSize: 16
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8
  },
  sendButton: {
    backgroundColor: "#007aff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  sendButtonText: {
    color: "#ffffff",
    fontSize: 16
  }
})
