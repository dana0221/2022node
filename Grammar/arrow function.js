printChar = function(문자) {
    console.log('익명함수' + 문자)
}
printChar('a')

// 위, 아래가 동일한 함수

printArrow = (문자) => {
    console.log('arrow function ' + 문자)
}
printArrow('K')