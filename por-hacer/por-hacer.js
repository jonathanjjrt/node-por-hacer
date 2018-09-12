const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () =>{

  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
  /*if (err)
    rejec(err);
    else resolve('db/data.json'.red);*/

  });

}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (e) {
    listadoPorHacer = [];

  }
  console.log(listadoPorHacer);

}

const crear = (descripcion) =>{

  cargarDB();

  let porHacer = {
      descripcion,
      completado:false
  };

  listadoPorHacer.push(porHacer);
  guardarDB();

  return porHacer;
}

const getListado = () => {
  cargarDB();
  //console.log(listadoPorHacer);
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) =>{

  cargarDB();

  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

  if( index >=0 ){
      listadoPorHacer[index].completado = completado;
      guardarDB();
      return true;
  }else{
    return false;
  }

}

const borrar = (descripcion)=>{
  cargarDB();
  /*let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  if( index >=0 ){
      delete listadoPorHacer[index];
      guardarDB();
      return true;
  }else{
    return false;
  }*/

  let nuevoListado = listadoPorHacer.filter(tarea =>{
    return tarea.descripcion !== descripcion;
  });

  if( listadoPorHacer.length === nuevoListado.length ){
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
  }

}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}
