import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {toggleTodo,removeTodo} from '../actions';
import {FilterTypes} from '../../constants';


const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul>
            {
                todos.map((item)=>{
                    return (
                        <TodoItem
                           key = {item.id}
                           text = {item.text}
                           completed= {item.completed}
                           onToggole = {()=> onToggleTodo(item.id)}
                           onRemove = {() => onRemoveTodo(item.id)}
                        />
                    );
                })
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

const selectVisibleTodos = (todos, filter)=> {
    switch(filter){
        case FilterTypes.ALL:
           return todos;
        case FilterTypes.COMPLETED:
           return todos.filter((item)=> item.COMPLETED);
        case FilterTypes.UNCOMPLETED:
           return todos.filter((item)=> item.UNCOMPLETED);
        default:
           return todos;
    }
}

const mapStateToProps = (state)=> {
   return {
       todos: selectVisibleTodos(state.todos, state.filter)
   }
}

const mapDispathToProps = (dispatch) =>{
    return {
       onToggleTodo: (id)=>dispatch(toggleTodo(id)),
       onRemoveTodo: (id)=>dispatch(removeTodo(id))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(TodoList);

