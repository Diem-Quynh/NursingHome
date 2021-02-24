
exports.up = function(knex) {
    return knex.schema.createTable('rooms', function (table) {
        table.increments();
        table.string('code').unique().notNullable();
        table.integer('bedNumber').defaultTo(0);
        table.text('note').nullable();
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('rooms');
};
