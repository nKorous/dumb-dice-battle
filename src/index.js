const randNum = (min = 0, max = 20) => Math.floor(Math.random() * (max - min) + 1) + min

let battle = []
let winner = ''
let score1 = 0
let score2 = 0

const rollDice = (e) => {
  const view = e.target.parentElement
  const child = view.children[3]
  const r = randNum()

  battle.push({name: view.id, number: r})

  const n = battle.filter(d => d.name === view.id)
  child.innerHTML = n[0].number

  e.target.disabled = true

  checkScore()
}

const checkScore = () => {
  if(battle.length == 2){
    const d = battle.sort((a, b) => b.number - a.number)

    winner = d[0].name

    const win = document.getElementById(winner)
    win.style.border = '5px solid gold'
  }
}
const clearBattle = () => {
  battle = [];
  document.getElementById('rolled1').innerHTML = 'not rolled'
  document.getElementById('rolled2').innerHTML = 'not rolled'
  
  //Methods
  unDisableButtons()
  updateScore(winner)
  setBorderToDefault()
}


const updateScore = (winner) => {
  if(winner === 'player1') score1 += 1
  else if(winner === 'player2') score2 += 1

  setScore()
}

const clearScore = () => {
  score1 = 0
  score2 = 0
  winner = ''

  //methods
  clearBattle()
  setScore()
  setBorderToDefault()
}

const unDisableButtons = () => {
  const buttons = document.getElementsByName('rollButton')
  buttons[0].disabled = false
  buttons[1].disabled = false
}

const setBorderToDefault=() => {
  document.getElementById('player1').style.border = '2px solid black' 
  document.getElementById('player2').style.border = '2px solid black' 
}

const setScore = () => {
  document.getElementById('player1Score').innerHTML = score1
  document.getElementById('player2Score').innerHTML = score2
}