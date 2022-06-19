import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  //console.log(props.todo, "logging props");
  return (
    <View style={styles.listTile}>
      <Icon
        name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
        style={styles.leading}
        size={20}
        color="#666666"
        onPress={() => props.checkTodo(props.todo.key)}
      />

      <Text >{props.todo.name}</Text>
     
      <TouchableOpacity onPress={() => props.deleteTodo(props.todo.key)} >
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/216/216760.png", width: 20, height: 20 }} />
      </TouchableOpacity>

    </View >
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666666"
  },
  leading: {
    width: "20%"
  },
  title: {
    width: "60%",
    fontSize: 18
  },
  trailing: {
    width: "20%"
  }
});
