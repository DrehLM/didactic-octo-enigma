import { Route } from 'react-router-dom';
import AutoresPage from '../pages/AutoresPage';
import EdicoesPage from '../pages/EdicoesPage';
import EventosPage from '../pages/EventosPage';
import InstituicoesPage from '../pages/InstituicoesPage';
import PublicacoesPage from '../pages/PublicacoesPage';
import TestesPage from '../pages/TestesPage';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresPage />} />
      <Route path="/eventos" component={() => <EventosPage />} />
      <Route path="/edicoes" component={() => <EdicoesPage />} />
      <Route path="/testes" component={() => <TestesPage />} />
      <Route path="/instituicoes" component={() => <InstituicoesPage />} />
      <Route path="/publicacoes" component={() => <PublicacoesPage />} />
      <Route exact path="/" component={() => <TestesPage />} />
    </>
  );
}

export default Routes;
