const characters = [
  {
    id: "sarika",
    name: "Sarika Nakshatri",
    symbol: "star",

    gen_info: {
      title: "First Princess of Taralaya",
      age: 22,
      gender: "Female",
      kingdom: { value: "Taralaya", description: "The Star Kingdom" },
      ethnicity: "Taaran",
      residence: { value: "Althara", description: "Neutral Territory" },
      occupation: "Fourth-year Student at Silsila Academy",
    },

    phys_info: {
        height: "62 inches",
        eye_color: "Gray speckled with silver",
        hair_color: "Prussian blue",
        skin_color: "Golden brown",
        accessories: [ "Gold jimikki earrings", "gold necklace with teardrop sapphire pendant", "gold bangles" ],
    },

    personality_info: {
        mbti: "INFP",
        enneagram: "6 (The Loyalist)",
        moral_alignment: "Chaotic Good",
        virtues: [ { value: "Ambitious", redacted: false }, { value: "determined", redacted: false }, { value: "empathetic", redacted: false }, { value: "cautious", redacted: true }, { value: "socially aware", redacted: true } ],
        vices: [ { value: "Perfectionist", redacted: false }, { value: "tempermental", redacted: false }, { value: "withdrawn", redacted: false }, { value: "cynical", redacted: true }, { value: "vindictive", redacted: true } ],
        goals: [ { value: "Complete her research thesis", redacted: false }, { value: "find a sense of love and belonging among others", redacted: true }, { value: "avenge her dead parental figure", redacted: true } ],
        quirks: [ "Writes reminder notes on her arm", "argues with herself under her breath" ],
    },

    skills_info: {
        dominant_hand: "Right",
        magic_realm: { value: "Kaalithra", description: "The Realm of Space and Time" },
        powers: [
            {
                id: "local_time_freeze",
                name: "Localized Temporal Freeze",
                description: "Freeze time in a localized area.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "gen_time_freeze",
                name: "Generalized Temporal Freeze",
                description: "Freeze time in a generalized manner.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "local_time_shift",
                name: "Localized Temporal Shift",
                description: "Fast forward or rewind time in a localized area.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "gen_time_shift",
                name: "Generalized Temporal Shift",
                description: "Fast forward or rewind time in a generalized manner.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "teleport",
                name: "Translocation",
                description: "Teleport within a limited radius.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "displace",
                name: "Displacement",
                description: "Displace objects within a limited radius.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "space_travel",
                name: "Planar Transit",
                description: "Travel to and from parallel dimensions.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "time_travel",
                name: "Temporal Transit",
                description: "Travel backward and forward in time in the same dimension.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "alter_present",
                name: "Present Bifurcation",
                description: "Create a branched timeline from the present.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "alter_past_future",
                name: "Temporal Bifurcation",
                description: "Create a branched timeline from the past or future.",
                unlocked: false,
                selected: false,
            }, 
        ]
    },

    backstory_info: {
        overview:  [ { value: "First and only princess of Taralaya", redacted: false }, { value: "Lives in the Royal Palace with her mother, father, and two younger brothers", redacted: false }, { value: "Befriended an older woman who was a refugee from Kohmetan", redacted: true }, { value: "Watched her only parental figure be executed as part of the war effort", redacted: true }, { value: "Researches space- and time-travel at Silsila Academy of Magic", redacted: false } ],
        wounds: [ { value: "Losing a loved one", redacted: true }, { value: "Raising siblings as a child herself", redacted: true}, { value: "Being raised by cruel parents", redacted: true } ],
        fears:  [ { value: "A loved one dying", redacted: true }, { value: "Trusting others", redacted: true}, { value: "Not being worthy of love", redacted: true } ],
        beliefs: [ { value: "If I avenge my loved one, I'll be at peace", redacted: true }, { value: "I have to do this alone", redacted: true}, { value: "I am not worthy of love", redacted: true } ],
        secrets: [ { value: "Her loved one was executed because of her disobedience", redacted: true } ],
    },
  },

  {
    id: "azhar",
    name: "Azhar al-Qamar",
    symbol: "moon",

    gen_info: {
      title: "Second Prince of Qamaristan",
      age: 23,
      gender: "Male",
      kingdom: { value: "Qamaristan", description: "The Moon Kingdom" },
      ethnicity: "Qamari",
      residence: { value: "Althara", description: "Neutral Territory" },
      occupation: "Fifth-year Student at Silsila Academy",
    },

    phys_info: {
        height: "73 inches",
        eye_color: "Icy blue",
        hair_color: "Platinum",
        skin_color: "Honey beige",
        accessories: [ "Checkered navy blue handkerchief" ],
    },

    personality_info: {
        mbti: "ISTJ",
        enneagram: "1 (The Reformer)",
        moral_alignment: "Lawful Neutral",
        virtues: [ { value: "Logical", redacted: false }, { value: "meticulous", redacted: false }, { value: "patient", redacted: false }, { value: "perceptive", redacted: true }, { value: "virtuous", redacted: true } ],
        vices: [ { value: "Skeptical", redacted: false }, { value: "paranoid", redacted: false }, { value: "cynical", redacted: true }, { value: "judgmental", redacted: true }, { value: "hostile", redacted: true } ],
        goals: [ { value: "Doing the right thing", redacted: false }, { value: "righting a deep wrong", redacted: true }, { value: "overcoming abuse", redacted: true } ],
        quirks: [ "Always arrives early", "avoids physical contact with others" ],
    },

    skills_info: {
        dominant_hand: "Left",
        magic_realm: { value: "Mantraya", description: "The Realm of Mind and Being" },
        powers: [
            {
                id: "read_emotions",
                name: "Emotional Resonance",
                description: "Gain access to the emotions of a target.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "read_thoughts",
                name: "Cognitive Resonance",
                description: "Gain limited access to the thoughts of a target.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "read_soul",
                name: "Soul Resonance",
                description: "Gain access to the strengths and weaknesses of a target's soul.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "detect_lies",
                name: "Verity Detection",
                description: "Detect whether a target is telling the truth or lying.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "see_illusions",
                name: "Illusory Penetration",
                description: "Strip away constructed illusions to perceive the truth beneath.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "cast_illusions",
                name: "IIlusory Projection",
                description: "Construct illusions to conceal the truth beneath.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "body_control",
                name: "Physical Compulsion",
                description: "Control a target's physical actions through verbal direction.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "mind_control",
                name: "Psychic Compulsion",
                description: "Control a target's mental state through verbal direction.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "grow_emotions",
                name: "Emotional Transference",
                description: "Donate your emotions to amplify a target's feelings.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "shrink_emotions",
                name: "Emotional Absorption",
                description: "Accept a target's emotions to shrink their feelings.",
                unlocked: false,
                selected: false,
            }, 
        ]
    },

    backstory_info: {
        overview:  [ { value: "Second prince of Qamaristan", redacted: false }, { value: "Lives in the Royal Palace with his father, mother, older brother, and two younger sisters", redacted: false }, { value: "His older brother is chronically ill, making him the heir to the throne", redacted: true}, { value: "His father was extremely strict and abusive to prepare him to inherit the throne", redacted: true }, { value: "Researches emotions and thoughts at Silsila Academy of Magic", redacted: false } ],
        wounds: [ { value: "Growing up with a sibling's chronic illness", redacted: true }, { value: "Indoctrination", redacted: true}, { value: "Victim of abuse", redacted: true } ],
        fears:  [ { value: "Being returned to an abusive environment", redacted: true }, { value: "Being capable of harming others", redacted: true}, { value: "Becoming what he hates", redacted: true } ],
        beliefs: [ { value: "The world is cruel", redacted: true }, { value: "Power corrupts all", redacted: true}, { value: "I must hide myself to avoid punishment", redacted: true } ], 
        secrets: [ { value: "Doesn't support his kingdom's ideals and beliefs of superiority", redacted: true } ],
    },
  },

  {
    id: "ishan",
    name: "Ishan Garhia",
    symbol: "sun",

    gen_info: {
      title: "Third Prince of Suryagarh",
      age: 23,
      gender: "Male",
      kingdom: { value: "Suryagarh", description: "The Sun Kingdom" },
      ethnicity: "Suryi",
      residence: { value: "Althara", description: "Neutral Territory" },
      occupation: "Fifth-year Student at Silsila Academy",
    },

    phys_info: {
        height: "70 inches",
        eye_color: "Dark brown",
        hair_color: "Amber",
        skin_color: "Toasted brown",
        accessories: [ "Gold-rimmed bifocal lenses", "gold lobe stud earrings", "gold low helix ring earrings" ],
    },

    personality_info: {
        mbti: "ENTP",
        enneagram: "8 (The Challenger)",
        moral_alignment: "Chaotic Neutral",
        virtues: [ { value: "Extroverted", redacted: false }, { value: "bold", redacted: false }, { value: "adventurous", redacted: false }, { value: "protective", redacted: true }, { value: "leader", redacted: true } ],
        vices: [ { value: "Callous", redacted: false }, { value: "rebellious", redacted: false }, { value: "haughty", redacted: false }, { value: "stubborn", redacted: true }, { value: "rebellious", redacted: true } ],
        goals: [ { value: "Gain more influence", redacted: false }, { value: "being acknowledged by family", redacted: true }, { value: "protecting his younger sister", redacted: true } ],
        quirks: [ "Finishes other people's sentences for them", "laughs at inappropriate times or places" ],
    },

    skills_info: {
        dominant_hand: "Right",
        magic_realm: { value: "Nayadha", description: "The Realm of Life and Light" },
        powers: [
            {
                id: "heal_wounds",
                name: "Wound Mending",
                description: "Close small cuts and bruises.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "heal_pains",
                name: "Pain Relief",
                description: "Ease soreness and muscle strain.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "coagulate_blood",
                name: "Blood Sealing",
                description: "Accelerate clotting to stop bleeding.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "immunity",
                name: "Immunity Shield",
                description: "Create a temporary protective state from physical harm.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "restore_others",
                name: "Vitality Restoration",
                description: "Channel energy outward to restore a target's strength and endurance.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "metabolic_acceleration",
                name: "Metabolic Acceleration",
                description: "Channel energy inward to restore your own stamina and relieve your fatigue.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "mend_muscles",
                name: "Muscle Mending",
                description: "Repair torn or damaged muscle fibers.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "mend_bones",
                name: "Bone Mending",
                description: "Fuse fractured or cracked bones back together.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "enhance_senses",
                name: "Sensory Amplification",
                description: "Temporarily sharpen a target's five senses. ",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "repair_senses",
                name: "Sensory Restoration",
                description: "Temporarily restore diminished or absent senses to functional capacity.",
                unlocked: false,
                selected: false,
            }, 
        ]
    },

    backstory_info: {
        overview:  [ { value: "Third prince of Suryagarh", redacted: false }, { value: "Lives in the Royal Palace with his father, mother, older half-brothers, and younger sister", redacted: false }, { value: "His mother is the second queen who stripped his older half-brothers' mother of her title", redacted: true}, { value: "He has a soft spot for his younger sister who is visually impaired", redacted: true }, { value: "Researches illnesses and disabilities at Silsila Academy of Magic", redacted: false } ],
        wounds: [ { value: "Growing up with siblings who detested him", redacted: true }, { value: "Being shunned and rejected", redacted: true}, { value: "Being part of a parent's second family", redacted: true } ],
        fears:  [ { value: "Rejection", redacted: true }, { value: "Being insignifcant", redacted: true}, { value: "Being disrespected", redacted: true } ],
        beliefs: [ { value: "People will never see me for who I truly am", redacted: true }, { value: "I must uphold the reputation I've been given to remain important.", redacted: true}, { value: "I don't care what anyone thinks.", redacted: true } ], 
        secrets: [ { value: "Is ashamed of his heritage", redacted: true } ],
    },
  },


  {
    id: "hashem",
    name: "Hashem Kohmarid",
    symbol: "comet",

    gen_info: {
      title: "First Prince of Kohmetan",
      age: 21,
      gender: "Male",
      kingdom: { value: "Kohmetan", description: "The Comet Kingdom" },
      ethnicity: "Kohmaran",
      residence: { value: "Althara", description: "Neutral Territory" },
      occupation: "Third-year Student at Silsila Academy",
    },

    phys_info: {
        height: "75 inches",
        eye_color: "Lilac",
        hair_color: "Tawny brown",
        skin_color: "Yellow beige",
        accessories: [ "Silver lobe stud earrings" ],
    },

    personality_info: {
        mbti: "ENFJ",
        enneagram: "6 (The Loyalist)",
        moral_alignment: "Neutral Good",
        virtues: [ { value: "Friendly", redacted: false }, { value: "gentle", redacted: false }, { value: "humble", redacted: false }, { value: "diplomatic", redacted: true }, { value: "adaptable", redacted: true } ],
        vices: [ { value: "Nervous", redacted: false }, { value: "oversensitive", redacted: false }, { value: "cowardly", redacted: true }, { value: "insecure", redacted: true }, { value: "self-loathing", redacted: true } ],
        goals: [ { value: "Finding a close group", redacted: false }, { value: "being acknowledged by family", redacted: true }, { value: "fitting in", redacted: true } ],
        quirks: [ "Constantly clears his throat", "perspires a lot when nervous" ],
    },

    skills_info: {
        dominant_hand: "Left",
        magic_realm: { value: "Pragna", description: "The Realm of Technology and Progress" },
        powers: [
            {
                id: "interpret_devices",
                name: "Device Reading",
                description: "Instantly interpret the function, structure, and output of any technological system.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "tune_devices",
                name: "Device Calibration",
                description: "Fine-tune mechanical and technological systems to peak efficiency.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "error_devices",
                name: "Device Fault Detection",
                description: "Identify flaws, malfunctions, or vulnerabilities in any technological system.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "innovate",
                name: "Rapid Prototyping",
                description: "Conceive and construct functional technological devices at an accelerated speed.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "calculate",
                name: "Rapid Calculation",
                description: "Process complex mathematical models and simulations at an accelerated speed.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "holograms",
                name: "Holographic Manipulation",
                description: "Generate and reshape holographic projections with precision.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "phase_shift",
                name: "Phase Shifting",
                description: "Transition matter between solid, liquid, and gaseous states.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "atomic_shift",
                name: "Atomic Manipulation",
                description: "Restructure matter by directly controlling its atomic composition.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "fission",
                name: "Controlled Fission",
                description: "Split atomic nuclei within a contained area and release concentrated energy.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "fusion",
                name: "Controlled Fusion",
                description: "Merge atomic nuclei within a contained area and generate intense energy.",
                unlocked: false,
                selected: false,
            }, 
        ]
    },

    backstory_info: {
        overview:  [ { value: "First and sole prince of Kohmetan", redacted: false }, { value: "Lives in the Royal Palace with his father and mother", redacted: false }, { value: "Used to be an orphan in the slums of Kohmetan", redacted: true}, { value: "He is the adoptive child of the king and queen", redacted: true }, { value: "Researches technology and its applications at Silsila Academy of Magic", redacted: false } ],
        wounds: [ { value: "Being raised by neglectful parents", redacted: true }, { value: "Living in the slums as an orphan", redacted: true}, { value: "Being adopted", redacted: true } ],
        fears:  [ { value: "Isolation", redacted: true }, { value: "Being a burden", redacted: true}, { value: "Abandonment", redacted: true } ],
        beliefs: [ { value: "I don't belong anywhere", redacted: true }, { value: "In order to be wanted, I must not disappoint.", redacted: true}, { value: "People will shun me if they know the truth behind my heritage.", redacted: true } ], 
        secrets: [ { value: "Is adopted", redacted: true } ],
    },
  },

   {
    id: "sefa",
    name: "Sefa Hattarun",
    symbol: "eclipse",

    gen_info: {
      title: "First Princess of Hattara",
      age: 20,
      gender: "Female",
      kingdom: { value: "Hattara", description: "The Eclipse Kingdom" },
      ethnicity: "Hattari",
      residence: { value: "Althara", description: "Neutral Territory" },
      occupation: "Second-year Student at Silsila Academy",
    },

    phys_info: {
        height: "67 inches",
        eye_color: "Garnet red",
        hair_color: "Black with white on the underside",
        skin_color: "Almond beige",
        accessories: [ "Silver bracelet with an eclipse pendant" ],
    },

    personality_info: {
        mbti: "INTJ",
        enneagram: "9 (The Peacemaker)",
        moral_alignment: "True Neutral",
        virtues: [ { value: "Proper", redacted: false }, { value: "disciplined", redacted: false }, { value: "calm", redacted: false }, { value: "loyal", redacted: true }, { value: "spiritual", redacted: true } ],
        vices: [ { value: "Antisocial", redacted: false }, { value: "subservient", redacted: false }, { value: "prejudiced", redacted: true }, { value: "fanatical", redacted: true }, { value: "gullible", redacted: true } ],
        goals: [ { value: "Gaining control over her life", redacted: false }, { value: "discovering her true self", redacted: true }, { value: "achieving spiritual enlightenment", redacted: true } ],
        quirks: [ "Has long but well-kept nails", "performs daily protection rituals" ],
    },

    skills_info: {
        dominant_hand: "Right",
        magic_realm: { value: "Asvara", description: "The Realm of Elements and Nature" },
        powers: [
            {
                id: "forge_metals",
                name: "Metal Forging",
                description: "Shape and mold metals into a target object.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "find_purity",
                name: "Purity Assessment",
                description: "Instantly determine the elemental composition and purity level of any metal.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "remove_trace",
                name: "Metal Refinement",
                description: "Strip impurities and trace elements from metal to achieve higher purity.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "find_ores",
                name: "Ore Detection",
                description: "Sense the presence and location of metallic ores within the surrounding environment.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "extract_ores",
                name: "Ore Extraction",
                description: "Draw metallic ores directly from the surrounding environment",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "electric_passage",
                name: "Conductivity Control",
                description: "Control the flow of electric current through any metallic surface or object.",
                unlocked: true,
                selected: false,
            }, 
            {
                id: "electric_field",
                name: "Electric Field Manipulation",
                description: "Generate and reshape electromagnetic fields in the surrounding environment.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "magnetic_field",
                name: "Magnetic Field Manipulation",
                description: "Control the direction and intensity of magnetic forces around metallic objects.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "allow_alloy",
                name: "Alloy Synthesis",
                description: "Fuse two or more metals together at a molecular level to create composite materials.",
                unlocked: false,
                selected: false,
            }, 
            {
                id: "prevent_alloy",
                name: "Alloy Resistance",
                description: "Prevent the bonding of metallic elements and maintain separation at a molecular level.",
                unlocked: false,
                selected: false,
            }, 
        ]
    },

    backstory_info: {
        overview:  [ { value: "First and sole prince of Hattara", redacted: false }, { value: "Lives in the Royal Palace with her father, mother, twin brother, and younger brother", redacted: false }, { value: "Raised in a strict, religious family", redacted: true}, { value: "Indoctrinated to follow her kingdom's religion without question", redacted: true }, { value: "Researches manipulation of metal and electricity at Silsila Academy of Magic", redacted: false } ],
        wounds: [ { value: "Being raised by overprotective parents", redacted: true }, { value: "Growing up repressed", redacted: true}, { value: "Growing up in a cult", redacted: true } ],
        fears:  [ { value: "Being alone", redacted: true }, { value: "Criticism", redacted: true}, { value: "Being unable to trust her own mind", redacted: true } ],
        beliefs: [ { value: "My religion is the one true religion.", redacted: true }, { value: "Those who do not believe in my religion are misled.", redacted: true}, { value: "My sole duty is to follow the wishes of my gods.", redacted: true } ], 
        secrets: [ { value: "Is questioning her loyalty to her kingdom", redacted: true } ],
    },
  },
]