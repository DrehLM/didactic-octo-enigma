import { Route } from 'react-router-dom';
import AutoresPage from '../pages/AutoresPage';
import EdicoesPage from '../pages/EdicoesPage';
import EventosPage from '../pages/EventosPage';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresPage />} />
      <Route path="/eventos" component={() => <EventosPage />} />
      <Route path="/edicoes" component={() => <EdicoesPage />} />
    </>
  );
}

export default Routes;
