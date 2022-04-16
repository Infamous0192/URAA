import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const COL = 5
const ROW = 5

class Node {
  constructor(row, col) {
    this.value = { row, col }
    this.next = null
  }
}

class Ular {
  x = 1
  y = 0

  constructor(row, col) {
    this.head = new Node(1, 1)
    document.getElementById(`M33`).className = 'box wadai'
    // this.render()
    this.belok()
    this.render()
    this.gerak()
  }

  belok() {
    document.addEventListener('keydown', ({ key }) => {
      if (key == 'ArrowLeft' && this.y && !this.x) {
        this.x = -1
        this.y = 0
      }
      if (key == 'ArrowRight' && this.y && !this.x) {
        this.x = 1
        this.y = 0
      }
      if (key == 'ArrowDown' && !this.y && this.x) {
        this.x = 0
        this.y = 1
      }
      if (key == 'ArrowUp' && !this.y && this.x) {
        this.x = 0
        this.y = -1
      }
    })
  }

  baganal() {
    let buntut = this.head
    while (buntut.next != null) {
      buntut = buntut.next
    }

    buntut.next = new Node(buntut.value.row, buntut.value.col)
  }

  bagarak(box, value) {
    let temp = this.head

    while (temp !== null) {
      
      temp = temp.next
    }

    if (value.col >= COL  || value.row >= ROW || value.row < 0 || value.col < 0) alert('meninggal')

    document.getElementById(`M${box.value.col}${box.value.row}`).className = 'box'
    box.value = value
  }

  gerak() {
    setInterval(() => {
      this.bagarak(this.head, {
        row: this.head.value.row + this.y,
        col: this.head.value.col + this.x,
      })
      this.render()
    }, 500)
  }

  render() {
    let temp = this.head
    let isPalaExist = false
    while (temp !== null) {
      const { row, col } = temp.value
      const kotak = document.getElementById(`M${col}${row}`)
      if (kotak.className.includes('wadai')) this.baganal()

      kotak.className = isPalaExist ? 'box awak' : 'box pala'
      isPalaExist = true
      temp = temp.next
    }
  }
}

function init() {
  let box = ''
  for (let i = 0; i < COL; i++) {
    for (let j = 0; j < ROW; j++) {
      box += `<div id="M${j}${i}" class="box"></div>`
    }
  }
  const container = document.getElementById('container')
  container.style.gridTemplateColumns = `repeat(${COL}, minmax(0, 1fr))`
  container.innerHTML = box
  new Ular(1, 1)
}

init()
