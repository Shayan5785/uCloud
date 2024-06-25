import { readdir } from 'fs/promises';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const result = await readdir('./public/upload/')
  return Response.json({ result })
}

export const POST = async (request: NextRequest) => {
  const { folderName } = await request.json()
  console.log(folderName)
  const result = await readdir(`./public/upload/${folderName}`)
  return Response.json({ result })
}