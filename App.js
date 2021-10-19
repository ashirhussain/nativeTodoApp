import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  const onSumnitPress = () => {
    if (!inputValue) return
    setData([...data, inputValue])
    Alert.alert('Todo item Added')
    setInputValue('')
  }
  return (
    <ScrollView>
    <View>
    <FlatList 
    data={data}
    renderItem={({item}) => <Text>{item}</Text>}
    style={{
      marginTop: 40
    }}
     />
    </View>
    <TextInput
      style={{
        height: 40,
        marginTop: 40,
        marginRight: 12,
        marginLeft: 12,
        marginBottom: 12,
        borderRadius: 10,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue={inputValue}
      onChangeText={(text) => setInputValue(text)}
    />
     <TouchableOpacity
        style={{
          height: 50,
          marginRight: 15,
          marginLeft: 15,
          padding: 14,
          alignItems: 'center',
          borderRadius: 14,
          backgroundColor: '#06bcee' 
        }}
        title="Add item"
        onPress={() => {onSumnitPress()}}
      >
        <Text style={{fontSize: 16}}>Add Item</Text>
      </TouchableOpacity>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: '#fff',
    width: 12,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
