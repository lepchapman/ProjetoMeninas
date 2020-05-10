export class Usuario {
  email:String;
  password:String;
  firstName?:string;
  lastName?:string;

  constructor(email:string,password:string,firstName?:string,lastName?:string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
