
exports.up = function(knex) {
    return knex.schema.createTable('patients', function (table) {
        table.increments();
        table.string('fullname').nullable();
        table.datetime('birthday').nullable();
        table.integer('gender').defaultTo(0).comment("0 => male, 1 => female");
        table.string('address').nullable();
        table.string('cardId').nullable();
        table.string('phone').nullable();
        table.text('medicalHistory').nullable();
        table.datetime('dateIn').nullable();
        table.datetime('dateOut').nullable();
        table.integer('bedId').unsigned().index().references('id').inTable('beds')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('patients');
};
