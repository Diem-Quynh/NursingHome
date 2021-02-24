
exports.seed = function(knex) {
  let initObj = {
  };
  let arr = [];
    for (let index = 1; index < 10; index++) {
      let obj = { ...initObj };
      obj.nurseId = index < 5 ? index + 5: index;
      obj.patientId = index;
      arr.push(obj)
    }

  // Deletes ALL existing entries
  return knex('nursing_assignments').del()
  .then(async () => {
    // Inserts seed entries
    await knex('nursing_assignments').insert(arr);
  });
};
