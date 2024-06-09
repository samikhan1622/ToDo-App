"use client";
import { DeleteTodoAction } from "@/app/actions/todoActions";
import Form from "./ui/Form";
import Buttons from "./ui/Buttons";
import Input from "./ui/Input";
import { todoTypes } from "../../../../tyeps/todoTypes";
import { BsFillTrashFill } from "react-icons/bs"



export const DeleteTodo = ({todo}: {todo: todoTypes}) => {
  return (
    <Form action={DeleteTodoAction}>
        <Input 
        type="hidden"
        name="inputId"
        value={todo.id}/>
        <Buttons actionButton text={<BsFillTrashFill />} type="submit" 
        onClick={() => {}} // No action needed on button click, form submission will handle it
         />
    </Form>
  )
}
