'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from './ui/input'
import { Textarea } from "@/components/ui/textarea"
import { createFile, createFolder } from '@/app/helper/actions'
import { Button } from './ui/button'


const Add = () => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [fileName, setFileName] = useState('')
    const [textArea, setTextArea] = useState('')

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='flex items-center'>
                <CirclePlus className='cursor-pointer stroke-blue-300' />
            </DialogTrigger>
            <DialogContent>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-full" value="folder">Folder</TabsTrigger>
                        <TabsTrigger className="w-full" value="file">File</TabsTrigger>
                    </TabsList>
                    <TabsContent value="folder">
                        <DialogHeader className='mt-5 '>
                            <form action={createFolder} className='flex flex-col gap-2'>
                                <h2 className='font-semibold '>Enter the name of folder</h2>
                                <Input name='text' type='text' placeholder='enter the name of the folder...' value={text} onChange={e => setText(e.target.value)} />
                                <Button onClick={() => {
                                    setOpen(!open)
                                }} className='mt-2   py-2 disabled:' type='submit' disabled={text.length < 1}>Create Folder</Button>
                            </form>
                        </DialogHeader>
                    </TabsContent>
                    <TabsContent value="file">
                        <DialogHeader className='mt-5'>
                            <form action={createFile} className='flex flex-col gap-2'>
                                <h2 className='font-semibold '>Enter the name of File</h2>
                                <Input
                                    type='text'
                                    name='file'
                                    placeholder='enter the name of the file...'
                                    value={fileName}
                                    onChange={e => setFileName(e.target.value)}
                                />
                                <h2 className='font-semibold '>Enter the content of the File</h2>
                                <Textarea
                                    name='textArea'
                                    placeholder='type the content of the file'
                                    value={textArea}
                                    onChange={e => setTextArea(e.target.value)}
                                />
                                <Button onClick={() => setOpen(!open)} className='mt-2   py-2 disabled:' type='submit' disabled={fileName.length < 1}>Create File</Button>
                            </form>
                        </DialogHeader>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>

    )
}

export default Add