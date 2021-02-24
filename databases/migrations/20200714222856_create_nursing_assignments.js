
exports.up = function(knex) {
    return knex.schema.createTable('nursing_assignments', function (table) {
        table.increments();
        table.integer('nurseId').unsigned().index().references('id').inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('patientId').unsigned().index().references('id').inTable('patients')
            .onUpdate('CASCADE')
            .onDelete('SET NULL');
        table.datetime('dateBegin').nullable();
        table.datetime('dateEnd').nullable();
        table.text('note').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('nursing_assignments');
};
