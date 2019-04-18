```html
<div id="div1"  class="center" style="visibility: hidden">
  <span onclick="read()">我知道了</span>
  <span onclick="read()">X</span>
</div>
```

```css
body {
  position: relative;
}
.center {
  background-color: orange;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100px;
  height: 25px;
  top: 50px;
  left: 50%;
  transform: translateY(-50%);
}
```

```js
let today = new Date();
let todayStr = "" + today.getFullYear()+String(today.getMonth()+1).padStart(2, '0')+today.getDate();

let flagDate = localStorage.getItem('date');
let div = document.getElementById('div1');
if(!flagDate || flagDate !== todayStr) {
  div.style.visibility = 'visible';
}

function read() {
  div.style.visibility = 'hidden';
  localStorage.setItem('date', todayStr);
}

```