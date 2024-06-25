'use client'
import React from 'react'
import { handleDeleteFile, handleDeleteFolder } from '../app/helper/actions'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { File, Folder } from 'lucide-react'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog'
import { revalidateTag } from 'next/cache'
import FileComponent from './FileComponent'

interface IProp {
    folderName: string,
}

const FolderCard = ({ folderName }: IProp) => {
    const regex = /\.txt$/
    const file = regex.test(folderName)

    return (
        <div className='select-none'>
            <Card className='group relative overflow-hidden'>
                <CardHeader className=' flex flex-col'>
                    {file ? <>
                        <FileComponent folderName={folderName} />
                    </> : <>
                        <Folder width={100} height={100} onDoubleClick={() => {
                            console.log('clicked')
                        }} />
                        <div className=' flex absolute bottom-0 left-0 right-0'>
                            <button
                                className='bg-red-500 flex-1 rounded-s-none group-hover:h-[auto] h-0'
                                onClick={() => {
                                    handleDeleteFolder({ folderName })

                                }}>
                                Delete
                            </button>
                        </div>
                    </>}
                </CardHeader>
            </Card>
            <p>{folderName}</p>
        </div>
    )
}

export default FolderCard