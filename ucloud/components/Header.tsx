import React from 'react'
import Add from './Add'
import FolderBreadCrumb from './FolderBreadCrumb'

const Header = () => {
    return (
        <div className='flex items-center gap-5 bg-slate- p-4 mb-5 rounded-full'>
            <Add />
            <FolderBreadCrumb />
        </div>
    )
}

export default Header