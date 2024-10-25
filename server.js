const express = require('express');
const request = require('request');
const path = require("path");
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// 将目标域名替换为你想要的域名
const TARGET_DOMAIN = 'https://new-domain.com'; // 替换为新的域名

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "./tma.internal-key.pem")), //your key
  cert: fs.readFileSync(path.join(__dirname, "./tma.internal.pem")), //your cert
};

// 代理请求
app.all('*', (req, res) => {
  const requestUrl = req.originalUrl; // 获取请求的路径和查询参数
  const targetUrl = TARGET_DOMAIN + requestUrl; // 构建新的请求URL

  // 转发请求到新域名
  request(targetUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // 检查返回内容是否为 HTML
      if (response.headers['content-type'] && response.headers['content-type'].includes('text/html')) {
        // 注入 JavaScript
        const injectedScript = `<script>console.log('hello world');</script>`;
        body = body.replace(/<head>/i, `<head>${injectedScript}`); // 在 <head> 标签中注入
      }
      res.send(body); // 返回修改后的内容
    } else {
      res.status(response.statusCode).send(error || 'Error occurred');
    }
  });
});
// 启动 HTTPS 服务器
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Proxy server running at https://localhost:${PORT}`);
});