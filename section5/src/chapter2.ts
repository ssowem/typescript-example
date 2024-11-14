/**
 * 선언 합침 (중복된 이름으로 정의한 인터페이스들은 합쳐진다 )
 * 동일한 타입으로만 정의를 해야함
 *
 */

interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
