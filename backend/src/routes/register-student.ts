import { FastifyTypedInstance } from "../types.ts"

export async function RegisterStudentRoute(app: FastifyTypedInstance){
  app.get('/', async (req, res) =>{
    return res.status(200).send({ msg: 'hello' })
  })
}