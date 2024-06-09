
import  AddTodo  from './components/shared/addTodo';
import { prisma } from '../../utils/prisma';
import Todo from './components/shared/Todo';

async function getData () {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data

};

const Home = async() => {
  const data = await getData();
  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>
      <span className='text-3xl font-extrabold uppercase'>To-Do-App</span>
      <h1 className='text-3xl font-extrabold uppercase mt-5'>Next.js
      <span className='text-orange-700 ml-2'>Server Action</span>
      </h1>
      <div className='flex justify-center flex-col items-center w-[1000px] mt-10'>
        <AddTodo />
        <div className='flex flex-col gap-5 justify-center items-center mt-10 w-full'>
          {data.map((todo, id) => (
            <div className='w-full' key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;