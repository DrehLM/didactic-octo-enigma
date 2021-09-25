import { Application } from '../declarations';
import eventos from './eventos/eventos.service';
import academicos from './academicos/academicos.service';
import autores from './autores/autores.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(eventos);
  app.configure(academicos);
  app.configure(autores);
}
