# ベースイメージ
FROM node:18

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係のコピー
COPY package.json package-lock.json ./
RUN npm install

# ソースコードのコピー
COPY . .  

# ビルド
RUN npm run build

# アプリケーションの起動
CMD ["npm", "start"]
