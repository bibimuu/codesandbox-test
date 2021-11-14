// const,let

// var vall = "var変数";
// console.log(vall);
// varは上書き,再宣言可能

// let a = "let変数";
// console.log(a);

// a = "letの上書き";
// console.log(a);

// let a = "再宣言";
// letは再宣言できない

// const b = "ssss";
// console.log(b);
// 上書きも再宣言も不可能

// const a = {
//   name: "zyakexe",
//   age:22,
// };

// a.name = "aa"
// // オブジェクトの中身は変更可能
// a.addres = "fukui";
// // プロパティの追加も可能
// console.log(a);

// const a = ["dog","cat"];
// a[0] = "money;"
//  a.push("as")
// console.log(a);

// テンプレート文字列
// const name = "dai";
// const age =22;
// const message = `私の名前は${name}です。年齢は${age}`;
// console.log(message);

// 従来の関数
// const as = function (str) {
//   return str;
// };
// アロー関数
// const func = (str) => {
//   return str;
// };

// console.log(func("ssss"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(3, 4));

// 分割代入

// const myProfile = {
//   name:"佐藤",
//   age:22
// }

// const message = `私の名前は${myProfile.name}。歳は${myProfile.age}`
// console.log(message);
// const {name, age} = myProfile;
// const message2 = `私の名前は${name}。歳は${age}`
// console.log(message2);

// const myProfile2 = ["加藤",22];
// const message3 = `私の名前は${myProfile2[0]}。歳は${myProfile2[1]}`;
// console.log(message3);
// const [name1,age1] = myProfile2;
// const message4 = `私の名前は${name1}。歳は${age1}`;
// console.log(message4);

// デフォルト値

// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは${name}さん`);
// };
// sayHello();

// スプレッド構文
// 配列の展開

// const arr = [1,2,3];
// console.log(...arr);

// const sumFunc = (num1,num2,num3) => {
//   console.log(num1 + num2 +num3)
// }
// sumFunc(...arr)

// まとめる
// const arr2 = [1,2,3,4,5,6];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー結合
// const arr4 = [1,2];
// const arr5 = [3,4];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);
// スプレッド公文を使用した場合→配列を書き換えた時にコピー元の配列に影響しない。

// mapとfilterについて

const nameArr = ["田中", "山田", "佐藤"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index])
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name,index)=> console.log(`${index +1}番目は${name}です。`))

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 ===1;
// })
// console.log(newNumArr);
// const newArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newArr)

// 3項演算子
// ある条件 ? 条件がtrueの時：条件がfalseの時

// const num = "1300";
// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100超えてます" : "許容範囲内";
// };
// console.log(checkSum(22,22))

// 論路演算子の本当の意味
// ||は左がfalseなら右を返す。
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左がtrueなら右を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されています";
console.log(fee2);
