// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const palavraChave = sequelizeClient.define('palavraChave', {
    palavraChave: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'palavra_chave',
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (palavraChave as any).associate = function (models: any): void {
    palavraChave.hasMany(models.publicacaoPalavraChave, {
      as: 'publicacoesPalavrasChave',
      foreignKey: 'palavraChaveId',
    });
    palavraChave.belongsToMany(models.publicacao, {
      as: 'publicacoes',
      through: 'publicacaoPalavraChave',
    });
  };

  return palavraChave;
}
