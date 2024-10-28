import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  
  usuarioForm!: FormGroup;
  usuarioModel: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService,
    ){}

  ngOnInit(): void {
    this.listarUsuarios();
    this.usuarioForm = this.formBuilder.group({
      id: [this.usuarioModel.id || 0],
      nome: [this.usuarioModel.nome || '', Validators.required],
      email: [this.usuarioModel.email || '', [Validators.required, Validators.email]]
    });
  }

  adicionarUsuario(usuario: Usuario) {
    if (usuario.id !== undefined && usuario.id > 0) {
      this.service.updateUsuario(usuario.id, this.usuarioForm.value).subscribe((resp: Usuario) => {
        this.listarUsuarios();
      })
    } else {
      this.service.postUsuario(this.usuarioForm.value).subscribe((resp: Usuario) => {
        this.listarUsuarios();
      })
    }   
  }

  listarUsuarios(){
    this.service.getAllUSuario().subscribe(
      result => {
        this.usuarios = result;
      }
    )
  }

  editarUsuario(usuario: Usuario){
    
    this.usuarioForm.patchValue({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    });

  }

  excluirUsuario(id: number) {
    id = id;
    console.log('Excluir usuário com ID:', id);
    this.service.deleteUsuario(id).subscribe((id) => {
    this.listarUsuarios();
    })
  }
}
