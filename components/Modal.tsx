import React, { FC, ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { FaPlus } from 'react-icons/fa6'

interface ModalProps{
    children: ReactNode
}

const Modal: FC<ModalProps> = ({children}) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className='w-full justify-between'>Add new task<FaPlus className='size-3 ml-1'  /></Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                {/* <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription> */}
                {children}
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default Modal