
exports.up = function(knex) {
  return knex.schema.createTable('comentarios', function (table){
      table.increments('id');
      table.string('texto').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comentarios');
};
