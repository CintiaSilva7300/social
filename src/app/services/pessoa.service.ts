import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { Pessoas } from '../models/pessoasModel';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = 'http://localhost:3000/pessoas';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getPessoas(): Observable<Pessoas[]> {
    return this.httpClient.get<Pessoas[]>(this.url)
    .pipe(
      retry(2)
    )
  }
}
