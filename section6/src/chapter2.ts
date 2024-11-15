/**
 * 접근 제어자 (클래스를 만들때 특정 필드나 메서드에 접근 할수있는 범위를 설정하는 문법)
 * access modifier
 * => public 공공의 (오픈되어있다) 기본값
 * => private 사적인 (클래스 외부에서 접근을 제한하거나, 메서드에서 값을 사용할때)
 * => protected 파생 클래스의 메서드 안에서는 접근을 허용시킨다
 *
 */

class Employee {
  // 필드
  //   private name: string;
  //   protected age: number;
  //   public position: string;
  // 생성자에 접근제어자가 붙어있는 매개변수들은 자동으로 필드를 정의(생략한다)하고 필드의 값을 초기화

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) { 
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age;
    // this.name;
  }
}

const employee = new Employee("이소연", 32, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);
