
exports.up = function(knex) {
    return knex.schema.createTable('user_group_permissions', function (table) {
        table.increments();
        table.integer('groupId').unsigned().index().references('id').inTable('user_groups')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('permissionKey').nullable().index().references('key').inTable('user_permissions')
            .onUpdate('CASCADE')
            .onDelete('SET NULL');
        table.integer('value').notNullable().defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_group_permissions');
};

