"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
}
exports.Mail = Mail;
