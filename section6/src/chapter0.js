/**
 * 클래스
 */

let studentA = {
    name: "이소연",
    grade: "A+",
    age: 27,
    study(){
        console.log("열심히 공부 함")
    },
    introduce(){
        console.log("안녕하세요")
    }
};

class Student {
    // 필드
    name;
    grade;
    age;

    //생성자 (클래스를 호출하면 실제로 객체를 생성하는 역할, 메서드 )
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //메서드
    study(){
        console.log("열심히 공부 함")
    }
    introduce(){
        console.log(`안녕하세요. ${this.name} 입니다!`)
    }
}

class StudentDeveloper extends Student{
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {   
        super(name, grade, age); // super함수호출후 인수로전달해줘야 부모(super)클래스의 생성자가 호출됨
        this.favoriteSkill = favoriteSkill;
    }
    
    //메서드
    programing(){
        console.log(`${this.favoriteSkill}로 프로그래밍 함`)
    }
}

const studentDeveloper = new  StudentDeveloper('이소연', 'A+', 32, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programing()

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student('이소짱', "A+", 32)
// console.log(studentB);
// studentB.study();
// studentB.introduce();