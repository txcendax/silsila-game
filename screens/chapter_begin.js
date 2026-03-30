const chapterChoices = {}

const chapterFileByPov = {
  1: {
    sarika: 'sarika_intro',
    azhar: 'azhar_intro'
  },
  2: {
    sarika: 'sarika_intro',
    azhar: 'azhar_intro'
  },
  3: {
    sarika: 'sarika_propose',
    azhar: 'azhar_propose'
  }
}

function getAvailablePovs(chapter) {
  if (chapter === 1) return ['sarika', 'azhar']
  if (chapter === 2) {
    const ch1 = chapterChoices[1]
    if (ch1 === 'sarika') return ['azhar']
    if (ch1 === 'azhar') return ['sarika']
  }
  if (chapter === 3) return ['sarika', 'azhar']
  return []
}

function updatePovButtons() {
  const available = getAvailablePovs(chapterCount)
  document.querySelectorAll('.pov-btn').forEach(btn => {
    if (available.includes(btn.dataset.id)) {
      btn.classList.remove('disabled')
    } else {
      btn.classList.add('disabled')
    }
  })
}

document.querySelectorAll('.pov-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) return

    const pov = btn.dataset.id
    chapterChoices[chapterCount] = pov
    const fileName = chapterFileByPov[chapterCount]?.[pov] || `chapter_${chapterCount}`

    const script = document.createElement('script')
    script.src = `chapters/${fileName}.js`

    script.onload = () => {
      document.getElementById('chapter-begin-screen').style.display = 'none'
      document.getElementById('chapter-screen').style.display = 'flex'
      startChapter(window.chapterData)
    }

    script.onerror = () => {
      console.error(`Could not load ${fileName}.js`)
    }

    document.body.appendChild(script)
  })
})
