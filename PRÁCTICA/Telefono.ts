export class Telefono {
    private _tipo: string;
    private _numero: number;

    constructor(tipo: string, numero: number){
        this._tipo = tipo;
        this._numero = numero;
    }

    public get tipo(): string{
        return this._tipo;
    }
    public set tipo(tipo: string){
        this._tipo = tipo;
    }

    public get numero(): number{
        return this._numero;
    }
    public set numero(numero: number){
        this._numero = numero;
    }
}