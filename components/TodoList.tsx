import React, { ReactNode } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { ITask } from '@/types/tasks'
import Task from './Task'

interface TodoListProps{
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Favorite Color</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tasks.map((task) => (
              <Task key={task.id} task={task}/>
            ))}
        </TableBody>
    </Table>
  )
}

export default TodoList