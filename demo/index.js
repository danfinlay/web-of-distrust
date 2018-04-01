var h = require('hyperscript')
var container = document.querySelector('body')
var html = document.querySelector('html')
var els = [container, html]
els.forEach((el) => {
  el.style.height = '100%'
  el.style.width = '100%'
})

container.appendChild(h('.controls', {}, [
  h('button', {
    onClick: () => { this.mode = 'add-node' },
  }, 'Add Nodes'),
  h('button', {
    onClick: () => { this.mode = 'add-connection' },
  }, 'Add Connection'),
]))

let mode = 'add-node'

console.log(window)

function Node(opts = { x: 0, y: 0 }) {
  const { x = 0, y = 0 } = opts
  this.el = h('div', {
    style: {width: '100px', height: '100px', 'border-radius': '50px', border:'1px solid black'},
  })

  this.x = x
  this.y = y
  console.dir(this)
  this.vX = Math.random()
  this.vY = Math.random()

  container.appendChild(this.el)
  this.el.addEventListener('click', this.clicked.bind(this))
}
Node.prototype.clicked = function (event) {
  console.log('clicked!', event)
}
Node.prototype.tick = function () {
  this.x += this.vX
  this.y += this.vY

  if (this.x < 0 || this.x > 500) this.vX *= -1
  if (this.y < 0 || this.y > 500) this.vY *= -1

  this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
}


var node = new Node({ })
var nodes = [node]

window.requestAnimationFrame(step)

function step(ts) {
  nodes.forEach((node) => node.tick())
  window.requestAnimationFrame(step)
}


container.addEventListener('click', (event) => {
  // environment clicked
  console.log(event)
  const { x, y } = event
  nodes.push(new Node({ x, y }))
})



