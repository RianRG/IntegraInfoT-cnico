import { app } from "./app.ts";

if(!process.env.PORT) throw new Error('Variáveis ambientes não disponíveis!');

app.listen({
  port: +process.env.PORT
})
.then(() => console.log('runnin at ' + process.env.PORT));