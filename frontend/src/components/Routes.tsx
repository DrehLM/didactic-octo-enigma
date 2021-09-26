import { Route } from 'react-router-dom';
import AutoresPage from '../pages/AutoresPage';
import AutoresList from './autores/AutoresList';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresPage />} />
      <Route path="/intituicoes" component={() => <AutoresList />} />
    </>
  );
}

export default Routes;
