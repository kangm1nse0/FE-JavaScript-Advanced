let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];
let filtered=arr.filter(arr => (arr.part!=="staff")&&(arr.name!=="보연"));
filtered.sort((a,b) =>b.age-a.age );
const newarr=filtered.map(function(element){
  return element.name;
})
console.log("최종 이름 배열: "+newarr);
newarr.forEach(name => {console.log(name)});
  