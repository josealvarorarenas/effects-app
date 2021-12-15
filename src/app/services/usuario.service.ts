import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url ='https://reqres.in/api'

  constructor( private http: HttpClient ) { }

  getUsers(){
    return this.http.get(`${ this.url }/users?per_page=6&delay=3`) //hay que retornarlo porque es un observable
    .pipe(
      map( (resp: any) => resp['data'])
    );
  }

  getUsersById( id: string ){
    return this.http.get(`${ this.url }/users/${ id }`) //hay que retornarlo porque es un observable
    .pipe(
      map( (resp: any) => resp['data'])
    );
  }

}
