import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes';

let nextToDoId = 0;

export const addTodo = (text) =>({
    type: ADD_TODO,
    completed: false,
    id: nextToDoId++,
    text: text
});

export const toggleTodo = (id)=> ({
    type: TOGGLE_TODO,
    id: id
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});