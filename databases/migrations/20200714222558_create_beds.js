
exports.up = function(knex) {
    return knex.schema.createTable('beds', function (table) {
        table.increments();
        table.string('roomCode').index().references('code').inTable('rooms')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('bedId').nullable();
        table.integer('status').defaultTo(0).comment("0 => empty, 1 => full");
        table.text('note').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('beds');
};
