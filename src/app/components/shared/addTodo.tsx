"use client"
import  Form  from './ui/Form';
import  Input  from './ui/Input';
import Buttons from './ui/Buttons';
import { create } from '@/app/actions/todoActions';


const AddTodo = () => {
  return (
    <Form action={create} className='w-1/2 m-auto'>
        <div className='flex'>
            <Input 
            name='input'
            type='text'
            placeholder='Add Todo...'
            />
            <Buttons 
          type='submit'
          text='Add'
          onClick={() => {}} // No action needed on button click, form submission will handle it
          actionButton={true}
        />
        </div>
    </Form>
  )
}

export default AddTodo;