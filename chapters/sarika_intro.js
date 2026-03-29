var chapterData = {
  id: "sarika-intro",
  startNode: "start",
  nodes: {
    "start": {
      character: "sarika",
      text: "The stars were hysterical tonight. They were often boisterous but, at this moment, there was a certain distress among them. Sarika could tell from their sporadic bursts of twinkling, scattered unevenly across the black expanse. Even those within a constellation were at odds with each other.\n\"Not right now,\” Sarika muttered under her breath.\nEven if the stars heard her, they kept at their incessant flashing. Her eyebrow twitched. She shielded the side of her face exposed to the window in hopes of rendering herself oblivious to the stars’ frenzy. There were more pressing matters to address.\nSarika sat alone at a large teak desk, poring over a leather-bound tome. Her workspace was in complete disarray, loose-leaf papers and volumes strewn haphazardly such that no semblance of a tabletop remained. Although the mess might induce anxiety in another, the chaos helped her focus.\nAs she thumbed through the frayed pages, her eyes flitted over familiar equations and theorems. She paused at the derivation of a linear coordinate transformation, hoping to glean new insights. Only when the characters began peeling off the page and swimming in her vision did she realize that she’d been mulling for too long.\nA defeated groan escaped Sarika’s lips as she tossed the tome back onto the desk. She reclined precariously in her seat, her mind racing with innumerable thoughts. The sun had set and the moon had risen once again, yet she was no further than the day before. Time was slipping from her grasp.\nHer chair tottered a bit too far back, and she grabbed the desk to steady herself. Once she was no longer at risk of toppling backwards, Sarika reached for her cup of coffee. She brought the mug up to her lips but only a few drops dribbled into her mouth.",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [
        { text: "Slam the table", leadsTo: "node2" },
        { text: "Take a deep breath", leadsTo: "node3" },
      ]
    },
    "node2": {
      character: "sarika",
      text: "SLAM",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "node4"
    },
    "node3": {
      character: "sarika",
      text: "BREATHE",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [],
      leadsTo: "node4"
    },
    "node4": {
      character: "sarika",
      text: "CONT",
      canSwitch: false,
      lockedPerspectives: [],
      choices: [
        { text: "[ Continue ]", leadsTo: "end" }
      ]
    },
    "end": {
      character: "sarika",
      text: "[ End of chapter 1. ]",
      canSwitch: false,
      lockedPerspectives: [],
      choices: []
    }
  }
}