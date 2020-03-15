const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'admins',
      [
        {
          name: 'Admin EloGroup',
          email: 'admin@elogroup.com',
          password_hash: bcrypt.hashSync('pselogroup2020', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
