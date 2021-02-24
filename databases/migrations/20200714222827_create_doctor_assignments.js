
exports.up = function(knex) {
    return knex.schema.createTable('doctor_assignments', function (table) {
        table.increments();
        table.integer('doctorId').unsigned().index().references('id').inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('roomCode').index().references('code').inTable('rooms')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.datetime('dateBegin').nullable();
        table.datetime('dateEnd').nullable();
        table.text('note').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('doctor_assignments');
};
