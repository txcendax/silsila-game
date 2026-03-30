document.getElementById('menu-btn').addEventListener('click', (e) => {
  e.stopPropagation()
  const menu = document.getElementById('menu-div')
  menu.style.display = menu.style.display === 'none' ? 'flex' : 'none'
})

document.getElementById('menu-close-btn').addEventListener('click', () => {
  document.getElementById('menu-div').style.display = 'none'
})

document.getElementById('help-close-btn').addEventListener('click', () => {
  document.getElementById('help-div').style.display = 'none'
})

document.getElementById('inventory-close-btn').addEventListener('click', (e) => {
  e.stopPropagation()
  document.getElementById('inventory-div').style.display = 'none'
})

document.getElementById('data-close-btn').addEventListener('click', (e) => {
  e.stopPropagation()
  document.getElementById('data-div').style.display = 'none'
})

function closePopupsOnOutsideClick(e) {
  const menu = document.getElementById('menu-div')
  if (menu.style.display !== 'none' && !menu.contains(e.target) && e.target !== document.getElementById('menu-btn')) {
    menu.style.display = 'none'
  }

  const helpDiv = document.getElementById('help-div')
  if (helpDiv.style.display !== 'none' && !helpDiv.contains(e.target)) {
    helpDiv.style.display = 'none'
  }

  const inventoryDiv = document.getElementById('inventory-div')
  if (inventoryDiv.style.display !== 'none' && !inventoryDiv.contains(e.target)) {
    inventoryDiv.style.display = 'none'
  }

  const dataDiv = document.getElementById('data-div')
  if (dataDiv.style.display !== 'none' && !dataDiv.contains(e.target)) {
    dataDiv.style.display = 'none'
  }
}

document.getElementById('chapter-begin-screen').addEventListener('click', closePopupsOnOutsideClick)
document.getElementById('chapter-screen').addEventListener('click', closePopupsOnOutsideClick)

const helpSections = [
  { subtitle: 'Overview', text: 'Hi' },
  { subtitle: 'Gameplay', text: 'Bye' }
]

document.getElementById('help-btn').addEventListener('click', (e) => {
  e.stopPropagation()
  document.getElementById('menu-div').style.display = 'none'

  const helpDiv = document.getElementById('help-div')

  helpDiv.querySelectorAll('.help-section').forEach(el => el.remove())
  document.getElementById('help-title').textContent = 'Instructions'

  helpSections.forEach(section => {
    const subtitle = document.createElement('h2')
    subtitle.className = 'help-section help-subtitle'
    subtitle.textContent = section.subtitle

    const text = document.createElement('p')
    text.className = 'help-section help-text'
    text.textContent = section.text

    helpDiv.appendChild(subtitle)
    helpDiv.appendChild(text)
  })

  helpDiv.classList.remove('help-intro')
  helpDiv.style.display = 'flex'
  void helpDiv.offsetWidth
  helpDiv.classList.add('help-intro')
})

const inventoryItems = {
  sarika: [
    { name: 'Invitation', description: 'A mysterious invitation', image: 'assets/images/inventory/invitation.png', unlocked: false},
    { name: 'Prophecy', description: 'A prophecy from the Academy', image: 'assets/images/inventory/prophecy.png', unlocked: false}
  ],
  azhar: [
    { name: 'Invitation', description: 'A mysterious invitation', image: 'assets/images/inventory/invitation.png', unlocked: false},
    { name: 'Prophecy', description: 'A prophecy from the Academy', image: 'assets/images/inventory/prophecy.png', unlocked: false}
  ],
  ishan: [
    { name: 'Invitation', description: 'A mysterious invitation', image: 'assets/images/inventory/invitation.png', unlocked: false},
    { name: 'Prophecy', description: 'A prophecy from the Academy', image: 'assets/images/inventory/prophecy.png', unlocked: false}
  ],
  hashem: [
    { name: 'Invitation', description: 'A mysterious invitation', image: 'assets/images/inventory/invitation.png', unlocked: false},
    { name: 'Prophecy', description: 'A prophecy from the Academy', image: 'assets/images/inventory/prophecy.png', unlocked: false}
  ],
  sefa: [
    { name: 'Invitation', description: 'A mysterious invitation', image: 'assets/images/inventory/invitation.png', unlocked: false},
    { name: 'Prophecy', description: 'A prophecy from the Academy', image: 'assets/images/inventory/prophecy.png', unlocked: false}
  ]
}

function switchInventoryTab(id) {
  document.querySelectorAll('.inv-tab').forEach(t => t.classList.toggle('active', t.dataset.id === id))
  document.getElementById('inventory-div').className = id

  const content = document.getElementById('inventory-content')
  content.innerHTML = ''

  const grid = document.createElement('div')
  grid.className = 'inventory-grid'

  const items = inventoryItems[id] || []
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div')
    cell.className = 'inventory-cell'
    if (items[i] && items[i].unlocked) {
      const img = document.createElement('img')
      img.src = items[i].image
      img.alt = items[i].description
      cell.appendChild(img)

      if (items[i].description) {
        const tooltip = document.createElement('div')
        tooltip.className = 'inv-tooltip'
        tooltip.textContent = items[i].description
        cell.appendChild(tooltip)

        cell.addEventListener('mouseenter', () => {
          const rect = cell.getBoundingClientRect()
          cell.style.setProperty('--inv-tip-x', `${rect.left + rect.width / 2}px`)
          cell.style.setProperty('--inv-tip-y', `${rect.top - 8}px`)
        })
      }
    }
    grid.appendChild(cell)
  }

  content.appendChild(grid)
}

document.querySelectorAll('.inv-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.stopPropagation()
    switchInventoryTab(tab.dataset.id)
  })
})

document.getElementById('inventory-div').addEventListener('click', (e) => {
  e.stopPropagation()
})

