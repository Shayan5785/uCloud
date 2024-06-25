import { handleDeleteFile } from '@/app/helper/actions'
import { File } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from './ui/dialog'
import { Separator } from "@/components/ui/separator"

const FileComponent = ({ folderName }: { folderName: string }) => {

    const [fileData, setFileData] = useState('')

    useEffect(() => {
        const fetchFile = async () => {
            const data = await fetch('http://localhost:3000/api/file/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indicate JSON data
                },
                body: JSON.stringify({ fileName: folderName }), // Convert data object to JSON string
            })
            const res = await data.json()
            console.log()
            setFileData(res.result)
        }
        fetchFile()
    }, [folderName])


    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <File width={100} height={100} onDoubleClick={() => {
                        console.log('clicked')
                    }} />
                </DialogTrigger>
                <DialogContent>
                    <h1 className='text-[28px]'>{folderName}</h1>
                    <Separator />
                    <p>{fileData}</p>
                </DialogContent>
            </Dialog>
            <div className=' flex absolute bottom-0 left-0 right-0'>
                <button
                    className='bg-red-500 flex-1 rounded-s-none group-hover:h-[auto] h-0'
                    onClick={() => {
                        handleDeleteFile({ fileName: folderName })

                    }}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default FileComponent