import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from "./Todo_Slice";

export const AddTodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <>
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="New todo"
      />
      <TouchableOpacity onPress={handleFormSubmit}>
        <Text>Add todo</Text>
      </TouchableOpacity>
    </>
  );
};
