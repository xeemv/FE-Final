import React, { useState, useEffect } from "react";


// once user clicks on the icon, it will change to true
const [editForm, setEditForm] = useState(false);

const handleEdit = (todo, index) => {
    setEditForm(true);
    setId(index);
    setTodoValue(todo.TodoValue);
};


const handleEditSubmit = (e) => {
    e.preventDefault();
    let items = [...todos];
    let item = items[id];
    item.TodoValue = todoValue;
    //item.completed = false;
    items[id] = item;
    setTodos(items);
    setTodoValue("");
    setEditForm(false);
    console.log(item);
};
