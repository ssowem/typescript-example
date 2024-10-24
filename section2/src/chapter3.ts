
// object

let user: {
    id?:number; //물음표는 프로퍼티 유무 상관없게함
    name: string;
} = {
    id : 1,
    name: "이소연",
}

let config : {
    readonly apiKey: string; // readonly : 읽기전용으로 적용해서 프로퍼티의 값을 변경 못하게 함
} = {
    apiKey : "MY API KEY"
}

