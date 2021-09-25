import { Application } from '../declarations';
import eventos from './eventos/eventos.service';
import instituicoes from './instituicoes/instituicoes.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(eventos);
  app.configure(instituicoes);
}
