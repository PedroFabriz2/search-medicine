
exports.up = function(knex) {
    return knex.schema.createTable('medicine', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('principio').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicine');
};
