const classmates = ["철수", "영희", "훈이"]
// undefined
classmates[0]
// "철수"
for (let j=0; j<3; j++){
    console.log(classmates[j])
}
// VM293:2 철수
// VM293:2 영희
// VM293:2 훈이
// undefined
const classmates2 = [
    {name: "철수", age: 13},
    {name: "영희", age: 12}
]
// undefined
classmates2[0].name
// "철수"
classmates2[0].name + "는" + classmates2[0].age + "살 입니다."
// "철수는13살 입니다."
classmates2[0].name + "는 " + classmates2[0].age + "살 입니다."
// "철수는 13살 입니다."
for(let i=0; i<=1; i++){
    console.log(classmates2[i].name + "는" + classmates2[i].age + "살 입니다."
)
}
// VM812:2 철수는13살 입니다.
// VM812:2 영희는12살 입니다.
// undefined
for(let i=0; i<=1; i++){
    console.log(classmates2[i].name + " 는" + classmates2[i].age + "살 입니다."
)
}
// VM816:2 철수 는13살 입니다.
// VM816:2 영희 는12살 입니다.
// undefined
for(let i=0; i<=1; i++){
    console.log(classmates2[i].name + "는 " + classmates2[i].age + "살 입니다."
)
}
// VM821:2 철수는 13살 입니다.
// VM821:2 영희는 12살 입니다.
// undefined