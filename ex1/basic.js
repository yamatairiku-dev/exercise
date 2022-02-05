'use strict'

// 変数の宣言
const foo = 'foo'  //再代入不可
let bar = 'bar'    //再代入可能
foo = 'foo2'       //error
bar = 'bar2'       //ok
let bar = 'bar3'   //error

// 関数
function add1(a,b){return a+b}
const add2 = function(a,b){return a+b}
const add3 = function addFn(a,b){return a+b}
add1.name
add2.name
add3.name
// アロー関数　
const add4 = (a,b) => {return a+b}
const add5 = (a,b) => a+b
const addOne = a => a+1

// オブジェクト
const obj1 = {propA:1, propB:2}
obj1.propA
obj1['propA']
obj1.propC = 3
obj1
delete obj1.propC
obj1

// スプレッド構文
const obj2 = {...obj1, propC:3}
obj2
// レスト構文
const {propA, ...obj3} = obj2
obj3
Object.keys(obj2)
Object.values(obj2)
Object.entries(obj2)

// 配列
const arr1 = ['foo', 'bar']
arr1.length
arr[1]
arr1.indexOf('bar')
arr1.indexOf('baz')
arr1.includes('bar')
arr1.includes('baz')
arr1.join('-')
arr1.join()
arr1.push('baz')
arr1.push('a','b','c')
arr1.pop()
arr1.unshift('qux')
arr1.unshift('d','e','f')
arr1.shift()
// スプレッド構文
const arr2 = ['foo','bar','baz']
const arr3 = ['a',...arr2,'b','c']
// レスト構文 レスト要素は配列の最後でなければならない
const [head1, hear2, ...arr4] = arr2
arr4
arr3.slice(0,2)
arr3.slice(0,-2)
arr3.slice(2)
// Sliceは元の配列を変更しない
arr3

// ソート UTF-16コードの昇順
arr3.sort()
// ソートは元の配列を変更する
arr3
// 文字数の昇順にソート
arr3.sort((a,b) => a.length-b.length)
// for文
for(let i = 0 i < arr3.length i++) {console.log(arr3[i])}
for (const e of arr3) {console.log(e)}
// forEach
arr3.forEach(console.log)
// map
arr3.map(e => e+e)
// filter
arr3.filter(e => e.startsWith('b'))
arr3.find(e => e.startsWith('b'))

// 等価性
0 === ''
0 === 0
{foo:1} === {foo:1}
const obj5 = {foo:1}
const obj6 = obj5
obj5 === obj6
