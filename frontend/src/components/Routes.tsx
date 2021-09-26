import { Route } from 'react-router-dom';
import AutoresPage from '../pages/AutoresPage';

export function Routes() {
  return (
    <>
      <Route path="/autores" component={() => <AutoresPage />} />
    </>
  );
}

export default Routes;
