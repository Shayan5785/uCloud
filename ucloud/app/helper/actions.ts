'use server'

import { mkdir, rmdir, unlink, writeFile } from 'fs/promises';
import { revalidatePath, revalidateTag } from 'next/cache'

export async function createFolder(formData: FormData) {
  const folderName = formData.get('text')
  await mkdir(`./public/upload/${folderName}`, { recursive: true });
  revalidateTag('dir')
}

export const handleDeleteFolder = async ({ folderName }: { folderName: string }) => {
  await rmdir(`./public/upload/${folderName}`, { recursive: true })
  revalidateTag('dir')
}

export const createFile = async (formData: FormData) => {
  const fileName = formData.get('file')
  const fileContent = formData.get('textArea')
  await writeFile(`./public/upload/${fileName}.txt`, `${fileContent}`)
  revalidateTag('dir')
}

export const handleDeleteFile = async ({ fileName }: { fileName: string }) => {
  await unlink(`./public/upload/${fileName}`)
  revalidateTag('dir')
}