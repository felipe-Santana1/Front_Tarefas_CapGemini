import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tarefa } from "./model/tarefa";
import { Usuario } from "../usuario/model/usuario";
//import { Result }  from 'app/shared/model/result'

@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    private apiUrl = 'https://localhost:7104/api/Tarefa'; 

    constructor(
        private http: HttpClient
        //@Inject('BASE_URL') private baseurl: string
        ) { }

    // Obtém todas as tarefas
    getAllTarefa(): Observable<Tarefa[]> {
        return this.http.get<Tarefa[]>(this.apiUrl);
    }

    // Obtém uma tarefa pelo ID
    getTarefaById(id: number): Observable<Tarefa> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Tarefa>(url);
    }

    // Cria uma nova tarefa
    postTarefa(usuario: Tarefa): Observable<Tarefa> {
        return this.http.post<Tarefa>(this.apiUrl, usuario, this.getHttpOptions());
    }

    // Atualiza uma tarefa existente
    updateTarefa(id: number, usuario: Tarefa): Observable<Tarefa> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Tarefa>(url, usuario, this.getHttpOptions());
    }

    // Deleta uma tarefa pelo ID
    deleteTarefa(id: number): Observable<void> {
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