
exports.seed = function(knex) {
  let initObj = {
    roomCode: "A"
  };
  let arr = [];
    for (let index = 1; index < 10; index++) {
      let obj = { ...initObj };
      obj.doctorId = index < 6 ? index: (10 - index);
      obj.roomCode = obj.roomCode + index;
      arr.push(obj)
    }

  // Deletes ALL existing entries
  return knex('doctor_assignments').del()
  .then(async () => {
    // Inserts seed entries
    await knex('doctor_assignments').insert(arr);
  });
};
