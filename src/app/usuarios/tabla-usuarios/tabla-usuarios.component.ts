import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router'
import { ListaUsuariosI} from '../../modelos/listausuarios.interface';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios:ListaUsuariosI[] =[];
  
  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
    this.api.getAllUsuarios().subscribe(data=>{
      this.usuarios = data;
    })
  }

}
