import React from 'react'
import { TableCell, TableRow } from './ui/table'
import { ITask } from '@/types/tasks'

interface TaskProps{
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <TableRow key={task.id}>
        <TableCell className="font-medium">{task.text}</TableCell>
        <TableCell className="text-right">Blue</TableCell>
    </TableRow>
  )
}

export default Task