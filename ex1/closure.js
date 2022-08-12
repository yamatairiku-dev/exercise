'use strict'
// モジュール
const Module = {};

(function (M) {
  // プライベートなローカル変数
  const localVar = 'local'
  // プライベートなローカル関数
  function localFunction () {
    return localVar
  }
  // パブリックな関数はモジュールに追加
  M.globalFunction = function () {
    console.log(localFunction())
  }
})(Module) // 即時実行関数にモジュールオブジェクトを渡して実行

// パブリック関数の呼び出し
Module.globalFunction() // localと出力される
// プライベート関数は呼び出せない
// Module.localFunction() //エラー
