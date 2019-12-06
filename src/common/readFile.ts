import { readFileSync } from 'fs'


export const readFile = (fileName: string): string => readFileSync(fileName, 'UTF-8')