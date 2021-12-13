

export class Usuario {
  // public id: number;
  // public email: string;
  // public first_name: string;
  // public last_name: string;
  // public avatar: string;  // Esto es una forma de hacerlo, pero mejor la de abajo

  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string
  ){ }

}
