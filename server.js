const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const WEB_DIR = __dirname;

// 静态文件服务
app.use(express.static(WEB_DIR));

// 所有路由回退到 index.html（SPA 支持）
app.get('*', (req, res) => {
  res.sendFile(path.join(WEB_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
