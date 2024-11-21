exports.seed = async function(knex) {
  await knex('users').insert([
    { email: 'john@example.com', password: 'password1' },
    { email: 'jane@example.com', password: 'password2' },
  ]);
};
