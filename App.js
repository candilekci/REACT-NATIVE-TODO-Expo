import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, FlatList, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'



export default function App() {
  const [veri, setVeri] = useState("");

  const [todoList, setTodoList] = useState([]);


  const handleDelete = (index) => {
    setTodoList(todoList.filter((filterId) => filterId !== todoList[index]))
  };
  const handleClick = () => {
    if (veri.length > 0) {

      setTodoList([...todoList, veri])

      setVeri("");
    }
    else {
      alert("Lütfen belirtilen alanı doldurunuz!")
    }
  }
  const flatData = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.todoText}>{item}</Text>
        <Button onPress={() => handleDelete(index)} title="Sil"></Button>

      </View>
    )
  };

  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbarText} >
          ToDo </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='ToDo Giriniz' value={veri} onChangeText={setVeri} />
        <Button
          onPress={() => handleClick()}
          style={styles.button}
          title="EKLE"
          color="#C4DEF6"
        />
      </View>

      <FlatList
        style={styles.flatStyles}
        data={todoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={flatData} />

    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    marginTop: 30,
    backgroundColor: '#B2FFE0',
  },
  navbarText: {

    fontSize: 30,
    fontFamily: 'sans-serif-light',
    height: 70,
    paddingTop: 13,
    marginLeft: 25,

  },
  input: {
    margin: 15,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    backgroundColor: '#DCDFE2',
    borderWidth: 1,
    borderRadius: 15,
  },
  inputView: {
    backgroundColor: '#C4D2DE',

  },
  button: {
    borderRadius: 15,
    height: 100,
  },
  image: {
    width: 100,
    height: 100
  },
  todoText: {

    fontSize: 20,
    fontFamily: 'sans-serif-light',
    height: 50,
    paddingTop: 13,
    marginLeft: 15,


  },
  flatStyles: {
    backgroundColor: '#DAE1ED',
    borderColor: 'black',
  }

});
