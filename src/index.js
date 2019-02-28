const randNum = (min = 0, max = 20) => Math.floor(Math.random() * (max - min) + 1) + min

let battle = []
let winner = ''
let score1 = 0
let score2 = 0

const rollDice = (e) => {
  const view = e.target.parentElement
  const child = view.children[3]

  let r = randNum()
  battle.push({name: view.id, number: r})
  const n = battle.filter(d => d.name === view.id)

  child.innerHTML = n[0].number

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
  if(winner) 
  { 
    updateScore(winner)
    document.getElementById(winner).style.border = '2px solid black' 
  }
}

const updateScore = (winner) => {
  if(winner === 'player1') score1 += 1
  else if(winner === 'player2') score2 += 1

  document.getElementById('player1Score').innerHTML = score1
  document.getElementById('player2Score').innerHTML = score2
}

const clearScore = () => {
  score1 = 0
  score2 = 0
  winner = ''
  document.getElementById('player1Score').innerHTML = score1
  document.getElementById('player2Score').innerHTML = score2
}