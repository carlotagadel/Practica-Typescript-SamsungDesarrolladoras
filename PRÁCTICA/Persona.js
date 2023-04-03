"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get dni() {
        return this._dni;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(cumpleaños) {
        this._cumpleaños = cumpleaños;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    get mails() {
        return this._mails;
    }
    set mails(mails) {
        this._mails = mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    get notas() {
        return this._notas;
    }
    set notas(notas) {
        this._notas = notas;
    }
    cambioDireccion(direcciones) {
        this._direcciones = direcciones;
    }
    cambioTelefono(telefonos) {
        this._telefonos = telefonos;
    }
    /*He utilizado otro método para el mail:
    En primer lugar, buscar el mail dentro de Persona
    Si se encuentra, lo va a cambiar por el nuevo correo que quiero que tenga la persona
    Si no se encuentra, entonces añadirá el correo indicado en el array
    Me ha parecido útil utilizar este método en el mail porque es posible que la persona
    tenga un correo electrónico de tipo personal y el nuevo también lo sea, por lo que
    únicamente querremos cambiarlo y guardar el nuevo.
    Pero en el caso de que el tipo de correo sea diferente, por ejemplo, trabajo (primer correo) y personal (correo editado),
    tendremos la posibilidad de guardar los dos correos y verlos en la consola/agenda */
    cambioMail(mail) {
        let found = this._mails.find(m => m.tipo === mail.tipo);
        if (found)
            found.direccion = mail.direccion;
        else
            this._mails.push(mail);
    }
}
exports.Persona = Persona;
