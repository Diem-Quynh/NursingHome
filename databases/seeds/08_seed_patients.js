
exports.seed = function(knex) {
  let initObj = {
    fullname: "bệnh nhân ",
  };
  let arr = [];
    for (let index = 1; index < 15; index++) {
      let obj = { ...initObj };
      obj.fullname += index;
      obj.gender = index % 2;
      obj.bedId = index;
      arr.push(obj)
    }

  // Deletes ALL existing entries
  return knex('patients').del()
  .then(async () => {
    // Inserts seed entries
    await knex('patients').insert(arr);
  });
};
