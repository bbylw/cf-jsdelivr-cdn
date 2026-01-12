# Cloudflare jsDelivr CDN

A private CDN proxy built on Cloudflare's edge network. It provides stable, controllable, and up-to-date access to jsDelivr-hosted assets.  
This repository supports deployment via Cloudflare Workers or Cloudflare Pages.

## Features

- Fully compatible with jsDelivr URLs (`/npm/`, `/gh/`, `/combine/`)  
- Cloudflare edge caching for faster response  
- Strong cache control for immutable assets  
- Path whitelist to prevent abuse as an open proxy  
- Deployment via Workers or Pages

## Deployment Modes

### Cloudflare Workers (Recommended)
- Copy the code into a Worker via the Cloudflare dashboard, or deploy via Wrangler CLI.

### Cloudflare Pages
- Place the `_worker.js` file in the Pages project directory.  
- Connect your repository in the Cloudflare Pages dashboard and deploy.

## URL Structure

Use your own CDN domain while keeping the jsDelivr path structure:

```text
https://cdn.yourdomain.com/npm/package@version/file
https://cdn.yourdomain.com/gh/user/repo@version/file
https://cdn.yourdomain.com/combine/...
Example:
<link rel="stylesheet"
  href="https://cdn.yourdomain.com/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css">
Security

Only /npm/, /gh/, and /combine/ paths are allowed.
All other requests return 403 Not Allowed.


Cloudflare jsDelivr 私有 CDN

一个基于 Cloudflare 边缘网络的私有 CDN 代理，用于稳定、可控地访问 jsDelivr 托管的前端资源。
本仓库支持通过 Cloudflare Workers 或 Cloudflare Pages 部署。

功能特性

与 jsDelivr URL 完全兼容（/npm/、/gh/、/combine/）

使用 Cloudflare 边缘缓存提高响应速度

对不可变资源设置强缓存策略

路径白名单防止被滥用为开放代理

可通过 Workers 或 Pages 部署

部署方式
Cloudflare Workers（推荐）

可直接将代码复制到 Cloudflare Dashboard Worker 中，也可以通过 Wrangler CLI 部署。

Cloudflare Pages

将 _worker.js 文件放入 Pages 项目目录

在 Cloudflare Pages 仪表盘连接仓库并部署

URL 结构

使用你自己的 CDN 域名，同时保持 jsDelivr 的路径结构：
https://cdn.yourdomain.com/npm/package@version/file
https://cdn.yourdomain.com/gh/user/repo@version/file
https://cdn.yourdomain.com/combine/...
示例：
<link rel="stylesheet"
  href="https://cdn.yourdomain.com/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css">
安全说明

仅允许 /npm/、/gh/、/combine/ 路径访问。
其余路径返回 403 Not Allowed。
