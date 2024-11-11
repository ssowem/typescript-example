/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 2가지 기준
 * 1. 반환값의 타입이 호환되는가 ?
 * 2. 매개변수의 타입이 호환되는가 ?
 */

// 기준1. 반환값이 호환되는가 ? (반환값끼리의 다운캐스팅이 안되도록 평가)
type A = () => number; // 넘버 타입
type B = () => 10; // 넘버 리터럴 타입

let a:A = () => 10; // 넘버 타입
let b:B = () => 10; // 넘버 리터럴 타입

a = b;
// B타입을 A타입으로 취급한다.
// B 반환값 = 넘버리터럴, A 반환값 = 넘버
// 넘버리터럴을 넘버타입으로 취급하겠다 => 업캐스팅 (허용O)


// b = a;
// A 타입을 B 타입으로 취급한다
// B 반환값 = 넘버리터럴 , A 반환값 = 넘버
// 넘버타입을 넘버리터럴로 취급하겠다 => 다운캐스팅 (허용X)



// 기준2. 매개변수가 호환되는가 ?
// 2-1. 매개변수의 개수가 같을 때
// 매개변수의 타입을 기준으로 호환성을 판단할때 '업캐스팅'일때는 호환 X (반환값이 호환되는지 판단할때와 다르다)
type C = (value: number) => void;
type D = (value: 10) => void;

let c : C = (value) => {};
let d : D = (value) => {};

// c = d; // C타입(넘버)을 D타입(넘버리터럴)으로 취급 => 업캐스팅 허용 X
d = c; // D타입(넘버리터럴)을 C타입(넘버)으로 취급 => 다운캐스팅 허용O

// 왜 ??
// 매개변수가 객체타입을 사용하는 예시로 이해해보기
// 아래예시 (Animal 타입은 Dog 타입의 슈퍼타입)
type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunC = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunC = dogFunc; // 호환X 
let testFunc = (animal :Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}

dogFunc = animalFunC;
let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
}



// 2-2. 매개변수의 개수가 다를 때 (할당하려고 하는 함수의타입의 매개변수 갯수가 더 적을때에만 호환이된다.)
type Func1 = (a: number, b:number) => void;
type Func2 = (a: number ) => void;

let func1 : Func1 = (a,b) => {};
let func2 : Func2 = (a) => {};

func1 = func2;
// func2 = func1;