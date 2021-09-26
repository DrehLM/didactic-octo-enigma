
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const publicacaoTag = sequelizeClient.define('publicacaoTag', {
    publicacaoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    tagId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    }
  }, {
    tableName: 'publicacao_tag',
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (publicacaoTag as any).associate = function (models: typeof sequelizeClient.models
  ): void {
    publicacaoTag.belongsTo(models.publicacao, {
      as: 'publicacoes',
      foreignKey: 'publicacaoId'
    });
    publicacaoTag.belongsTo(models.tag, {
      as: 'tags',
      foreignKey: 'tagId',
    });
  };

  return publicacaoTag;
}
