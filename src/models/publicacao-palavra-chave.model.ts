// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const publicacaoPalavraChave = sequelizeClient.define('publicacoesPalavraschave', {
    publicacaoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    palavrachaveId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    tableName: 'publicacoes_palavras_chave',
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (publicacaoPalavraChave as any).associate = function (models: typeof sequelizeClient.models): void {
    publicacaoPalavraChave.belongsTo(models.publicacao, {
      as: 'publicacoes',
      foreignKey: 'publicacaoId',
    });
    publicacaoPalavraChave.belongsTo(models.palavrachave, {
      as: 'palavraschave',
      foreignKey: 'palavrachaveId',
    });
  };

  return publicacaoPalavraChave;
}
