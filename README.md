# Minimum Thmeme

Minimum ThmemeはCSSフレームワークの[specture](https://picturepan2.github.io/spectre/index.html)をベースにしたミニマムなテーマです。

## 基本設定

URL <https://mac-okuda.github.io/minimum-theme/>
ファイルのダウンロード <https://github.com/mac-okuda/minimum-theme/archive/master.zip>

## ディレクトリ構造

### CSS
#### style.css　
- 共通で利用するCSS
- resetCSS、h要素 文字サイズ、tableとボタンのベース部分、共通パーツ(ヘッダー、フッター、サイドバー) 、調整パーツ（文字の左右よせ、余白の設定）が含まれている

#### develop.css　
- 各ページごとに読み込むCSS
- 共通で使うかもしれないCSS（調整中のCSS）

#### animate.css 
- inview.jsと一緒に使う

### JS
#### common.js 
- 共通で利用するJS

#### jquery.invew.js 
- アニメーション用のJS

## レイアウトのサンプル

- トップページ
- 各要素について
- アニメーションのサンプル

## 主要なパーツの利用方法

### 1.グリッドレイアウト
下記のサイトを参考にする

https://design-tera.com/blog/archives/2372/

```
//5列の横並び
<div class="col_5">
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
</div>

```

```
//4列の横並び

<div class="col_4">
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
</div>
```

```
//3列の横並び
<div class="col_3">
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
</div>

```

```
//2列の横並び
<div class="col_2">
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
  <div>
    ここに内容
  </div>
</div>

```

### 2. 余白の調整用

- `m-1` margin: 4px
- `m-2` margin: 8px
- `p-1` padding: 4px
- `p-2` padding: 8px

例)マージン4pxの場合

```
.m-1 {
  margin: 0.2rem !important;
}

.mb-1 {
  margin-bottom: 0.2rem !important;
}

.ml-1 {
  margin-left: 0.2rem !important;
}

.mr-1 {
  margin-right: 0.2rem !important;
}

.mt-1 {
  margin-top: 0.2rem !important;
}

.mx-1 {
  margin-left: 0.2rem !important;
  margin-right: 0.2rem !important;
}

.my-1 {
  margin-bottom: 0.2rem !important;
  margin-top: 0.2rem !important;
}
```
## 3.文字の揃え方
文字の左寄せ  
`<div class="text-left"></div>`

文字の左寄せ  
`<div class="text-right"></div>`

文字の中央せ  
`<div class="text-center"></div>`

## 4. floatの調整
clearfix  
`<div class="clearfix"></div>`

左右  
`<div class="float-left"></div>`
`<div class="float-right"></div>`

中央
`<div class="p-centered"></div>`

その他
`<div class="p-relative"></div>`
`<div class="p-absolute"></div>`
`<div class="p-fixed"></div>`
`<div class="p-sticky"></div>`

## 5. 表示および非表示の設定
`hide-`、`show-`を使って特定のビューポートで要素を表示および非表示できる

詳しくは下記のURLを参考に

<https://picturepan2.github.io/spectre/layout/responsive.html#responsive-visibility>


