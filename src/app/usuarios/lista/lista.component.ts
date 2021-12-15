import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select( 'usuarios' ).subscribe( ({ users }) => {
      this.usuarios = users;
      this.loading = this.loading;
      this.error = this.error;
    });

    this.store.dispatch( cargarUsuarios() );

    // this.usuarioService.getUsers()
    // .subscribe( users => {
    //   console.log(users);
    //   this.usuarios = users;

    // });
  }

}
