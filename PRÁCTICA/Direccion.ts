export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;  
  private _letra: string;
  private _codigoPostal: number;
  private _poblacion: string;
  private _provincia: string;

  constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string){
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  public get calle(): string{
    return this._calle;
  }
  public set calle(calle: string){
    this._calle = calle;
  }

  public get numero(): number{
    return this._numero;
  }
  public set numero(numero: number){
    this._numero = numero;
  }

  public get piso(): number{
    return this._piso;
  }
  public set piso(piso: number){
    this._piso = piso;
  }

  public get letra(): string{
    return this._letra;
  }
  public set letra(letra: string){
    this._letra = letra;
  }

  public get codigoPostal(): number{
    return this._codigoPostal;
  }
  public set codigoPostal(codigoPostal: number){
    this._codigoPostal = codigoPostal;
  }

  public get poblacion(): string{
    return this._poblacion;
  }
  public set poblacion(poblacion: string){
    this._poblacion = poblacion;
  }

  public get provincia(): string{
    return this._provincia;
  }
  public set provincia(provincia: string){
    this._provincia = provincia;
  }
}