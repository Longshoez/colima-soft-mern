//El interrogante representa que el parámetro de la edad es opcional
var opcionales = function (nombre, apellido, edad) {
    if (edad)
        console.log("howdy ".concat(nombre, " of the ").concat(apellido, "'s, are you ").concat(edad));
    else
        console.log("howdy ".concat(nombre, " of the ").concat(apellido, "'s"));
};
opcionales('Gabriel', 'Ballesteros', 22);
//Asi que si en una nueva llamada a la función no mandamos el parámetro de edad
//no habrá ningún inconveniente, tho it we use it in our function as im doing 
//in the first case it will return an undefined value, thats why i added the if statement
//if we dont send an Edad value it will run the second part of the statement
opcionales('Alejandro', 'Rodrigues');
