(function (arr) {
  if (!arr) arr = Object.keys(window.localStorage)
  let t = []
  for (let value of arr) {
    let local = window.localStorage.getItem(value)
    if (local) t.push([value, local])
  }
  let str = `(function(a){
        for(let value of a){
            let [k, v] = value;
            window.localStorage.setItem(k, v);
        }
    })(${JSON.stringify(t)})`
  console.warn(str)
  var tag = document.createElement('input');
  tag.value = str.replace(/\s{2}/g, '');
  document.getElementsByTagName('body')[0].appendChild(tag);
  tag.select();
  document.execCommand('copy');
  tag.remove();
})()