import { readFile } from "fs/promises"
import { NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
    const { fileName } = await request.json()
    console.log(fileName)
    const result = await readFile(`./public/upload/${fileName}`, 'utf-8')
    return Response.json({ result })
}