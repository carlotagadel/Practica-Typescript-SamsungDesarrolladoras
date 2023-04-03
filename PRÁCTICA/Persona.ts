import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas?: any; //le he añadido ? porque podría darse el caso en que algún contacto no tuviera notas

    constructor(
        nombre: string, 
        apellidos: string, 
        edad: number, 
        dni: string, 
        cumpleaños: Date, 
        colorFavorito: string, 
        sexo: string, 
        direcciones: Direccion[], 
        mails: Mail[], 
        telefonos: Telefono[],
        notas?: any
    ){
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

    get nombre(): string{
        return this._nombre;
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get apellidos(): string{
        return this._apellidos;
    }
    set apellidos(apellidos: string){
        this._apellidos = apellidos;
    }

    get edad(): number{
        return this._edad;
    }
    set edad(edad: number){
        this._edad = edad;
    }

    get dni(): string{
        return this._dni;
    }
    set dni(dni: string){
        this._dni = dni;
    }

    get cumpleaños(): Date{
        return this._cumpleaños;
    }
    set cumpleaños(cumpleaños: Date){
        this._cumpleaños = cumpleaños;
    }

    get colorFavorito(): string{
        return this._colorFavorito;
    }
    set colorFavorito(colorFavorito: string){
        this._colorFavorito = colorFavorito;
    }

    get sexo(): string{
        return this._sexo;
    }
    set sexo(sexo: string){
        this._sexo = sexo;
    }

    get direcciones(): Direccion[]{
        return this._direcciones;
    }
    set direcciones(direcciones: Direccion[]){
        this._direcciones = direcciones;
    }

    get mails(): Mail[]{
        return this._mails;
    }
    set mails(mails: Mail[]){
        this._mails = mails;
    }

    get telefonos(): Telefono[]{
        return this._telefonos;
    }
    set telefonos(telefonos: Telefono[]){
        this._telefonos = telefonos;
    }

    get notas(): any{
        return this._notas;
    }
    set notas(notas: any){
        this._notas = notas;
    }
    
    cambioDireccion(direcciones: Direccion[]){
        this._direcciones = direcciones
    }

    cambioTelefono(telefonos: Telefono[]){
        this._telefonos = telefonos
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

    cambioMail(mail: Mail){
        let found: any = this._mails.find(m => m.tipo === mail.tipo);
        if (found)      
            (found as Mail).direccion = mail.direccion;
        else
            this._mails.push(mail);
    }
}
