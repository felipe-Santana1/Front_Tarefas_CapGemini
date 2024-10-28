import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { TarefasComponent } from './component/tarefas/tarefas.component';
import { KanbamComponent } from './component/kanbam/kanbam.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent},
  {path: 'tarefa', component: TarefasComponent},
  {path: 'kanbam', component: KanbamComponent},

];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
