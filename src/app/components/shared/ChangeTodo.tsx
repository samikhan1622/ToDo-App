import Form from "./ui/Form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ChangeStatus } from "@/app/actions/todoActions";
import Input from "./ui/Input";
import Buttons from "./ui/Buttons";
import { todoTypes } from "../../../../tyeps/todoTypes";


export const ChangeTodo = ({todo}: {todo: todoTypes}) => {
    const todoStyle = {
        textDecoration: 
        todo.isCompleted === true ? "Line-through" :
        "none",
    };
  return (
    <Form action={ChangeStatus}>
        <Input name="inputId" value={todo.id} type="hidden"/>
        <Buttons actionButton type="submit" text={<AiOutlineCheckCircle />}       
        />
    </Form>
  )
}
