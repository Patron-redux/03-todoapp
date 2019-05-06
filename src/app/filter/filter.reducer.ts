import * as fromFiltros from './filter.actions';

const estadoInicial: fromFiltros.filtrosValidos = 'Todos';

export function filtroReducer(state = estadoInicial, action: fromFiltros.acciones):fromFiltros.filtrosValidos{
  switch(action.type){
    case fromFiltros.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }
}
