import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { CadastrarComponent } from '../app/components/cadastrar/cadastrar.component';

const routes: Routes = [
 
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    // {
    //   path: 'cadastro',
    //   component: CadastrarComponent,
    // },
    {
      path: 'login',
      component: LoginComponent,
    },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
