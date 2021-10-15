import { Route } from 'react-router-dom';
import AutoresPage from '../pages/AutoresPage';
import EdicoesPage from '../pages/EdicoesPage';
import EventosPage from '../pages/EventosPage';
import TestesPage from '../pages/TestesPage';
import InstituicoesPage from '../pages/InstituicoesPage';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresPage />} />
      <Route path="/eventos" component={() => <EventosPage />} />
      <Route path="/edicoes" component={() => <EdicoesPage />} />
      <Route path="/testes" component={() => <TestesPage />} />
      <Route path="/instituicoes" component={() => <InstituicoesPage />} />
    </>
  );
}

export default Routes;
