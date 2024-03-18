<span align='center'>

![](/web-extension/icons/icon-128.png)

</span>
<h1 align='center'>Zenn Trend History</h1>

![](/art/image-1.png)

Zenn Trend History は、Zenn でトレンドになったテック記事、アイデア記事、本の過去の履歴を簡単に表示する Chrome 拡張機能です。この拡張機能を利用することで、過去のトレンドを振り返り、忘れていた技術やアイデアを再び思い出すことができます。この拡張機能は、**非公式**なものです。

# 特徴

-   過去のトレンドを振り返る：Zenn で過去にトレンドになった記事や本の履歴を一覧表示します。これにより、過去の人気コンテンツを再度閲覧することができます。
-   技術やアイデアの再発見：忘れてしまった技術やアイデアを再び発見する機会を提供します。過去のトレンドを見ることで、新たな気づきやアイデアが得られるかもしれません。

# 使い方

## 公開されているサーバーを使う場合

1. `cd web-extension` をターミナルで実行します。
2. `yarn install` で依存パッケージをインストールします。
3. Chromium ベースのブラウザで[拡張機能の管理ページ](chrome://extensions/)を開きます。
4. デベロッパー モードを`ON`にして、`パッケージ化されていない拡張機能を読み込む`をクリックし、`web-extension/dist`を選択します。
5. [Zenn のウェブサイト](https://zenn.dev/)にアクセスします。
6. ページの一番下にある「History」までスクロールします。

## ローカルサーバーを使う場合

1. `cd server` をターミナルで実行します。
2. `yarn install` で依存パッケージをインストールします。
3. `web-extension/src/App.tsx` の変数 `API_URL`を変更します。
4. `cd web-extension` をターミナルで実行します。
5. `yarn install` で依存パッケージをインストールします。
6. Chromium ベースのブラウザで[拡張機能の管理ページ](chrome://extensions/)を開きます。
7. デベロッパー モードを`ON`にして、`パッケージ化されていない拡張機能を読み込む`をクリックし、`web-extension/dist`を選択します。
8. [Zenn のウェブサイト](https://zenn.dev/)にアクセスします。
9. ページの一番下にある「History」までスクロールします。

# 要件

-   Node.js

# インストール

```
cd server/
yarn install
```

```
cd web-extension/
yarn install
```

# 作者

[zuk246](https://github.com/zuk246)

# ライセンス

[MIT license](/LICENSE) です。
