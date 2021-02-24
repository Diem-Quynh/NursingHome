exports.seed = function(knex) {
  let initObj = {
    code: 'A',
    bedNumber: 6
  };
  let arr = [];
  for (let index = 1; index < 10; index++) {
      let obj = { ...initObj };
      obj.code = obj.code + index;
      arr.push(obj)
  }

  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(async () => {
      // Inserts seed entries
      await knex('rooms').insert(arr);
    });
};
