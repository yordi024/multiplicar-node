//requireds
const colors = require('colors');
const fs = require('fs'); //De node
// const fs = require('express'); Externos
// const fs = require('./fs'); Propios

let listarTabla = (base, limite = 12) => {
    console.log('====================='.green);
    console.log(` Tabla del ${base}`.green);
    console.log('====================='.green);
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base * i }\n`;
    }
    console.log(data.cyan);
}

let crearArchivo = (base, limite = 12) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}