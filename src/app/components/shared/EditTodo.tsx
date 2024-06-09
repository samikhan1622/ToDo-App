"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "./ui/Form";
import Buttons from "./ui/Buttons";
import Input from "./ui/Input";
import { useState } from "react";
import { todoTypes } from "../../../../tyeps/todoTypes";
import { BiEdit } from "react-icons/bi";



export const EditTodo = ({todo}: {todo: todoTypes}) => {
    const [EditTodo, setEditTodo] = useState(false)

    const handleEdit = () => {
      if (todo.isCompleted === true) {
        return
      }
      setEditTodo(!EditTodo);
    };

    const handleSubmit = () => {
      setEditTodo(false);
    }
  return (
    <div className="flex gap-5 items-center">
        <Buttons onClick={ handleEdit}
            text={<BiEdit />}
            actionButton
            />
            {EditTodo ? (
              <Form
              action={edit}
              onSubmit={handleSubmit}
              >
                <Input 
                name="inputId"
                value={todo.id}
                type="hidden"/>
                <div className="flex justify-center">
                  <Input 
                  type="text"
                  name="newTitle"
                  placeholder="Edit Todo..."/>
                  <Buttons type="submit" text="Save" 
                  onClick={() => {}} // No action needed on button click, form submission will handle it
                  actionButton
                  />
                </div>
              </Form>
            ) : null}
    </div>
  )
}
