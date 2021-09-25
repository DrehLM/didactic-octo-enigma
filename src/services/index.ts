import { Application } from '../declarations';
import eventos from './eventos/eventos.service';
import instituicao from './instituicao/instituicao.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(eventos);
  app.configure(instituicao);
}
