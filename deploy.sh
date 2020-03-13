#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 源文件部署到master分支
# git add -A
# git commit -m 'update'
# git push origin master:master

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 打包文件部署到gh-pages分支
git push -f https://github.com/wlpgdq/uapsite.git master:gh-pages

cd -