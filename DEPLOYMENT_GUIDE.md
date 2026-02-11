# 🚀 GitHub Pages 部署指南

## 方法一：网页界面上传（推荐，最简单）

### 步骤 1：创建 GitHub 仓库

1. 访问 [https://github.com](https://github.com) 并登录
2. 点击右上角的 **+** 号 → **New repository**
3. 填写信息：
   - Repository name: `typemaster`（或任何你喜欢的名字）
   - Description: `A professional typing practice application`
   - 选择 **Public**（公开）
   - ⚠️ **不要**勾选 "Add a README file"
   - ⚠️ **不要**勾选 "Add .gitignore"
   - ⚠️ **不要**选择 License
4. 点击 **Create repository**

### 步骤 2：上传文件

1. 在新创建的仓库页面，点击 **uploading an existing file**
2. 打开 Finder，找到桌面的 `practice` 文件夹
3. **选中所有文件**（9个文件）：
   - index.html
   - practice.html
   - styles.css
   - data.js
   - app.js
   - practice.js
   - README.md
   - .gitignore
   - DEPLOYMENT_GUIDE.md
4. 拖拽到 GitHub 页面
5. 在下方的 "Commit changes" 框中输入：`Initial commit`
6. 点击 **Commit changes**

### 步骤 3：开启 GitHub Pages

1. 在仓库页面，点击上方的 **Settings**（设置）
2. 在左侧菜单中找到 **Pages**
3. 在 "Branch" 下拉菜单中：
   - 选择 **main**
   - 保持文件夹为 **/ (root)**
4. 点击 **Save**
5. 等待 1-2 分钟，页面会显示：
   ```
   Your site is live at https://你的用户名.github.io/typemaster/
   ```

### 步骤 4：访问网站

- 复制上面的网址，在浏览器中打开
- 🎉 完成！你的打字练习应用已经上线了！

---

## 方法二：命令行部署（适合开发者）

### 前置要求

确保已安装 Git：
```bash
git --version
```

### 步骤 1：初始化仓库

打开终端（Terminal），执行：

```bash
cd ~/Desktop/practice
git init
git add .
git commit -m "Initial commit: TypeMaster typing practice application"
```

### 步骤 2：关联 GitHub 仓库

在 GitHub 创建好仓库后（参考方法一的步骤1），执行：

```bash
git branch -M main
git remote add origin https://github.com/你的用户名/typemaster.git
git push -u origin main
```

⚠️ **注意：** 将 `你的用户名` 替换成你的 GitHub 用户名

### 步骤 3：开启 GitHub Pages

参考方法一的步骤 3

---

## 🔧 常见问题

### Q1: 页面 404 Not Found
**A:** 等待 2-5 分钟，GitHub Pages 需要时间构建。刷新页面试试。

### Q2: 样式没有加载
**A:** 检查所有文件是否都上传了，特别是 `styles.css`

### Q3: 想要自定义域名
**A:** 
1. 购买域名（如 typemaster.com）
2. 在 GitHub Pages 设置中添加 Custom domain
3. 在域名提供商处添加 CNAME 记录指向 `你的用户名.github.io`

### Q4: 如何更新网站
**A:** 
- **网页方式：** 直接在 GitHub 上编辑文件或重新上传
- **命令行：** 
  ```bash
  git add .
  git commit -m "Update content"
  git push
  ```

---

## 📝 部署后的网址格式

```
https://你的GitHub用户名.github.io/仓库名/
```

例如：
- 用户名：`vvusu`
- 仓库名：`typemaster`
- 网址：`https://vvusu.github.io/typemaster/`

---

## 🎯 下一步

部署成功后，你可以：

1. ✅ 分享网址给朋友测试
2. ✅ 在 README.md 中添加 Live Demo 链接
3. ✅ 添加更多文章到 `data.js`
4. ✅ 自定义样式和颜色
5. ✅ 申请自定义域名

---

**祝部署顺利！有问题随时问我。** 🚀