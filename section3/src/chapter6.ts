/**
 * 타입 단언 ( type assertion )
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = '이소연';
person.age = 32;

type Dog = {
    name : string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도", 
} as Dog;

// 위 예시로 breed라는 추가 프로퍼티가 생겼을 경우에도 타입 단언을 사용할 수 있다.



/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야함 
 */

let num1 = 10 as never; // 10은 number타입, never타입은 모든타입의 서브타입 (A가 B의 슈퍼타입 성립)
let num2 = 10 as unknown; // 10은 number타입, unknown은 모든타입의 슈퍼타입인 전체집합이다 (A가 B의 서브타입 성립)

// let num3 = 10 as string; // 겺치는게 없음 (교집합이 없는 타입은 허용 안됨).
let num4 = 10 as unknown as string; // unknown 타입을 적용하고 다중단언을 하면 해결 가능하나, 권장X



/**
 * const 단언
 */

let num5 = 10 as const; // const로 선언한것과 동일한 효과를 보도록 하는 단언

// 객체타입과 사용될때 활용된다.
let cat = {
    name: "야옹이",
    color: "yellow"
} as const
// cat.name = '';

/**
 * Non Null 단언 ('!'키워드를 사용해서 어떤값이 null이거나 undefined가 아니라고 스크립트 컴파일러에게 알려주는 역할을 함)
 */
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "이소연"
}

const len : number = post.author!.length; 

