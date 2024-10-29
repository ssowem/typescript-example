/**
 * 타입 추론
 */


// 변수의 초기값 기준으로 변수타입을 추론한다.
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name : "이소연",
    profile : {
        nickname : "ssowem",
    },
    urls: {"https://about.ssoblity.me"}
};

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];


function func(message = "hello"){
    return "hello";
}



/**
 * 초기값 생략했을 때 예시, 암묵적인 any 타입으로 추론 됨(이 변수에 들어가는 값에 따라서 any 타입이 진화가 됨)
 * let d: any; <= 이 처럼 명시적으로 any타입을 정의하는 것과는 다름 (진화하지 않음)
 */
let d; 
d = 10;
d.toFixed() // number타입으로 추론 됨, toFixed() 메소드 사용 가능
// d.toUpperCase() // toUpperCase() 메소드 사용 불가 (string 타입 가능한 메소드)

d = "hello" // string타입 값으로 재할당이 가능
d // string 타입으로 추론 됨.
d.toUpperCase() // toUpperCase() 메소드 사용 가능
// d.toFixed(); 사용 불가



const num = 10; // number 리터럴 타입으로 추론
const str = "hello" // string 리터럴 타입으로 추론

let arr = [1, "string"]; // string, nuber 유니온 타입