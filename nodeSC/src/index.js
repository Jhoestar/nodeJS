import { config } from "dotenv"
// para poder usar las variables de entorno
import env from 'env-var'
// para asegurar? la obtencion del puerto

config()

const PORT = env.get('PORT').required().asPortNumber()
// el puerto se obtiene de la variable PORT 
// el puerto es requerido
// el puerto es convertido a numero
console.log(PORT)
console.log(process.env.PORT)
console.log(process.env.JHOJAN_RIOS)
