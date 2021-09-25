import { Application } from '../declarations';
import eventos from './eventos/eventos.service';
import instituicoes from './instituicoes/instituicoes.service';
import academicos from './academicos/academicos.service';
import autores from './autores/autores.service';
import orientadores from './orientadores/orientadores.service';
import edicoes from './edicoes/edicoes.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(eventos);
  app.configure(instituicoes);
  app.configure(academicos);
  app.configure(autores);
  app.configure(orientadores);
  app.configure(edicoes);
}
