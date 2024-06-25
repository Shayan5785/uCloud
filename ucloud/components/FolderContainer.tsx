import React, { useContext, useEffect, useState } from 'react'
import FolderCard from './FolderCard'
// import { Directory } from '@/lib/context'

interface IProp {
    // Folders: string[]
}

const FolderContainer = async ({ }: IProp) => {

    // const dir = useContext(Directory)
    // const [Folders, setFolders] = useState<{ result: string[] | null }>({ result: null })
    // console.log(Folders)
    // useEffect(() => {
    const res = await fetch('http://localhost:3000/api/', {
        cache: 'no-cache',
        next: { tags: ['dir'] }
    })
    const Folders = await res.json()
    // }, [dir.dir])

    return (
        <div className="flex flex-wrap gap-5">
            {Folders.result && Folders.result.map((folderName: string) => <FolderCard key={folderName} folderName={folderName} />)}
        </div>
    )
}

export default FolderContainer