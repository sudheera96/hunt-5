/**
 *  User model
 *  Describes the characteristics of each attribute in a user resource.
 *
 * @author Denise Case <dcase@nwmissouri.edu>
 *
 * For more information about defining sequelize models, see
 * https://sequelize.org/v5/manual/data-types.html
 *
 */

module.exports = (db, DataTypes) => {
  db.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_login: DataTypes.DATE,
    },
   
);
  // return User;
};
