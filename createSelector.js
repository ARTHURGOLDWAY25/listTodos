import React from "react";
import { useSelector } from "@reduxjs/toolkit";
import {TouchableOpacity, FlatList, View, Text} from 'react-native'



export const TodoComponent = () => {
    const listTodos = useSelector(state => state.todosSlice.todos)

    return (
        <View>
            <FlatList
            data={listTodos}
            keyExtractor={(todo, index) => index.toString()}
            renderItem={({todo}) => (
                <Text> {todo.text}</Text>
            )}
            />

            <TouchableOpacity title='View todos' onPress={() => console.log('Button clicked')}>
            <Text>View Todos</Text>
            </TouchableOpacity>  
        </View>
    ) 
  }
