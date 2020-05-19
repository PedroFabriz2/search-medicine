
exports.up = function(knex) {
    return knex.schema.createTable('medicine', function (table) {
        table.increments();
        table.string('Substância').notNullable();
        table.string('CNPJ').notNullable();
        table.string('Laboratório').notNullable();
        table.string('CódigoGGREM').notNullable();
        table.string('Registro').notNullable();
        table.string('EAN1').notNullable();
        table.string('EAN2').notNullable();
        table.string('EAN3').notNullable();
        table.string('Produto').notNullable();

      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicine');
};
