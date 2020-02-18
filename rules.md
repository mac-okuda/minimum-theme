index

1. CSSの命名規則
1. 画像の命名規則



---

## 1.CSSの命名規則

### (1) section毎にclass名を付与
### (2) BEMを利用 block__element--modifier

例) navList__item

`block__element__element` は使用しない 

```

/* NG */ 
<ul class="navList">
<li class="navList__item">
<a class="navList__item__link" href=""></a>
</li>
</ul> 

/* OK */ 
<ul class="navList">
 <li class="navList__item">
 <a class="navList__link" href=""></a> 
</li> 
</ul> 

```

## 2.画像の命名規則

### 画像における命名規則

「種類」と「詳細」をアンダーバーでつなげる 種類_詳細.拡張子 

(例) menu_contact.jpg


### 種類を6つに分類

- bg : 背景 
- btn : ボタン 
- icon : アイコン 
- txt : テキスト 
- ttl : タイトル 
- img : 画像

### 詳細 

種類に対して詳細な説明をする  
icon_arrow.png 

複数単語を使用したい場合はキャメルケースでつなげる  
icon_arrowPrev.png

### 番号

同じ用途の画像が複数あった場合に、番号を付ける  
icon_arrow_01.png

