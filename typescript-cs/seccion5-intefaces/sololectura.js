var persona = { nombre: 'Gabriel', apellido: 'Rodriguez' };
persona.nombre = 'Alejandro';
console.log('this script is meant to fail on purpose');
persona.apellido = 'Ballesteros';
console.log(persona);
