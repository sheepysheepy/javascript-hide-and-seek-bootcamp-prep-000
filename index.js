function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++) {
    let children = lis[i].children

    for (let p=0, o = children.length; p < o; p++) {
      children[p].innerHTML = parseInt(children[p].innerHTML) + n
    }
  }
}

function deepestChild() {
  var deep = document.getElementById('grand-node')
  var next = deep.children[0]

  while (next) {
    deep = next
    next = deep.children[0]
  }

  return deep
}