function renderDataTab(character) {
  const content = document.getElementById('data-content')
  content.innerHTML = ''

  const bulletList = items => items.map(v =>
    `<span class="cs-bullet">• ${v.redacted ? `<span class="cs-redacted">${v.value}</span>` : v.value}</span>`
  ).join('')

  const redactableList = items => items.map(v =>
    v.redacted ? `<span class="cs-redacted">${v.value}</span>` : v.value
  ).join(', ')

  const tooltip = (value, desc) =>
    `${value} <span class="cs-tooltip" data-tooltip="${desc}">ⓘ</span>`

  const sections = [
    {
      title: 'General',
      rows: [
        `Age: ${character.gen_info.age}`,
        `Gender: ${character.gen_info.gender}`,
        `Kingdom: ${tooltip(character.gen_info.kingdom.value, character.gen_info.kingdom.description)}`,
        `Ethnicity: ${character.gen_info.ethnicity}`,
        `Languages: ${character.gen_info.languages.join(', ')}`,
        `Residence: ${tooltip(character.gen_info.residence.value, character.gen_info.residence.description)}`,
        `Occupation: ${character.gen_info.occupation}`,
      ]
    },
    {
      title: 'Physical Traits',
      rows: [
        `Height: ${character.phys_info.height}`,
        `Skin Color: ${character.phys_info.skin_color}`,
        `Hair Color: ${character.phys_info.hair_color}`,
        `Eye Color: ${character.phys_info.eye_color}`,
        `Accessories: ${character.phys_info.accessories.join(', ')}`,
      ]
    },
    {
      title: 'Personality Traits',
      rows: [
        `MBTI: ${character.personality_info.mbti}`,
        `Enneagram: ${character.personality_info.enneagram}`,
        `Moral Alignment: ${character.personality_info.moral_alignment}`,
        `Virtues: ${redactableList(character.personality_info.virtues)}`,
        `Vices: ${redactableList(character.personality_info.vices)}`,
        `Goals: ${redactableList(character.personality_info.goals)}`,
        `Quirks: ${character.personality_info.quirks.join(', ')}`,
      ]
    },
    {
      title: 'Biography',
      rows: [
        `Overview:<br>${bulletList(character.backstory_info.overview)}`,
        `Wounds:<br>${bulletList(character.backstory_info.wounds)}`,
        `Fears:<br>${bulletList(character.backstory_info.fears)}`,
        `Beliefs:<br>${bulletList(character.backstory_info.beliefs)}`,
        `Secrets:<br>${bulletList(character.backstory_info.secrets)}`,
      ]
    },
    {
      title: 'Skills',
      rows: [
        `Dominant Hand: ${character.skills_info.dominant_hand}`,
        `Field of Study: ${tooltip(character.skills_info.magic_realm.value, character.skills_info.magic_realm.description)}`,
        `Powers:<br>${character.skills_info.powers
          .filter(p => p.unlocked)
          .map(p => `<span class="cs-bullet${p.selected ? '' : ' data-power-unselected'}">• ${p.name} <span class="cs-tooltip" data-tooltip="${p.description}">ⓘ</span></span>`)
          .concat(
            character.skills_info.powers
              .filter(p => !p.unlocked)
              .map(p => `<span class="cs-bullet">• <span class="cs-redacted">${p.name}</span></span>`)
          )
          .join('')
        }`,
      ]
    }
  ]

  sections.forEach(section => {
    const h2 = document.createElement('h2')
    h2.className = 'data-section-title'
    h2.textContent = section.title
    content.appendChild(h2)

    section.rows.forEach(row => {
      const p = document.createElement('p')
      p.className = 'data-row'
      p.innerHTML = row
      content.appendChild(p)
    })
  })

  content.querySelectorAll('.cs-tooltip').forEach(tip => {
    tip.addEventListener('mouseenter', () => {
      const rect = tip.getBoundingClientRect()
      tip.style.setProperty('--tooltip-x', rect.left + rect.width / 2 + 'px')
      tip.style.setProperty('--tooltip-y', rect.top + 'px')
    })
  })
}

function switchDataTab(id) {
  document.querySelectorAll('.data-tab').forEach(t => t.classList.toggle('active', t.dataset.id === id))
  const content = document.getElementById('data-content')
  content.className = id
  document.getElementById('data-div').className = id
  const character = characters.find(c => c.id === id)
  if (character) renderDataTab(character)
  else content.innerHTML = ''
}

document.querySelectorAll('.data-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.stopPropagation()
    switchDataTab(tab.dataset.id)
  })
})

document.getElementById('data-div').addEventListener('click', (e) => {
  e.stopPropagation()
})

document.getElementById('data-btn').addEventListener('click', (e) => {
  e.stopPropagation()
  document.getElementById('menu-div').style.display = 'none'
  switchDataTab('sarika')
  document.getElementById('data-div').style.display = 'flex'
})

document.getElementById('inventory-btn').addEventListener('click', (e) => {
  e.stopPropagation()
  document.getElementById('menu-div').style.display = 'none'
  switchInventoryTab('sarika')
  document.getElementById('inventory-div').style.display = 'flex'
})

document.getElementById('exit-btn').addEventListener('click', () => {
  const state = {
    chapter: chapterCount,
    chapterChoices: chapterChoices,
    storyChoices: storyChoices,
    inventoryItems: inventoryItems,
    characters: characters
      .filter(c => confirmedIds.has(c.id))
      .map(c => ({
        id: c.id,
        name: c.name,
        selectedPowers: c.skills_info.powers
          .filter(p => p.selected)
          .map(p => ({ id: p.id, name: p.name }))
      }))
  }

  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'silsila-save.json'
  a.click()
  URL.revokeObjectURL(url)
})
