
exports.seed = function (knex, Promise) {

    let initObj = {

    };
    let arr = [];
    for (let index = 1; index < 10; index++) {
        let obj = { ...initObj };
        obj.permissionKey = 'root'
        obj.groupId = index;
        obj.value = 15;
        arr.push(obj)
    }

    // Deletes ALL existing entries
    return knex('user_group_permissions').del()
        .then(async () => {
            // Inserts seed entries
            await knex('user_group_permissions').insert(arr);
        });
};