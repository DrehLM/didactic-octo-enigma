import { Route } from 'react-router-dom';
import AutoresList from './autores/AutoresList';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresList />} />
    </>
  );
}

export default Routes;
