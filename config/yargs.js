const opt = {
  descripcion:{
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
  },
  completado:{
    alias: 'c',
    default: true,
    desc:'Marca como completado la tarea'
  }
}

const argv = require('yargs')
.command('crear','Crear un elemento por hacer',opt)
 .command('actualizar','Actualiza el estado completado de una tarea',opt)
 .command('borrar','Se borro de la lista',opt)
 .help()
 .argv;

module.exports = {
  argv
}
