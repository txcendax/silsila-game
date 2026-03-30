var chapterData = {
  id: "sarika-intro",
  startNode: "start",
  unlocks: [
    { character: 'sarika', itemName: 'Invitation' }
  ],
  nodes: {
    "start": {
      character: "sarika",
      text: "The stars are hysterical tonight. You can tell from their sporadic bursts of twinkling, scattered across the expanse of black. Even those within a constellation are at odds tonight.\n\“Not right now,\” you mutter under your breath.\nEven if the stars heard you, they keep at their incessant flashing. Your eyebrow twitches. You shield the side of your face exposed to the window in hopes of rendering yourself oblivious to the stars’ frenzy. You have more pressing matters to address.\nYou sit at a large teak desk, your workspace in complete disarray. Loose-leaf papers and leather-bound tomes are strewn haphazardly across the surface. Although the chaos might induce anxiety in another, the mess helps you focus.\nYou pick up...",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [
        { text: "a red tome.", leadsTo: "node2" },
        { text: "a stack of papers.", leadsTo: "node3" },
      ]
    },
    "node2": {
      character: "sarika",
      text: "Inscribed on the cover of the volume are the words \“A Study of the Continuum.\” You flip the tome open to the first page, where the same thesis title is printed in bold. Beneath it, the ink is smudged, leaving the former student’s name a whisper of the past.\nThumbing through the pages, your eyes flit over familiar equations and theorems. You pause at the derivation of a linear coordinate transformation, hoping to glean new insights. Only when the characters begin peeling off the page and swimming in your vision do you realize that you’ve been mulling for too long.",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "node4"
    },
    "node3": {
      character: "sarika",
      text: "You glance over the first sheet in the stack. Written in cursive at the top is \“Meeting Notes,\” followed by today’s date. Skimming the rest of the paper, you struggle to decipher your own scrawled handwriting. Only the words \“Advisor says...\” and \“Next steps\” are legible.\nSetting aside the sheet of paper, you thumb through the rest of the stack. The other loose-leaf papers have similar scrawled notes, annotated with red question marks in the margins. As you realize the detailed next steps on each page have been stagnant for months, a tight pang seizes your chest.",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "node4"
    },
    "node4": {
      character: "sarika",
      text: "Sighing, you dig through your messenger bag and retrieve your compact mirror. Your hair is disheveled, frizzy from static and barely contained by your barrette. Skipping lunch has made you sallow, full cheeks now sunken. But the most concerning part of your appearance are your bloodshot eyes, their tiny vessels on the verge of bursting.\nYour self-deprecating is cut short by a chorus of laughter that ripples through the air. You follow the sound to a clique of students, huddled around a desk across from her. They all don the same white shirt and black trousers as her, but while you still wear your brown suede blazer, most of them have discarded theirs.\nYou must’ve been staring too long because one of the students, a tall woman with sleek black hair, meets your gaze. Upon recognizing you, an unmistakable look of panic flashes across the woman’s face, and she quickly bows her head. When she straightens up, she offers you a courteous yet obviously practiced smile — the smile subjects reserved for their royalty.\nYou...",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [
        { text: "return the smile.", leadsTo: "node5" },
        { text: "look away.", leadsTo: "node6" }
      ]
    },
    "node5": {
      character: "sarika",
      text: "You draw your lips into a tight-lipped smile and nod at the woman in acknowledgment. When she eventually looks away, there’s a tough lump in your throat. Returning to your papers, you—",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "node7"
    },
    "node6": {
      character: "sarika",
      text: "Feeling a twinge of pain in your temple, you avert her gaze. You deliberately keep your eyes glued to your papers, hoping it appears like you’re doing important research. In fact, there’s no need to pretend—",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "node7"
    },
    "node7": {
      character: "sarika",
      text: "A deafening boom reverberates through the air, rattling the building. The initial shock elicits yelps from the students, but they quickly morph into confused murmurs.\n\“Over here!\” a man near an expansive picture window yells, gesturing for the others to join him. The students abandon their desks and flock by the window.\nYou wince as you rub your knee, having knocked it against the desk during the commotion. Slowly rising to your feet, you trudge over to the crowd. You expertly weave through the swarm of bodies, unintentionally jostling other students. They begin to complain, but hold their tongue when they realize it’s you. At last, you make it to the front, bracing your hands against the glass to avoid being completely smushed.\nThe sight that awaits is appalling. In the middle of the sky, two pulsing orbs of energy wrestle for dominance. Neither the blue nor the yellow orb are able to overpower the other, yet they refuse to concede. Sparks fly as the struggle persists, crackling as they rain down. The scene would be reminiscent of fireworks, if not for the cavalries.\nTo the left, a troop of soldiers marches toward you. They hoist navy blue flags, silver emblems glinting under the moonlight. To the right, an opposing unit urges their mounts forward. They too proudly bear flags, yellow silk and gold crests shining blindingly like the sun.\nThe stars were trying to warn you.\nYou...",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [
        { text: "freeze.", leadsTo: "node8" },
        { text: "leave the crowd.", leadsTo: "node9" }
      ]
    },
    "node8": {
      character: "sarika",
      text: "You stagger back, bumping into the student behind you. They go to steady you, and you stand with your feet planted on the floor, unmoving.\nWhen you finally snap out of your momentary daze, you push your way out of the crowd. You stare at the ground as you move, blinking back the tears welling in your eyes. By the time you’re free from the throng, the taste of salt has flooded your mouth.",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "end"
    },
    "node9": {
      character: "sarika",
      text: "You stagger back, bumping into the student behind you. They go to steady you, but you’re already pushing your way out of the crowd. You stare at the ground as you move, blinking back the tears welling in your eyes. By the time you’re free from the throng, the taste of salt has flooded your mouth.",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "end"
    },
    "end": {
      character: "sarika",
      text: "Rushing back to your desk, you gather a handful of papers and shove them into your bag. You wipe your tears with the back of your hand before stacking the tomes you had borrowed. When you grab the last item off the desk, you pause.\nIt’s an unfamiliar envelope, marked by a red seal. When you peer closer, you’re able to make out the design. It’s the Academy crest.\nEyebrows furrowing, you flip the envelope over. The letter is addressed to “Miss Sarika Nakshatri,” inked in graceful calligraphy font. But when you look for the sender name, it’s nowhere to be found.\n\[INVITATION has been added to your inventory.\]\n\[To view your inventory, please select Menu > Inventory.\]",
      canSwitch: false,
      lockedPerspectives: [],
      choices: []
    }
  }
}