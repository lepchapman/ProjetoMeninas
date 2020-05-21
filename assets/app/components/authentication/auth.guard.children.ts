import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable()
export class AuthGuardChildren implements CanActivate{

    constructor(private usuarioService: UsuarioService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean> {

        if (this.usuarioService.isSignedIn()) {
            this.router.navigate(['/authentication/signout']);
            return false;
        }
        return true;
    }
}