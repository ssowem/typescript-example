/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
    name : string;
    age: number;
}

// value가 number타입일때 tofixed() 메서드를 적용한 값 출력
// value가 string타입일때 toUpperCase() 메서드를 적용한 값 출력
// value가 Date타입일때 getTime() 메서드를 적용한 값 출력
// value가 Person타입일때 ~ age살입니다. 출력
function func(value: number | string | Date | null | Person) {
//   value;
//   value.toFixed();
//   value.toUpperCase();
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if(value instanceof Date){ // instanceof 연산자 사용으로 value가 Date의 객체인지 확인 => true,false 값 반환
    console.log(value.getTime());
  } else if( value && 'age' in value){ //value가 null & undifined가 아님을 밝혀주기 위해서 '&&'연산자를 사용 => value 값이 있을때만 'age' in value 검사 실행시키게함
    console.log(`${value.name}은 ${value.age}살 입니다`)
  }
};





