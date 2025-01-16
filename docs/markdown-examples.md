# Markdown 範例

這個頁面展示一些常用的 Markdown 範例。


## 程式碼

**Input**

````md
```js{3}
const a = 5;
const b = 10;
console.log(a + b);
```
````

**Output**

```js{3}
const a = 5;
const b = 10;
console.log(a + b);
```

**強調**

```
強調指定單行: {4,7,9}
強調範圍: {5-8}, {3-10}, {10-17}
強調指定單行＋範圍: {4,7-13,16,23-27,40}
```

## 程式碼差異標示

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!!code --]
      msg: 'Added' // [!!code ++]
    }
  }
}
```
````

**Output**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 關注程式碼

滑鼠移入後會全部顯示。

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 外部引入程式碼

```md
<<< @/檔案路徑{高亮行}
```

## 分組程式碼

**Output**

::: code-group
``` [npm]
npm run dev

```
``` [pnpm]
pnpm dev

```
:::


::: code-group
```html [Html]
<div class="book">
  <div class="name">My Book</div>
  <div class="sn">123-456-789</div>
</div>
```

```scss [Scss]
.book {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;

  >.name {
    color: #000;
    font-size: 12pt;
    font-weight: bold;
  }
  >.sn {
    color: #888;
    font-size: 10pt;
  }
}
```

:::


## 提示區塊

**Input**

```md
::: info
This is an info box.
:::

::: tip 自訂標題
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip 自訂標題
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 連結

**Input**

````md
[回首頁](/index.md)
````

**Output**

[回首頁](/index.md)

## 圖片

**Input**

````md
![圖片註解](https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
````

**Output**

![圖片註解](https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

## 表格

**Input**

````md
|值  |名稱         |備註
|----|------------|-------------------
|0   |Unavailable |已下架 
|1   |Available   |可租用
|2   |Reserved    |已預訂（不可租借）
|3   |Missing     |遺失（不可租借）
````

**Output**

|值  |名稱         |備註
|----|------------|-------------------
|0   |Unavailable |已下架 
|1   |Available   |可租用
|2   |Reserved    |已預訂（不可租借）
|3   |Missing     |遺失（不可租借）


## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
