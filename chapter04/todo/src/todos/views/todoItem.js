import React, {PropTypes} from 'react';

const TodoItem = ({onToggole,onRemove,completed,text}) => {
    const checkedProp = completed ? {checked:true}:{};
    return (
        <li
        className="todo-item"
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggole}/>
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>×</button>
        </li>
    );
}

TodoItem.propTypes = {
    onToggole: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;