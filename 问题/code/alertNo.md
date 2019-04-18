```html
<ul id="target">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>

```

```js
let ul = document.getElementById('target')
ul.onclick = function(event) {
  alert(event.target.innerText);
}
```

```js
let lists = [...document.getElementById('target').getElementsByTagName('li')]
for(let i = 0; i < lists.length; i++) {
  lists[i].onclick = function() {
    alert(i + 1);
  }
}
```