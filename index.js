// function sum(x: number, y: number): number {
//   return x + y;
// }
// const a: number = 10;
// const b: number = 20;
// console.log(sum(a, b));
//課題１
// 10個以上の数値を持つ配列を定義
var numbers = [3, 7, 15, 2, 9, 45, 8, 1, 19, 12, 25];
// 数値配列から最大値を取得する関数
function getMaxValue(arr) {
    return Math.max.apply(Math, arr);
}
// 関数を実行して結果を確認
var maxValue = getMaxValue(numbers);
console.log("最大値:", maxValue);
//課題２
// FizzBuzz 関数の定義
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }
    else if (num % 5 === 0) {
        return "Buzz";
    }
    else {
        return num;
    }
}
// 1～100までの FizzBuzz 結果をコンソールに出力
for (var i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
//課題３
// 文字列を逆順にする関数の定義
function reverseString(str) {
    return str.split("").reverse().join("");
}
// テスト
var input = "baseball";
var reversed = reverseString(input);
console.log("逆順の文字列:", reversed); // 出力: "llabesab"
//課題４
// 文字列を指定の区切り文字で分割する関数の定義
function splitString(text, delimiter) {
    return text.split(delimiter);
}
// テスト
var text = "apple,orange,strawberry";
var delimiter = ",";
var result = splitString(text, delimiter);
console.log("分割結果:", result); // 出力: ["apple", "orange", "strawberry"]
