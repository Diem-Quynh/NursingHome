
exports.up = function(knex) {
    return knex.schema.createTable('user_permissions', function (table) {
        table.increments();
        table.string('key').unique().notNullable();
        table.string('name').notNullable();
        table.text('description').nullable();
        table.integer('avalibleValue').notNullable().defaultTo(0);
        table.integer('groupId').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_permissions');
};
