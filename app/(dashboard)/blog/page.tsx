import { getAllTodos } from '@/api'
import AddTask from '@/components/AddTask'
import TodoList from '@/components/TodoList'
//import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)
  
  if(session?.user){
    const tasks = await getAllTodos()
    console.log(tasks)
    return(
    // <div>
    //   <h1 className='text-4xl'>Welcome to the Blog!</h1>
    //   <h2 className='text-2xl'>{session?.user.username}</h2>
    // </div>
      <main>
        <div className='text-center flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>CRUD Blog</h1>
          <AddTask/>
        </div>
        <TodoList tasks={tasks} />
      </main>
    )
  }

  return(
    <h2>Please login to access the blog!</h2>
  )
}

export default page