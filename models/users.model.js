module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
          type: Sequelize.STRING
      }
    });
    //user.associate = function(models) {
    //  user.hasMany.belongsTo(models.operation, {foreignKey: 'userFk'});

    //}
    return user;
  };