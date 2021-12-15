import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import { of } from "rxjs";




@Injectable()
export class UsuarioEffects{

  constructor(
    private actions$: Actions, // el símbolo de $ es un standard para decir que es un observable
    private usuarioService: UsuarioService
  ){}

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType( usuariosActions.cargarUsuario ),
      mergeMap(
        ( action ) => this.usuarioService.getUsersById( action.id )
              .pipe(
                map( user => usuariosActions.cargarUsuarioSuccess({ usuario: user }) ),
                catchError( err => of (usuariosActions.cargarUsuarioError({ payload: err })) )
              )

        )
      )

  );

}
