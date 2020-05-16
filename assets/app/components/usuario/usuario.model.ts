import { Message } from "../messages/message.model";

export class Usuario {
  email:string;
  password:string;
  firstName?:string;
  lastName?:string;
  // messages?: Message[];


  constructor(email:string,password:string,firstName?:string,lastName?:string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    // for(let msg of messages){
    //   this.messages.push(msg);
    // }
  }
}
