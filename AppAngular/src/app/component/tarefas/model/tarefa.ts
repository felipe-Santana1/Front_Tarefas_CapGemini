import { Usuario } from "../../usuario/model/usuario";

export class Tarefa {
    id: number | undefined;
    nome: string | undefined;
    descricao!: string;
    status: number | undefined;
    usuarioID:number | undefined;
    usuario?: Usuario;
}
