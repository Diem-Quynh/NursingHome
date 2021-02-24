
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('code').unique().notNullable();
        table.string('fullname').nullable();
        table.string('position').nullable();
        table.datetime('birthday').nullable();
        table.integer('gender').defaultTo(0).comment("0 => male, 1 => female");
        table.string('address').nullable();
        table.string('cardId').nullable();
        table.string('email').nullable();
        table.string('phone').nullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('token').notNullable();
        table.integer('groupId').unsigned().index().references('id').inTable('user_groups')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
