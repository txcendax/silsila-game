document.getElementById('upload-btn').addEventListener('click', () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.json'
  input.click()

  input.addEventListener('change', () => {
    const file = input.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = e => {
      const saveData = JSON.parse(e.target.result)
      const error = document.getElementById('load-error')

      if (!saveData.chapter) {
        error.textContent = 'Invalid file. Please upload a valid save file.'
        return
      }

      error.textContent = ''
      chapterCount = saveData.chapter
      if (saveData.chapterChoices) {
        Object.assign(chapterChoices, saveData.chapterChoices)
      }
      if (saveData.storyChoices) {
        Object.assign(storyChoices, saveData.storyChoices)
      }

      saveData.characters.forEach(savedChar => {
        confirmedIds.add(savedChar.id)

        const character = characters.find(c => c.id === savedChar.id)
        if (character) {
          const selectedIds = new Set(savedChar.selectedPowers.map(p => p.id))
          character.skills_info.powers.forEach(p => {
            p.selected = selectedIds.has(p.id)
          })
        }
      })

      document.getElementById('load-screen').style.display = 'none'
      document.getElementById('chapter-title').textContent = `Chapter ${chapterCount}`
      document.getElementById('chapter-begin-screen').style.display = 'flex'
      updatePovButtons()
    }
    reader.readAsText(file)
  })
})
