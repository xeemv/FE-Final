// we need useState and useEffect hooks
import React, { useState, useEffect } from "react";

// icons from react icons kit
// main Icon component
import { Icon } from "react-icons-kit";

// icons themselves
import { plus } from "react-icons-kit/feather/plus";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";
import userEvent from "@testing-library/user-event";

// get todos from local storage
const getTodosFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Form = () => {
  // todo value state
  const [todoValue, setTodoValue] = useState("");

  // todos array of objects
  const [todos, setTodos] = useState(getTodosFromLS());
  //console.log(todos);

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // creating a ID for every todo
    const date = new Date();
    const time = date.getTime();

    // creating a todo object
    let todoObject = {
      ID: time,
      TodoValue: todoValue,
      completed: false,
    };

    // updating todos states
    setTodos([...todos, todoObject]);
    // clearing input field
    setTodoValue("");
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
    // we are updating todos in the locoal storage whenever our todos state is changing
  }, [todos]); // useEffect will run whenever our todos state changes

  // delete a todo
  const handleDelete = (id) => {
    // console.log(id);
    const filtered = todos.filter((todo) => {
      return todo.ID !== id;
    });
    setTodos(filtered);
  };

  // edit form - it will start as false to indicate that the user has not clicked on the edit icon
  // once user clicks on the icon, it will change to true
  const [editForm, setEditForm] = useState(false);

  // id state w/ no default value
  const [id, setId] = useState();

  // make edits to a todo - handle edit icon
  const handleEdit = (todo, index) => {
    setEditForm(true);
    setId(index);
    setTodoValue(todo.TodoValue);
  };

  // handle edit submit
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



  // handleCheckbox
  const handleCheckbox = (id) => {
    let todoArray = [];
    todos.forEach((todo) => {
      if(todo.ID === id){
        if(todo.completed === false){
          todo.completed = true;
        }
        else if (todo.completed === true) {
          todo.completed = false;
        }
      }
      todoArray.push(todo);
      setTodos(todoArray);
    });
  }




  return (
    <>
      {/* edit form component */}
      {/* this condition meant that this form will be visible when we start the app since the editForm state is false by default */}
      <h3>Weekly FE coding assignment tracker</h3>
      {editForm === false && (
        <div className="form">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add an Assignment"
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
                required
              />
              <div className="button">
                <button type="submit">
                  <Icon icon={plus} size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* end of form component */}

      {/* edit form component */}
      {/* this condition meant that this form will be visible when we start the app since the editForm state is false by default */}
      {/* <h3>Weekly FE coding assignment tracker</h3> */}
      {editForm === true && (
        <div className="form">
          <form autoComplete="off" onSubmit={handleEditSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add an Assignment"
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
                required
              />
              <div className="button edit">
                <button type="submit">Update</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* end of form component */}

      {/* start of rendering todos if we have todos.length > 0 */}
      {todos.length > 0 && (
        <>
          {todos.map((individualTodo, index) => (
            <div className="todo" key={individualTodo.ID}>
              
              {/* Checkbox and value div */}
              <div>
                {editForm === false && (
                <input type="checkbox" checked={individualTodo.completed}
                onChange={() => handleCheckbox(individualTodo.ID)} />
                )}
                <span
                style={individualTodo.completed === true ? {textDecoration: "line-through"}:{textDecoration: "none"}}>{individualTodo.TodoValue}</span>
              </div>

              {/* edit and delete icon div */}
              {editForm === false && (
                <div className="edit-and-delete">
                  <div
                    style={{ marginRight: 7 + "px" }}
                    onClick={() => handleEdit(individualTodo, index)}
                  >
                    <Icon icon={edit2} size={18} />
                  </div>
                  <div onClick={() => handleDelete(individualTodo.ID)}>
                    <Icon icon={trash} size={18} />
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* just after map closing brackets */}

          {/* delete all todos */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={() => setTodos([])} className="delete-all">
              Delete All
            </button>
          </div>
        </>
      )}
    </>
  );
};
