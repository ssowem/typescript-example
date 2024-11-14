/**
 * 인터페이스의 확장(타입간의 상속 과정, 객체타입이면 모두 확장가능)
 * 중복된 프로퍼티 정의가 많아지면 비효율적. => extends 키워드로 인터페이스를 확장한다.
 */

interface Animal {
    name: string;
    color: string;
}

// 인터페이스 dog는 인터페이스 animal을 확장하는 타입이다라고 정의시키는것 [기존것(Animal)을 유지하면서 무언가(Dog)를 더 추가할때]
interface Dog extends Animal{
    // name : 'hello';
    isBark: boolean;
}

const dog : Dog = {
    // 상속받는 기존 데이터(Animal name: string => name : "hello" )타입을 재정의할수있다.  단 원본 데이터의 서브타입이여야만 함
    // name :  "hello",
    name : "",
    color: "",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

// 다중확장, 여러가지 인터페이스를 확장
interface DogCat extends Dog, Cat {
}

const dogCat : DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
}