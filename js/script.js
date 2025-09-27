"use strict";

const firstSide = +prompt("Введите длину первой стороны")
const secondSide = +prompt("Введите длину второй стороны")
const thirdSide = +prompt("Введите длину третьей стороны")

if (firstSide + secondSide > thirdSide 
    && firstSide + thirdSide > secondSide 
    && secondSide + thirdSide > firstSide) {
    if (firstSide == secondSide && firstSide == thirdSide) {
        console.log("Это равносторонний треугольник")
    }
    else if (firstSide == secondSide && firstSide != thirdSide) {
        console.log("Это равнобедренный треугольник")
    }
    else {
        console.log("Это разносторонний треугольник")
    }
}
else {
    console.log("Не треугольник")
}
