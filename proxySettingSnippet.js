//プロキシの設定
const {bootstrap} = require('global-agent');
process.env.GLOBAL_AGENT_HTTP_PROXY = process.env.HTTP_PROXY;
bootstrap();
