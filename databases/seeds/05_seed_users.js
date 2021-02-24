
exports.seed = function (knex, Promise) {

  let initObj = {
    code: 'NV',
    fullname: 'hoten',
    username: 'admin',
    password: '$2b$10$gHCu4qaGWOARXQD3QH/Jh.WOhxm4LO9Zw4AQgxy.HiGBjVI8qZmBK', //123456
    token: '@',
    // groupId: 1,

  };
  let arr = [];
  for (let index = 1; index < 10; index++) {
    let obj = { ...initObj };
    obj.code = obj.code + index;
    obj.username = obj.username + index;
    obj.fullname = obj.fullname + index;
    obj.email = `${index}admin@gmail.com`;
    obj.groupId = index;
    arr.push(obj)
  }

  // Deletes ALL existing entries
  return knex('users').del()
    .then(async () => {
      // Inserts seed entries
      await knex('users').insert(arr);
    });
};