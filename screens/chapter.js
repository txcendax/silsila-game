let currentChapter = null
let currentNode = null
var storyChoices = {}
let _screenClickHandler = null
let chapterLog = []

function startChapter(chapter) {
  currentChapter = chapter
  chapterLog = []
  const screen = document.getElementById('chapter-screen')
  screen.className = chapter.id
  const menuBtn = document.getElementById('menu-btn')
  const wasVisible = menuBtn.classList.contains('visible')
  menuBtn.className = chapter.id + (wasVisible ? ' visible' : '')
  document.getElementById('menu-div').className = chapter.id
  document.getElementById('help-div').className = chapter.id
  void screen.offsetWidth
  screen.classList.add('chapter-intro')
  renderNode(chapter.startNode, true)
}

function renderNode(nodeId, isFirstRender = false) {
  if (_screenClickHandler) {
    document.getElementById('chapter-screen').removeEventListener('click', _screenClickHandler)
    _screenClickHandler = null
  }

  currentNode = currentChapter.nodes[nodeId]
  document.getElementById('chapter-character').textContent = currentNode.character

  const textContainer = document.getElementById('chapter-text')
  textContainer.innerHTML = ''

  const choicesDiv = document.getElementById('chapter-choices')
  choicesDiv.innerHTML = ''
  choicesDiv.style.animation = 'none'
  choicesDiv.style.opacity = '0'
  document.getElementById('chapter-hint').classList.remove('visible')

  const lines = currentNode.text.split('\n')
  const startDelay = isFirstRender ? 3.0 : 0.3

  let currentLineIndex = 0
  let activePara = null
  let ready = false

  function showLine(index) {
    if (index >= lines.length) {
      onAllLinesDone()
      return
    }

    // fade out previous line
    if (activePara) {
      activePara.classList.remove('visible')
    }

    // wait for fade-out (800ms matches transition), then swap
    setTimeout(() => {
      if (activePara) {
        textContainer.innerHTML = ''
      }

      const p = document.createElement('p')
      p.innerHTML = lines[index].replace(/\[([^\]]+)\]/g, '<em>$1</em>')
      p.classList.add('chapter-para')
      textContainer.appendChild(p)
      activePara = p

      // trigger fade-in
      void p.offsetWidth
      p.classList.add('visible')
      chapterLog.push({ character: currentNode.character, text: lines[index] })

      const isLast = index === lines.length - 1
      const isEndHint = currentChapter.id === 'sarika-intro' && nodeId === 'end' && index === lines.length - 2

      if (isLast) {
        onAllLinesDone()
      } else if (isEndHint) {
        const hint = document.getElementById('chapter-hint')
        hint.innerHTML = lines[lines.length - 1].replace(/\[([^\]]+)\]/g, '<em>$1</em>')
        setTimeout(() => {
          hint.classList.add('visible')
          onAllLinesDone()
        }, 800)
      } else {
        ready = true
        if (index === 0 && currentChapter.id === 'sarika-intro' && nodeId === currentChapter.startNode) {
          document.getElementById('chapter-hint').classList.add('visible')
        }
      }
    }, activePara ? 800 : 0)
  }

  _screenClickHandler = (e) => {
    if (e.target.id === 'menu-btn') return
    if (e.target.classList.contains('chapter-choices')) return
    if (document.getElementById('log-div').style.display === 'flex') return
    if (!ready) return
    ready = false
    document.getElementById('chapter-hint').classList.remove('visible')
    currentLineIndex++
    showLine(currentLineIndex)
  }

  document.getElementById('chapter-screen').addEventListener('click', _screenClickHandler)

  setTimeout(() => showLine(0), startDelay * 1000)

  function onAllLinesDone() {
    document.getElementById('chapter-screen').removeEventListener('click', _screenClickHandler)
    _screenClickHandler = null

    if (currentNode.choices.length === 0 && currentNode.leadsTo) {
      setTimeout(() => renderNode(currentNode.leadsTo), 800)
    } else if (currentNode.choices.length === 0) {
      const btn = document.createElement('button')
      btn.textContent = 'End of Chapter'
      btn.classList.add('chapter-choices')
      btn.addEventListener('click', () => {
        if (currentChapter.unlocks) {
          currentChapter.unlocks.forEach(({ character, itemName }) => {
            const list = inventoryItems[character]
            if (list) {
              const item = list.find(i => i.name === itemName)
              if (item) item.unlocked = true
            }
          })
        }
        chapterCount++
        document.getElementById('chapter-screen').style.display = 'none'
        document.getElementById('chapter-title').textContent = `Chapter ${chapterCount}`
        document.getElementById('chapter-begin-screen').style.display = 'flex'
        updatePovButtons()
      })
      choicesDiv.appendChild(btn)
      void choicesDiv.offsetWidth
      choicesDiv.style.opacity = ''
      choicesDiv.style.animation = 'csFadeIn 1s ease forwards'
    } else {
      currentNode.choices.forEach(choice => {
        const btn = document.createElement('button')
        btn.textContent = choice.text
        btn.classList.add('chapter-choices')
        btn.addEventListener('click', () => {
          if (!storyChoices[currentChapter.id]) storyChoices[currentChapter.id] = {}
          storyChoices[currentChapter.id][nodeId] = choice.leadsTo

          if (activePara) activePara.textContent += ' ' + choice.text

          renderNode(choice.leadsTo)
        })
        choicesDiv.appendChild(btn)
      })
      void choicesDiv.offsetWidth
      choicesDiv.style.opacity = ''
      choicesDiv.style.animation = 'csFadeIn 1s ease forwards'
    }
  }
}

document.querySelector('.log-btn').addEventListener('click', () => {
  const content = document.getElementById('log-content')
  content.innerHTML = ''
  chapterLog.forEach(entry => {
    const p = document.createElement('p')
    const name = entry.character.charAt(0).toUpperCase() + entry.character.slice(1)
    p.innerHTML = `<i>${name}:</i> ${entry.text.replace(/\[([^\]]+)\]/g, '<em>$1</em>')}`
    content.appendChild(p)
  })
  const logDiv = document.getElementById('log-div')
  logDiv.className = currentChapter ? currentChapter.id : ''
  logDiv.style.display = 'flex'
})

document.getElementById('log-close-btn').addEventListener('click', () => {
  document.getElementById('log-div').style.display = 'none'
})
