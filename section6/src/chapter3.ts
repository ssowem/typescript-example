/**
 * 인터페이스와 클래스
 * implements : 구현하다
 */

// 게임캐릭터를 정의하는 인터페이스
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 캐릭터 클래스는 캐릭터인터페이스를 구현한다
class Character implements CharacterInterface {
  // 필드
  // name: string;
  // moveSpeed: number;

  // 생성자
  constructor(public name: string, public moveSpeed: number, private extra: string) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
