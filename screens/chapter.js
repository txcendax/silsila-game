let currentChapter = null
let currentNode = null
var storyChoices = {}

function startChapter(chapter) {
  currentChapter = chapter
  const screen = document.getElementById('chapter-screen')
  screen.className = chapter.id
  void screen.offsetWidth
  screen.classList.add('chapter-intro')
  renderNode(chapter.startNode, true)
}

function renderNode(nodeId, isFirstRender = false) {
  currentNode = currentChapter.nodes[nodeId]

  document.getElementById('chapter-character').textContent = currentNode.character

  const textContainer = document.getElementById('chapter-text')
  if (isFirstRender) textContainer.innerHTML = ''

  const paragraphs = currentNode.text.split('\n')
  const paraStartDelay = isFirstRender ? 3.5 : 0.3
  const paraInterval = 1.5
  const firstNewIndex = textContainer.children.length

  paragraphs.forEach((para, i) => {
    const p = document.createElement('p')
    p.textContent = para
    p.classList.add('chapter-para')
    p.style.animationDelay = `${paraStartDelay + i * paraInterval}s`
    textContainer.appendChild(p)
  })

  if (!isFirstRender) {
    setTimeout(() => {
      textContainer.children[firstNewIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, paraStartDelay * 1000)
  }

  const choicesDiv = document.getElementById('chapter-choices')
  choicesDiv.innerHTML = ''
  choicesDiv.style.animation = 'none'
  void choicesDiv.offsetWidth
  choicesDiv.style.animation = `csFadeIn 1s ease ${paraStartDelay + paragraphs.length * paraInterval}s forwards`

  if (currentNode.choices.length === 0 && currentNode.leadsTo) {
    const autoDelay = (paraStartDelay + (paragraphs.length - 1) * paraInterval + 1) * 1000
    setTimeout(() => renderNode(currentNode.leadsTo), autoDelay)
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
  } else {
    currentNode.choices.forEach(choice => {
      const btn = document.createElement('button')
      btn.textContent = choice.text
      btn.classList.add('chapter-choices')
      btn.addEventListener('click', () => {
        if (!storyChoices[currentChapter.id]) storyChoices[currentChapter.id] = {}
        storyChoices[currentChapter.id][nodeId] = choice.leadsTo

        const textContainer = document.getElementById('chapter-text')
        const lastPara = textContainer.lastElementChild
        if (lastPara) lastPara.textContent += ' ' + choice.text

        renderNode(choice.leadsTo)
      })
      choicesDiv.appendChild(btn)
    })
  }
}