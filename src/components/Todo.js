import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Todo(props) {
  
  const [title, setTitle] = useState('');

  return (
    <View style={styles.todo}>
      <TextInput 
        placeholder="Add a todo" 
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
        <Image source={{uri:"https://picsum.photos/200", width:200,height:200 }}/>
      <Button 
        title="Add" 
        color='#7F39FB'
        onPress={props.addTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#FB8B4C",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});
