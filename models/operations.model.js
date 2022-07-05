module.exports = (sequelize, Sequelize) => {
    const operation = sequelize.define("operations", {
      date: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      userId: {
          type: Sequelize.INTEGER,
          model: 'users',
          key: 'userId',
          references: {
            model: 'users',
            key: 'id'
          }
      }
    });

    //operation.associate = function(models) {
    //  operation.hasOne(models.users, {foreignKey: 'userFk',sourceKey: 'userFk'});

    //}
    return operation;
  };