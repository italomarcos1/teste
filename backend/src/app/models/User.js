import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        phone_number: Sequelize.STRING,
        got_to_know: Sequelize.STRING,
        has_social: Sequelize.BOOLEAN,
        social_media: {
          type: Sequelize.ARRAY(Sequelize.BOOLEAN),
        },
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
