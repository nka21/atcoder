#!/bin/bash

# エラーが発生した時点でスクリプトを停止
set -e

echo "AtCoder環境セットアップを開始..."

# 必要なパッケージの確認
echo "必要なパッケージの確認中..."
if ! command -v node &> /dev/null; then
    echo "Error: Node.js がインストールされていません"
    exit 1
fi

if ! command -V python3 &> /dev/null; then
    echo "Error: Python3 がインストールされていません"
    exit 1
fi

echo "Node.js バージョン: $(node --version)"
echo "Python3 バージョン: $(python3 --version)"

# atcoder-cliをインストール
echo "atcoder-cliをインストール中..."
npm install -g atcoder-cli

# online-judge-toolsをインストール
echo "online-judge-toolsをインストール中..."
pip3 install online-judge-tools

# 設定ファイルをコピー
echo "設定ファイルをコピー中..."
if [ -d ".config/atcoder-cli-nodejs" ]; then
    cp -r .config/atcoder-cli-nodejs/* ~/.config/atcoder-cli-nodejs/
    echo "✅ 設定ファイルのコピーが完了しました"
else
    echo "Error: .config/atcoder-cli-nodejs が見つかりません"
fi

# アカウント連携
echo "アカウントの連携中..."
if acc login; then
    echo "✅ atcoder-cli のログインが完了しました"
else
    echo "❌ atcoder-cli のログインに失敗しました"
fi

if oj login https://beta.atcoder.jp/; then
    echo "✅ online-judge-tools のログインが完了しました"
else
    echo "❌ online-judge-tools のログインに失敗しました"
fi