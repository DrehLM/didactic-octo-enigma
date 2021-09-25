// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const publicacao = sequelizeClient.define(
    'publicacao',
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edicaoId: {
        type: DataTypes.INTEGER,
      },
      trilhaId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  (publicacao as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    publicacao.belongsTo(models.edicao, {
      as: 'edicao',
      foreignKey: 'edicaoId',
    });
    publicacao.belongsTo(models.trilha, {
      as: 'trilha',
      foreignKey: 'trilhaId',
    });
    publicacao.hasMany(models.publicacaoTag, {
      as: 'publicacoesTags',
      foreignKey: 'publicacaoId'
    });
    publicacao.belongsToMany(models.tag, {
      as: 'tags',
      through: 'publicacaoTag'
    });
    publicacao.hasMany(models.publicacaoPalavraChave, {
      as: 'publicacoesPalavrasChave',
      foreignKey: 'publicacaoId'
    });
    publicacao.belongsToMany(models.palavraChave, {
      as: 'palavrasChaves',
      through: 'publicacaoPalavraChave'
    });
  };

  return publicacao;
}
