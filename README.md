# PhotoTalk Privacy Website

联系邮箱：**bobojensen@163.com**（见 `support.html`）

完整的 **GitHub 上传 + Pages 部署 + App Store 填写** 步骤见：

**[GITHUB_DEPLOY.md](./GITHUB_DEPLOY.md)**

## 页面

| 路径 | 用途 |
|------|------|
| `/` | 产品说明 + App Store 隐私对照表 |
| `/privacy.html` | 中文隐私政策（建议作主 Privacy Policy URL） |
| `/privacy-en.html` | English Privacy Policy |
| `/support.html` | Support URL（联系邮箱 bobojensen@163.com） |

## 本地开发

```bash
cd website
npm install
npm run dev
```

## 快速部署

```bash
cd website
npm install
npm run deploy
```

然后在仓库 Settings → Pages 选择 `gh-pages` 分支。详细说明见 [GITHUB_DEPLOY.md](./GITHUB_DEPLOY.md)。
