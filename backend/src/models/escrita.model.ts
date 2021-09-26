// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const escrita = sequelizeClient.define(
    'escrita',
    {
      autorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      orientadorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      publicacaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      instituicaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: 'escreve',
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  (escrita as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    escrita.belongsTo(models.autor, {
      as: 'autor',
      foreignKey: 'autorId',
    });
    escrita.belongsTo(models.orientador, {
      as: 'orientador',
      foreignKey: 'orientadorId',
    });
    escrita.belongsTo(models.publicacao, {
      as: 'publicacao',
      foreignKey: 'publicacaoId',
    });
    escrita.belongsTo(models.instituicao, {
      as: 'instituicao',
      foreignKey: 'instituicaoId',
    });
  };

  return escrita;
}
