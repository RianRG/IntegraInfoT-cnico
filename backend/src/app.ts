import fastify from 'fastify';
import cookie from  '@fastify/cookie'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { RegisterStudentRoute } from './routes/register-student.ts';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(cookie, {
    secret: process.env.COOKIE_SECRET,
    hook: 'onRequest',
})

app.register(jwt, {
  secret: process.env.COOKIE_SECRET!,
})

app.addHook('preHandler', (req, res, done) =>{
  req.jwt = app.jwt;
  return done();
})

app.register(cors, {
  origin: "http://localhost:4200",
  credentials: true,
})

export { app };

app.register(RegisterStudentRoute)