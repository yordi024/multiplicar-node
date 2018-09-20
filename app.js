const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, `${ archivo }`.green))
            .catch(err => console.log(err))
        break;

    default:
        console.log("Comando no reconocido");
        break;
}

// console.log('Limite', argv.limite);
// console.log('Base', argv.base);