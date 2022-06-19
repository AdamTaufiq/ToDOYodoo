import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  ImageBackground
} from "react-native";



import AppBar from "./src/components/AppBar";
import Todo from "./src/components/Todo";
import TodoList from "./src/components/TodoList";

export default function App() {
  const [title, setTitle] = useState("");

 
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const image = { uri: "https://miro.medium.com/max/1500/1*kptiWZ4Fl4je6nPNIYYRPw.png" };

 
  // iniitalize empty object todo
  const [todo, setTodo] = useState({});

  // Initalize empty array to store todos
  const [todos, setTodos] = useState([]);

  // function to add todo object in todo list
  const addTodo = () => {
    if (title.length > 0) {
      // Add todo to the list
      setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      // clear the value of the textfield
      setTitle("");
     
    }
  };

  // function to mark todo as checked or unchecked
  const checkTodo = id => {
    // loop through todo list and look for the the todo that matches the given id param
    // update the state using setTodos function
    setTodos(
      todos.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  // function to delete todo from the todo list
  const deleteTodo = id => {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    setTodos(todos.filter(todo => {
      return todo.key !== id;
    }));
  };

  useEffect(() => {
    console.log(todos.length, "TodoList length");
    //console.log(todos);
  }, [todos]);

  return (
    <View style={styles.container}>
      
      <View style={styles.statusBar}></View>
      <AppBar />
      <ImageBackground source={image} resizeMode="cover" style={styles.imagebg}>
      <View style={styles.todo}>
        <TextInput
          placeholder="Add a todo"
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.textbox}
        />
        <Button title="Add" color="#FCA574" onPress={() => addTodo()} />
         
      </View>
     {/* Display the selected date */}
     <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>Today Date:{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
      </View>


        
      <ScrollView>
        {todos.map(todo => (
          <TodoList
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#FB8B4C",
    color: "#fff",
    width: "100%",
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#E0F01F',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: '#1F0FE0',
  },
  imagebg: {
    flex: 1,
    justifyContent: "center"
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#FB8B4C",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%"
  },
});