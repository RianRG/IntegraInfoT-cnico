import { FastifyTypedInstance } from "../types.ts"

export async function RegisterStudentRoute(app: FastifyTypedInstance){
  app.post('/student', async (req, res) =>{
    return res.status(200).send({ msg: 'hello' })
  })
}