let currentCharacter = null
let chapterCount = 0
const confirmedIds = new Set()

function initIntro() {
  const symbols = document.querySelectorAll('#intro-screen img')

  symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
      const characterId = symbol.getAttribute('data-id')
      if (confirmedIds.has(characterId)) return
      showCharacter(characterId)
    })
  })
}

function updateIntroScreen() {
  document.querySelectorAll('#intro-screen img').forEach(symbol => {
    if (confirmedIds.has(symbol.getAttribute('data-id'))) {
      symbol.classList.add('confirmed')
    }
  })
}

function showCharacter(characterId) {
  const character = characters.find(c => c.id === characterId)
  
  document.getElementById('intro-screen').style.display = 'none'
  document.getElementById('character-screen').style.display = 'flex'

  renderCharacterSheet(character)
}

function renderCharacterSheet(character) {
  currentCharacter = character
  document.getElementById('character-sheet').style.display = 'flex'
  document.getElementById('powers-sheet').style.display = 'none'
  const sheet = document.getElementById('character-sheet')

  document.getElementById('cs-name').textContent = character.name
  document.getElementById('cs-title').textContent = character.gen_info.title
  document.getElementById('intro-screen').style.display = 'none'
  document.getElementById('character-screen').style.display = 'flex'

  sheet.scrollTop = 0
  sheet.classList.remove('cs-intro')
  void sheet.offsetWidth
  sheet.classList.add('cs-intro')

  document.getElementById('cs-age').textContent = `Age: ${character.gen_info.age}`
  document.getElementById('cs-gender').textContent = `Gender: ${character.gen_info.gender}`
  document.getElementById('cs-kingdom').innerHTML = `Kingdom: ${character.gen_info.kingdom.value} <span class="cs-tooltip" data-tooltip="${character.gen_info.kingdom.description}">ⓘ</span>`
  document.getElementById('cs-ethnicity').textContent = `Ethnicity: ${character.gen_info.ethnicity}`
  document.getElementById('cs-languages').textContent = `Languages: ${character.gen_info.languages.join(', ')}`
  document.getElementById('cs-residence').innerHTML = `Residence: ${character.gen_info.residence.value} <span class="cs-tooltip" data-tooltip="${character.gen_info.residence.description}">ⓘ</span>`
  document.getElementById('cs-occupation').textContent = `Occupation: ${character.gen_info.occupation}`
  document.getElementById('cs-realm').innerHTML = `Field of Study: ${character.skills_info.magic_realm.value} <span class="cs-tooltip" data-tooltip="${character.skills_info.magic_realm.description}">ⓘ</span>`

  document.getElementById('cs-height').textContent = `Height: ${character.phys_info.height}`
  document.getElementById('cs-skin').textContent = `Skin Color: ${character.phys_info.skin_color}`
  document.getElementById('cs-hair').textContent = `Hair Color: ${character.phys_info.hair_color}`
  document.getElementById('cs-eye').textContent = `Eye Color: ${character.phys_info.eye_color}`
  document.getElementById('cs-accessories').textContent = `Accessories: ${character.phys_info.accessories.join(', ')}`

  document.getElementById('cs-mbti').textContent = `MBTI: ${character.personality_info.mbti}`
  document.getElementById('cs-enneagram').textContent = `Enneagram: ${character.personality_info.enneagram}`
  document.getElementById('cs-alignment').textContent = `Moral Alignment: ${character.personality_info.moral_alignment}`
  document.getElementById('cs-virtues').innerHTML = `Virtues: ${character.personality_info.virtues.map(v => v.redacted ? `<span class="cs-redacted">${v.value}</span>` : v.value).join(', ')}`
  document.getElementById('cs-vices').innerHTML = `Vices: ${character.personality_info.vices.map(v => v.redacted ? `<span class="cs-redacted">${v.value}</span>` : v.value).join(', ')}`
  document.getElementById('cs-goals').innerHTML = `Goals: ${character.personality_info.goals.map(v => v.redacted ? `<span class="cs-redacted">${v.value}</span>` : v.value).join(', ')}`
  document.getElementById('cs-quirks').textContent = `Quirks: ${character.personality_info.quirks.join(', ')}`
  
  const bulletList = items => items.map(v => `<span class="cs-bullet">• ${v.redacted ? `<span class="cs-redacted">${v.value}</span>` : v.value}</span>`).join('')

  document.getElementById('cs-overview').innerHTML = `Overview:<br>${bulletList(character.backstory_info.overview)}`
  document.getElementById('cs-wounds').innerHTML   = `Wounds:<br>${bulletList(character.backstory_info.wounds)}`
  document.getElementById('cs-fears').innerHTML    = `Fears:<br>${bulletList(character.backstory_info.fears)}`
  document.getElementById('cs-beliefs').innerHTML  = `Beliefs:<br>${bulletList(character.backstory_info.beliefs)}`
  document.getElementById('cs-secrets').innerHTML  = `Secrets:<br>${bulletList(character.backstory_info.secrets)}`
}

document.getElementById('powers-btn').addEventListener('click', () => {
  document.getElementById('character-sheet').style.display = 'none'
  document.getElementById('powers-sheet').style.display = 'block'

  renderPowersSheet(currentCharacter)
})

function renderPowersSheet(character) {
  const sheet = document.getElementById('powers-sheet')

  document.getElementById('cs-power-title').textContent = `${character.name.split(' ')[0]}'s Powers`

  const unlockedPowers = character.skills_info.powers.filter(p => p.unlocked)
  document.getElementById('cs-power-explain').textContent = `Select three powers to add to your inventory.`
  const list = document.getElementById('powers-list')
  list.innerHTML = unlockedPowers.map(p => `
    <label class="power-item">
      <input type="checkbox" data-id="${p.id}" ${p.selected ? 'checked' : ''}>
      <span>${p.name}</span>
      <span class="cs-tooltip" data-tooltip="${p.description}">ⓘ</span>
    </label>
  `).join('')

  list.addEventListener('change', e => {
    const checked = list.querySelectorAll('input[type="checkbox"]:checked')
    if (checked.length > 3) e.target.checked = false
  })

  list.querySelectorAll('.cs-tooltip').forEach(tip => {
    tip.addEventListener('mouseenter', () => {
      const rect = tip.getBoundingClientRect()
      tip.style.setProperty('--tooltip-x', rect.left + rect.width / 2 + 'px')
      tip.style.setProperty('--tooltip-y', rect.top - 8 + 'px')
    })
  })

  sheet.classList.remove('cs-intro')
  void sheet.offsetWidth
  sheet.classList.add('cs-intro')
}

document.getElementById('confirm-btn').addEventListener('click', () => {
  const checked = new Set(
    [...document.querySelectorAll('#powers-list input[type="checkbox"]:checked')]
      .map(cb => cb.getAttribute('data-id'))
  )

  if (checked.size !== 3) return

  currentCharacter.skills_info.powers.forEach(p => {
    p.selected = checked.has(p.id)
  })

  confirmedIds.add(currentCharacter.id)

  document.getElementById('character-screen').style.display = 'none'
  document.getElementById('powers-sheet').style.display = 'none'

  if (confirmedIds.size === characters.length) {
    chapterCount++
    document.getElementById('chapter-title').textContent = `Chapter ${chapterCount}`
    document.getElementById('chapter-begin-screen').style.display = 'flex'
    document.getElementById('menu-btn').classList.add('visible')
    updatePovButtons()
  } else {
    document.getElementById('intro-screen').style.display = 'block'
    updateIntroScreen()
  }
})

