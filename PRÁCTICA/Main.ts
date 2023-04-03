import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

// Datos, direccion, telefono y mail de cada persona

//PERSONA 1:

const direccionPersona1 = new Direccion ("Verdi", 21, 2, "B", 18012, "Barcelona", "Barcelona");
const telefonoPersona1 = new Telefono ("movil", 698478523);
const mailPersona1 = new Mail ("trabajo", "tonystark@avengers.com");
const datosPersona1 = new Persona ("Tony", "Stark", 53, "25423687X", new Date (1970, 5, 29), "rojo", "hombre", [direccionPersona1], [mailPersona1], [telefonoPersona1], "Conocido del gimnasio");

//PERSONA 2:

const direccionPersona2 = new Direccion ("Jocs Florals", 155, 5, "A", 53014, "Barcelona", "Barcelona");
const telefonoPersona2 = new Telefono ("fijo", 934800126);
const mailPersona2 = new Mail ("personal", "natasha12@gmail.com");
const datosPersona2 = new Persona ("Natasha", "Romanoff", 39, "45869715A", new Date (1984, 12, 3), "negro", "mujer", [direccionPersona2], [mailPersona2], [telefonoPersona2], "Llamar para tomar un café");

//PERSONA 3:

const direccionPersona3 = new Direccion ("Rauric", 17, 1, "A", 91019, "Barcelona", "Barcelona");
const telefonoPersona3 = new Telefono ("movil", 879465132);
const mailPersona3 = new Mail ("personal", "slee@hotmail.com");
const datosPersona3 = new Persona ("Stan", "Lee", 101, "41259621J", new Date(1922, 12, 28), "amarillo", "hombre", [direccionPersona3], [mailPersona3], [telefonoPersona3], "Comprarle un cómic");

//Los mostramos en consola

console.log("Contactos en mi agenda:");
console.log(datosPersona1);
console.log(datosPersona2);
console.log(datosPersona3);

//Buscamos por DNI y realizamos los cambios en la persona 3

const miAgenda: Persona [] = [datosPersona1, datosPersona2, datosPersona3];

const buscarDni: string = "41259621J";

const editarDatosContacto: Persona = miAgenda.find(persona => persona.dni === buscarDni) as Persona;

const direccionCambiada = new Direccion ("Empordà", 67, 1, "A", 71056, "Begues", "Barcelona")
const telefonoCambiado = new Telefono ("trabajo", 669311524)
const mailCambiado = new Mail ("personal", "stanlee@gmail.com")

editarDatosContacto.cambioDireccion([direccionCambiada]);
editarDatosContacto.cambioTelefono([telefonoCambiado]);
editarDatosContacto.cambioMail(mailCambiado);

console.log("Contactos editados: ");

console.log("P1", datosPersona1); //P1 y P2 para comprobar en la consola que aparecen de nuevo después del primer console.log
console.log("P2", datosPersona2);
console.log("Editada P3",datosPersona3); // he añadido "Editada P3" para que en la consola pueda ver si está saliendo correctamente