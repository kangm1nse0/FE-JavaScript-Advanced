//3번 문제

let user = {
    name: "다솜",
    part: "FE",
  };
const json=JSON.stringify(user);
let user2=JSON.parse(json);
console.log(user2);