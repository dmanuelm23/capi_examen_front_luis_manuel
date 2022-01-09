import { Injectable } from '@angular/core';

import {ListaUsuariosI} from '../../modelos/listausuarios.interface';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  //Cambiar la URL que genere su servidor local de laravel

  url:string = "http://capi_examen_back_luis_manuel.test/"

  constructor(private http:HttpClient) { }

  getAllUsuarios():Observable<ListaUsuariosI[]>{
    let direccion = this.url +"api/users";

    return this.http.get<ListaUsuariosI[]>(direccion);

  }
}
