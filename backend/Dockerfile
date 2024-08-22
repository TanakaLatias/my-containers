FROM node:17-alpine
# FROM <イメージ名> この部分は必須！

RUN npm install -g nodemon
# nodemon をグローバルにインストール

WORKDIR /app
# これ以降コンテナ内では /app で作業する

COPY package*.json .
# package.json を /app にコピー

RUN npm install
# /app で package*.json を参考に必要な依存関係をインストール

COPY . .
# ローカルの Dockerfile と同階層にある全てのファイルを /app にコピー

EXPOSE 4000
# 使うポートを指定（任意）。

CMD ["npm", "run", "dev"]
# CMD で指定したコマンドは、上記のインストールなどの準備が終わってから実行される
# RUN で指定するとインストール完了を待たずに実行されてしまう