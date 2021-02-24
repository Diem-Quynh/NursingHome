
exports.up = function(knex) {
    return knex.schema.createTable('health_statuses', function (table) {
        table.increments();
        table.integer('patientId').unsigned().index().references('id').inTable('patients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.datetime('date').nullable();
        table.float('height').nullable();
        table.float('weight').nullable();
        table.string('bloodPressure').nullable();
        table.string('bloodSugar').nullable();
        table.string('heartRate').nullable();
        table.integer('doctorId').unsigned().index().references('id').inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.text('note').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('health_statuses');
};
