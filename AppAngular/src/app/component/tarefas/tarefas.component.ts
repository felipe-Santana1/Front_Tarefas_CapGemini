import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from './model/tarefa';
import { TarefaService } from './tarefa.service';
import { UsuarioService } from '../usuario/usuario.service';

import { Usuario } from '../usuario/model/usuario';
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent implements OnInit {
  
  tarefaForm!: FormGroup;
  tarefaModel: Tarefa = new Tarefa();
  tarefa: Tarefa[] = [];

  usuarioModel: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: TarefaService,
    private serviceUsuario: UsuarioService,
    ){}

  ngOnInit(): void {
    this.listarTarefas();
    this.listarUsuarios();

    this.tarefaForm = this.formBuilder.group({
      id: [this.tarefaModel.id || 0],
      nome: [this.tarefaModel.nome || '', Validators.required],
      descricao: [this.tarefaModel.descricao || '', [Validators.required]],
      status: [this.tarefaModel.status || 0],
      usuarioID: [this.tarefaModel.usuarioID || 0],
    });
  }

teste(event: any) {
  const id = this.tarefaForm.get('usuarioID')?.value;
  console.log('[OBJ]:', this.tarefaForm.value)
}

  listarUsuarios(){
    this.serviceUsuario.getAllUSuario().subscribe(
      result => {
        this.usuarios = result;
        console.log(result)
      }
    )
  }

  adicionarTarefa(tarefa: Tarefa) {
    console.log(this.tarefaForm.value)
    if (tarefa.id !== undefined && tarefa.id > 0) {
      this.service.updateTarefa(tarefa.id, this.tarefaForm.value).subscribe((resp: Tarefa) => {
        window.alert("Tarefa atualizada com sucesso.");
        this.listarTarefas();
        this.atualizarPagina();
      })
    } else {
      this.service.postTarefa(this.tarefaForm.value).subscribe((resp: Tarefa) => {
        this.listarTarefas();
        window.alert("Tarefa adicionada com sucesso.")
        this.atualizarPagina();
      })
    }   
  }

  listarTarefas(){
    this.service.getAllTarefa().subscribe(
      result => {
        this.tarefa = result;
        console.log(result)
      }
    )
  }

  editarTarefa(tarefa: Tarefa){
    this.tarefaForm.patchValue({
      id: tarefa.id,
      nome: tarefa.nome,
      descricao: tarefa.descricao,
      status: tarefa.status,
      usuarioID: tarefa.usuarioID
    });

  }

  excluirTarefa(id: number) {
    id = id;
    console.log('Excluir usuário com ID:', id);
    this.service.deleteTarefa(id).subscribe((id) => {
      window.alert("Tarefa excluida com sucesso.");
      this.listarTarefas();
    })
  }

  atualizarPagina(){
    window.location.reload();
  }
}
