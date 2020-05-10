export class Usuario{
    nome?: String;
    sobreNome?: String;
    senha: String;
    email: String;

    constructor(senha: String, email: String, nome?: String, sobreNome?: String){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.senha = senha;
        this.email = email;
    }

}