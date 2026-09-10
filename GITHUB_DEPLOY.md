# PhotoTalk 隐私网站 · GitHub 上传与 Pages 部署指南

联系邮箱已设为：**bobojensen@163.com**（`support.html`）

---

## 一、准备：把整个 PhotoTalk 项目推到 GitHub

若仓库还没有远程，按下面做（把 `你的用户名` 换成你的 GitHub 用户名）。

### 1. 在 GitHub 上新建仓库

1. 打开 [https://github.com/new](https://github.com/new)
2. Repository name 建议填：`PhotoTalk`（需与站点 `base` 路径一致）
3. 选 **Public**
4. **不要**勾选 “Add a README”（本地已有代码）
5. 点击 **Create repository**

### 2. 在本地初始化并推送（首次）

在终端执行：

```bash
cd /Users/pengyi/Desktop/coding/PhotoTalk

# 若还不是 git 仓库
git init
git add .
git commit -m "Add PhotoTalk app and privacy website"

# 关联远程（SSH 或 HTTPS 二选一）
git remote add origin git@github.com:你的用户名/PhotoTalk.git
# 或：git remote add origin https://github.com/你的用户名/PhotoTalk.git

git branch -M main
git push -u origin main
```

若仓库名不是 `PhotoTalk`，部署前需改 base，见下文「路径说明」。

### 3. 以后有改动时

```bash
cd /Users/pengyi/Desktop/coding/PhotoTalk
git add .
git commit -m "Update privacy site"
git push
```

---

## 二、部署隐私站到 GitHub Pages

隐私站在 `website/` 目录，用 npm 构建后发布到 **`gh-pages` 分支**。

### 方式 A：一条命令部署（推荐）

```bash
cd /Users/pengyi/Desktop/coding/PhotoTalk/website
npm install
npm run deploy
```

`deploy` 会：`vite build` → 把 `dist` 推到远程的 `gh-pages` 分支。

### 方式 B：手动构建再开 Pages

```bash
cd website
npm install
npm run build
# 然后将 dist 内容按你习惯上传到 gh-pages，或用 gh-pages 包：
npx gh-pages -d dist
```

### 打开 GitHub Pages

1. 打开仓库 → **Settings** → **Pages**
2. **Source** 选 **Deploy from a branch**
3. Branch 选 **`gh-pages`** / `/ (root)`
4. Save，等待 1–2 分钟

站点地址一般为：

```text
https://你的用户名.github.io/PhotoTalk/
```

| 页面 | 完整 URL 示例 |
|------|----------------|
| 首页 | `https://你的用户名.github.io/PhotoTalk/` |
| 中文隐私政策 | `https://你的用户名.github.io/PhotoTalk/privacy.html` |
| English Privacy | `https://你的用户名.github.io/PhotoTalk/privacy-en.html` |
| 支持 / 邮箱 | `https://你的用户名.github.io/PhotoTalk/support.html` |

浏览器打开上述链接，确认邮箱显示为 `bobojensen@163.com`。

---

## 三、路径说明（仓库名 ≠ PhotoTalk 时）

默认构建 `base` 为 `/PhotoTalk/`。若仓库叫别的名字，例如 `my-app`：

```bash
cd website
VITE_BASE=/my-app/ npm run build
npx gh-pages -d dist
```

或把 `vite.config.js` 里的 `base` 改成你的仓库路径后再 `npm run deploy`。

---

## 四、填到 App Store Connect

| 字段 | 填写内容 |
|------|----------|
| **Privacy Policy URL** | `https://你的用户名.github.io/PhotoTalk/privacy.html` |
| **Support URL** | `https://你的用户名.github.io/PhotoTalk/support.html` |
| **App 隐私** | 选 **Data Not Collected（不收集数据）**（与当前 App / 政策一致） |

审核可能点击 Support 页并尝试发信到 **bobojensen@163.com**，请保持该邮箱可收信。

---

## 五、本地预览（可选）

```bash
cd website
npm install
npm run dev
```

浏览器打开终端提示的本地地址（一般为 `http://localhost:5173`）。

---

## 六、常见问题

**Pages 打开 404**  
- 确认 Source 是 `gh-pages` 分支  
- 确认仓库名与 `VITE_BASE` 一致  
- 等待几分钟再刷新  

**样式丢失**  
- 多半是 `base` 路径不对，按「路径说明」重建并重新 `deploy`  

**`npm run deploy` 要登录**  
- 使用已配置的 SSH key，或 HTTPS + Personal Access Token  

**只想公开隐私站、不想公开 iOS 源码**  
- 可另建仅含 `website/` 内容的仓库，并把 `VITE_BASE` 设为该仓库名；或将整个 PhotoTalk 设为 Private（Private 仓库的 Pages 需 GitHub Pro 等条件，以 GitHub 当前政策为准）
