import React, { useState } from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 } from "uuid";

const TodoForms = ({addTodo}) => {
  const [todoString, setTodoString] = useState("");
  const onSubmitHandler=(e)=>{
    if(todoString ===""){
        alert("Enter a todo")
        e.preventDefault()
    }else{
        e.preventDefault()
        const todo={
            todoString,
            id:v4()
        }
        addTodo(todo)
        setTodoString("")
    }
  }
  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Input
              placeholder="Enter Todo"
              type="text"
              value={todoString}
              onChange={(e) => setTodoString(e.target.value)}
            />
            <Button color="danger">ADD</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForms;
