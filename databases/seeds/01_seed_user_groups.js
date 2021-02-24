
exports.seed = function (knex, Promise) {

    let initObj = {
        name: 'Quản lý ',
        description: 'Nhóm mặc định của quản lý',

    };
    let arr = [];
    for (let index = 1; index < 10; index++) {
        let obj = { ...initObj };
        obj.name = obj.name + index;
        arr.push(obj)
    }

    // Deletes ALL existing entries
    return knex('user_groups').del()
        .then(async () => {
            // Inserts seed entries
            await knex('user_groups').insert(arr);
        });
};