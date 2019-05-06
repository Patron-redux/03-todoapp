import { Component, OnInit } from '@angular/core';
import * as fromFiltros from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';
import * as fromTodos from '../todo.actions'


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  filtrosValidos: fromFiltros.filtrosValidos [] = ['Todos','Completados','Pendientes'];
  filtroActual: fromFiltros.filtrosValidos;

  constructor(private store:Store<AppState>) {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  ngOnInit() {
  }

  cambiarFiltro(nuevoFiltro: fromFiltros.filtrosValidos){
    const accion = new fromFiltros.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }
  contarPendientes(todos:Todo[]){
      this.pendientes = todos.filter(todo => !todo.completado).length;
  }
  limpiarCompletados(){
    const accion = new fromTodos.BorrarallTodoAction();
    this.store.dispatch(accion);
  }

}
