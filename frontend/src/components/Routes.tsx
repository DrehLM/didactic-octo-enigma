import { Route } from 'react-router-dom';
import AutoresPage from '../pages/AutoresPage';
import EventosPage from '../pages/EventosPage';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresPage />} />
      <Route path="/eventos" component={() => <EventosPage />} />
    </>
  );
}

export default Routes;
