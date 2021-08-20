Math.random()
// 0.5778710704352863
Math.random() * 1000000
// 890908.3694582037
Math.floor(Math.random() * 1000000)
// 430239
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// "539108"
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
token
// "359180"

function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
getToken()
// VM1022:3 373959
// undefined

const getToken2 = function(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
const getToken3 = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
