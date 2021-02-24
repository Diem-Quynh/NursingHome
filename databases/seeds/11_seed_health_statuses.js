
exports.seed = function(knex) {
  let initObj = {
    date: '2020-07-10'
  };
  let arr = [];
    for (let index = 1; index < 10; index++) {
      let obj = { ...initObj };
      obj.patientId = index < 6 ? index: (10 - index);
      obj.doctorId = index;
      arr.push(obj)
    }

  // Deletes ALL existing entries
  return knex('health_statuses').del()
  .then(async () => {
    // Inserts seed entries
    await knex('health_statuses').insert(arr);
  });
};
