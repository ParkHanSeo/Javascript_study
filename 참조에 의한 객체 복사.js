/*참조에 의한 객체 복사*/

//객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것이다.
function temp1(){
    let message = "Hello!";
    let phrase = message;
};

/*
예시를 실행하면 두 개의 독립된 변수에 각각 문자열 "Hello!"가 저장된다.
객체의 동작 방식은 이와 다릅니다.
변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됩니다.
*/
function temp2(){
    let user = {
        name: "John"
    };
};
/*
객체는 메모리 내 어딘가에 저장되고, 변수 user엔 객체를 '참조’할 수 있는 값이 저장됩니다.
따라서 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않습니다.
*/

function temp3(){
    let user = { name: "John" };
    let admin = user; // 참조값을 복사함
};
//변수는 두 개이지만 각 변수엔 동일 객체에 대한 참조 값이 저장된다.

//따라서 객체에 접근하거나 객체를 조작할 땐 여러 변수를 사용할 수 있습니다.

function temp3(){
    let user = { name: 'John' };
    let admin = user;
    admin.name = 'Pete'; // 'admin' 참조 값에 의해 변경됨
    
    alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함
}