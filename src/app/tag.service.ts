import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Database } from './database.model';
import { AutenticacaoService } from './api.service';
import { map } from 'rxjs/operators';
import { Noticia } from './noticia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  API_URL = 'http://localhost:8000/api/tags/';
  constructor(private http: HttpClient,private auth: AutenticacaoService) { }

  public todos() {
    return this.http.get(this.API_URL);
  }
  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }
  public encontrar(id: number) {
    return this.http.get(this.API_URL + id + '/');
  }

  public salvar(tag: string, slug: string){
    const options = this.getHeaders();
    const tags = {
      nome: tag,
      email: slug
    };
    return this.http.post(this.API_URL, tags, options);
  }
  public alterar(id:Number, tag: String){
    const options = this.getHeaders();
    let url =this.API_URL + id + '/'
    const tags = {
      tag: tag,
    };
    return this.http.put(url, tags, options)

  }
}
