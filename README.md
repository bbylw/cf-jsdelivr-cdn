# Cloudflare jsDelivr CDN Proxy

[中文文档](#中文说明)

A private, high-performance CDN proxy built on Cloudflare's Edge Network (Workers & Pages). It provides stable, controllable, and fast access to jsDelivr-hosted assets with intelligent caching strategies.

## ✨ Features

- **Full Compatibility**: Supports standard jsDelivr URLs (`/npm/`, `/gh/`, `/combine/`).
- **Edge Caching**: Leverages Cloudflare's global network for low-latency access.
- **Smart Caching Strategy**:
  - **Immutable Assets**: 1-year cache (`max-age=31536000`) for successful requests (200 OK).
  - **Error Resilience**: Short 10-minute cache for failures (404/500), preventing persistent bad responses.
- **Security**: strict path whitelisting to prevent abuse as an open proxy.
- **Flexible Deployment**: Supports both Cloudflare Workers and Cloudflare Pages.

## 🚀 Deployment

### Option 1: Cloudflare Workers (Recommended)

1. **Copy Code**: Copy the content of `workers/src/worker.js`.
2. **Create Worker**: Go to Cloudflare Dashboard -> Workers -> Create a Service.
3. **Paste & Deploy**: Paste the code into the editor and deploy.
4. **Custom Domain** (Optional): Bind a custom domain in the Worker's "Triggers" headers.

### Option 2: Cloudflare Pages

1. **Prepare File**: Use the `pages/_worker.js` file.
2. **Deploy**:
   - Create a new project in Cloudflare Pages.
   - Upload the `pages` directory (or a folder containing `_worker.js`).
   - Or connect a Git repository containing the file.

## 🔗 Usage

After deployment, use your Worker/Pages domain (e.g., `cdn.yourdomain.com`) to access resources.

#### Structure
```text
https://cdn.yourdomain.com/npm/package@version/file
https://cdn.yourdomain.com/gh/user/repo@version/file
https://cdn.yourdomain.com/combine/...
```

#### Example
**Original**:
```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css">
```

**Your Proxy**:
```html
<script src="https://cdn.yourdomain.com/npm/jquery@3.6.0/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.yourdomain.com/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css">
```

## 🔒 Security

To prevent your Worker from being used as a general-purpose proxy:
- Only paths starting with `/npm/`, `/gh/`, and `/combine/` are allowed.
- All other requests (including root `/`) return `403 Not Allowed`.

---

<a id="中文说明"></a>

# Cloudflare jsDelivr CDN 私有代理

一个基于 Cloudflare 边缘网络（Workers 和 Pages）构建的私有 CDN 代理。它提供了稳定、可控且快速的前端资源访问能力，并内置了智能缓存策略。

## ✨ 功能特性

- **完全兼容**: 支持标准的 jsDelivr URL 结构（`/npm/`、`/gh/`、`/combine/`）。
- **边缘缓存**: 利用 Cloudflare 全球节点加速资源响应。
- **智能缓存策略**:
  - **长期缓存**: 对成功请求（200 OK）实行 1 年的强缓存策略。
  - **错误容错**: 对错误响应（404/500）仅缓存 10 分钟，避免错误被长期锁定。
- **安全防护**: 内置路径白名单，防止被滥用为通用代理。
- **灵活部署**: 同时支持 Cloudflare Workers 和 Cloudflare Pages 部署。

## 🚀 部署指南

### 方式一：Cloudflare Workers（推荐）

1. **获取代码**: 复制 `workers/src/worker.js` 中的代码。
2. **创建服务**: 登录 Cloudflare 控制台 -> Workers -> 创建服务。
3. **部署**: 将代码粘贴到在线编辑器中并保存部署。
4. **自定义域名** (可选): 在 Worker 的“触发器 (Triggers)”选项卡中绑定你的自定义域名。

### 方式二：Cloudflare Pages

1. **准备文件**: 使用 `pages/_worker.js` 文件。
2. **部署**:
   - 在 Cloudflare Pages 中新建项目。
   - 上传包含 `_worker.js` 的目录。
   - 或者连接包含该文件的 Git 仓库进行自动部署。

## 🔗 使用方法

部署完成后，使用你的 Worker 或 Pages 域名（例如 `cdn.yourdomain.com`）替换原有的 jsDelivr 域名。

#### URL 结构
```text
https://cdn.yourdomain.com/npm/包名@版本/文件路径
https://cdn.yourdomain.com/gh/用户/仓库@版本/文件路径
https://cdn.yourdomain.com/combine/...
```

#### 示例
**原始引用**:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css">
```

**使用私有代理**:
```html
<link rel="stylesheet" href="https://cdn.yourdomain.com/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.yourdomain.com/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css">
```

## 🔒 安全说明

为了防止代理被滥用：
- 仅允许访问以 `/npm/`、`/gh/` 和 `/combine/` 开头的路径。
- 访问其他路径（包括根路径 `/`）将直接返回 `403 Not Allowed`。
