// 리터럴과 프로퍼티
let user = {
    name: 'jeehoon',
    age: 30
};
// 프로퍼티 값 얻기
console.log( user.name );
console.log( user.age );


let user2 = {};

// set
user2["likes birds"] = true;

// get
alert(user2["likes birds"]); // true

// delete
delete user2["likes birds"];



let user3 = {
    name: "John",
    age: 30
  };
  
  let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
  
  // 변수로 접근
  alert( user3[key] ); // John (프롬프트 창에 "name"을 입력한 경우)


  let user4 = {
    name: "John",
    age: 30
  };
  
  let key4 = "name";
  alert( user4.key4 ) // undefined



  
  let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};

alert( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.