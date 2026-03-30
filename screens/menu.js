document.getElementById('menu-btn').addEventListener('click', () => {
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

document.getElementById('chapter-begin-screen').addEventListener('click', (e) => {
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
})

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

  window.close()
})
