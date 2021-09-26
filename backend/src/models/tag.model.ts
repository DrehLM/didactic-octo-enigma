// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const tag = sequelizeClient.define('tag', {
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (tag as any).associate = function (models: any): void {
    tag.hasMany(models.publicacaoTag, {
      as: 'publicacoesTags',
      foreignKey: 'tagId',
    });
    tag.belongsToMany(models.publicacao, {
      as: 'publicacoes',
      through: 'publicacaoTag'
    });
  };

  return tag;
}
