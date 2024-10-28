import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "./model/usuario";
//import { Result }  from 'app/shared/model/result'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private apiUrl = 'https://localhost:7104/api/Usuario'; 

    constructor(
        private http: HttpClient
        //@Inject('BASE_URL') private baseurl: string
        ) { }

    // Obtém todas as tarefas
    getAllUSuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl);
    }

    // Obtém uma tarefa pelo ID
    getUsuarioById(id: number): Observable<Usuario> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Usuario>(url);
    }

    // Cria uma nova tarefa
    postUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiUrl, usuario, this.getHttpOptions());
    }

    // Atualiza uma tarefa existente
    updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Usuario>(url, usuario, this.getHttpOptions());
    }

    // Deleta uma tarefa pelo ID
    deleteUsuario(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    // Opções HTTP (ex.: cabeçalhos)
    private getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }
}