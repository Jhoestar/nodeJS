# nodeJS
learning node


https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe

https://github.com/Schniz/fnm

fnm --version
fnm list
fnm install 20.17.0
fnm use 20.17.0
fnm alias 20.17.0 default

node -> ejecuta node
    repl
        read 
        eval
        print
        loop

window no puede ser usada con node sin el navegador
globalThis es la variable global en todos los entornos de node 
    -> siempre se tiene acceso
    -> globalThis apunta a window en el navegador
    -> en node js apunta a global


en node trataremos de crear varios ficheros los cuales importaremos para reutilizarlos                                            

el sistema de modulos se llama comon js -> no es recomendable a dia de hoy

commonJS:
    para exportar:

        function sum(x,y){return x + y}
        module.exports = sum

    para importar:

            const sum = require('./sum')
            console.log(sum(1,2))


 .js -> por defecto utiliza commonJS
 .mjs -> para utilizar ES Modules
 .cjs -> para utilizar commonJS

export:

    export function sum(x,y){return x + y}

import:

    import {sum} from './sum.mjs'
    console.log(sum(1,2))

Biblioteca de modulos:

    const os = requiere('node:os')
    console.log('informacion del SO')
    console.log('**************************')
    console.log('Version del sistema operativo:', os.platform())
    console.log('Arquitectura:', os.arch())
    console.log('CPUs', os.cpus())
    console.log('memoria libre:', os.freemem() / 1024 / 1024)
    console.log('memoria total:', os.totalmem() / 1024 / 1024)


const text = fs.readFileSync('./archivo.txt')  -> nos devuelve un buffer con memoria, asi que lo podemos convertirlo:

    const text = fs.readFileSync('./archivo.txt','utf-8') 


si se usa readFileSync sera sincrono, en cambio usando readFile es asincrono
Entonces cuando nosotros usamos alguna funcion asincrona trabajamos tambien con callbacks ya que cuando esa funcion termine devolvera un valor sin embargo el codigo continuara ejecutandose sin importar si la funcion asincrona haya terminado, una vez terminada se envia la respuesta.

Segun varias tareas asincroncas puede que nos devuelva uno u otro resultado

Aqui es donde entran las promesas que nos permite usarlas y dejar de lado los callbacks


de igual forma hay modulos que tengan la opcion de promesas y modulos que no sin embargo igualmente tenemos otra opcion que nos ayuda a usar promesas que es el promify


    