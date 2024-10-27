// 타입 별칭 (코드의 중복을 제거, 변수를 선언하듯이 사용)
type User = {
    id : number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}


let user: User = {
    id : 1,
    name : "이소연",
    nickname: "sso",
    birth : "1992.11.04",
    bio : "안녕하세요",
    location: "고양시",
};

let user2: User = {
    id : 2,
    name : "이소연",
    nickname: "sso",
    birth : "1992.11.04",
    bio : "안녕하세요",
    location: "고양시",
};

// 인덱스 시그니처 (key , value 의 타입을 기준으로 규칙을 이용해서 유연하게 객체타입을 정의한다)
type CountryCodes = {
    [key : string] : string;
}

let countryCodes : CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom : 'uk',
}


type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
}

let countryNumberCodes : CountryNumberCodes = {
   Korea : 410,
}