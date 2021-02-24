exports.seed = function(knex) {
  let initObj = {
    roomCode: 'A'
  };
  let arr = [];
  for(let roomIndex = 1; roomIndex < 4; roomIndex++){
    for (let index = 1; index < 7; index++) {
      let obj = { ...initObj };
      obj.roomCode = obj.roomCode + roomIndex;
      obj.bedId = index;
      obj.status = roomIndex % 2;
      arr.push(obj)
    }
  }

  // Deletes ALL existing entries
  return knex('beds').del()
  .then(async () => {
    // Inserts seed entries
    await knex('beds').insert(arr);
  });
};
