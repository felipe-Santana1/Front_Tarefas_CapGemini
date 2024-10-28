import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { TarefasComponent } from './component/tarefas/tarefas.component';
import { KanbamComponent } from './component/kanbam/kanbam.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
//import { UsuarioComponent } from './modules/Usuario/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefasComponent,
    KanbamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
