# 1. Build Stage
FROM node:18 as build

# 作業ディレクトリの設定
WORKDIR /app

# パッケージ関連のファイルをコピー
COPY package*.json ./

# 必要なパッケージをインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Reactアプリのビルド
RUN npm run build

# 2. Production Stage
FROM nginx:alpine

# Nginx用設定ファイルをコピー（必要に応じて作成）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Reactアプリのビルド結果をコピー
COPY --from=build /app/dist /usr/share/nginx/html

# ポート80を公開
EXPOSE 80

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]