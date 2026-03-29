document.getElementById('begin-btn').addEventListener('click', () => {
  document.getElementById('title-screen').style.display = 'none'
  document.getElementById('intro-screen').style.display = 'block'
  initIntro()
})

document.getElementById('load-btn').addEventListener('click', () => {
  document.getElementById('title-screen').style.display = 'none'
  document.getElementById('load-screen').style.display = 'flex'
  initIntro()
})