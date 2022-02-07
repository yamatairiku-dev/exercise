'use strict';

const https = require('https');

const target = 'https://www.rikuden.co.jp/nw/';
// const target = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';

https.get(target, res => {
  // 変数を宣言
  let responseData = '';
  let counter = 0;

  // ステータスコードをログ出力
  console.log('statusCode', res.statusCode);

  // dataイベントにコールバック関数を設定
  res.on('data', chunk => { 
    // 受信データを連結
    responseData += chunk;

    // カウンターをログ出力
    console.log(`\n${++counter}番目のデータ：\n${chunk}`);
  });

  // endイベントにコールバック関数を設定
  res.on('end', () => console.log(`\nレスポンスデータは${counter}分割`));
});
