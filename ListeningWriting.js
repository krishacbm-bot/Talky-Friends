// sentences.js — TalkyLab Read & Speak
// Structure: SENTENCES[grade][level] = array of 5 strings
// Grades: jr_kg, sr_kg, 1–12
// Levels: easy, medium, hard

const SENTENCES = {
  jr_kg: {
    easy: [
      "The cat is big.",
      "I see a dog.",
      "A red ball.",
      "I like milk.",
      "The sun is hot."
    ],
    medium: [
      "The cat is very big.",
      "I can see a dog run.",
      "The red ball is round.",
      "I like cold milk a lot.",
      "The sun is hot and bright."
    ],
    hard: [
      "The big cat sits on the mat.",
      "I can see the dog run fast.",
      "The round red ball is mine.",
      "I like to drink cold milk.",
      "The bright sun makes me warm."
    ]
  },
  sr_kg: {
    easy: [
      "I have a blue pen.",
      "The bird can fly.",
      "She has a doll.",
      "We eat food.",
      "He plays ball."
    ],
    medium: [
      "I have a small blue pen.",
      "The little bird can fly high.",
      "She has a pretty doll.",
      "We eat good food every day.",
      "He plays ball with his friends."
    ],
    hard: [
      "I have a small blue pen in my bag.",
      "The little bird can fly very high in the sky.",
      "She has a pretty doll with a red dress.",
      "We eat healthy food every single day.",
      "He loves to play ball with all his friends."
    ]
  },
  1: {
    easy: [
      "The dog ran fast.",
      "I drink water.",
      "She has a bag.",
      "My name is Sam.",
      "We go to school."
    ],
    medium: [
      "The dog ran very fast today.",
      "I drink water every morning.",
      "She carries a big bag to school.",
      "My name is Sam and I am seven.",
      "We go to school by bus each day."
    ],
    hard: [
      "The big brown dog ran very fast down the road.",
      "I drink a glass of cold water every morning.",
      "She always carries her heavy bag to school.",
      "My name is Sam and I am seven years old.",
      "Every morning we go to school by the yellow bus."
    ]
  },
  2: {
    easy: [
      "Birds fly in the sky.",
      "Fish swim in water.",
      "Flowers are pretty.",
      "I love my mother.",
      "We play in the park."
    ],
    medium: [
      "Colorful birds fly in the blue sky.",
      "Small fish swim quickly in the water.",
      "The flowers in the garden are very pretty.",
      "I love my mother very much.",
      "We play together in the park after school."
    ],
    hard: [
      "Colorful birds fly high in the bright blue sky.",
      "Many small fish swim quickly in the clear water.",
      "The beautiful flowers in the garden bloom every spring.",
      "I love my kind and caring mother very much.",
      "Every evening we play happily together in the nearby park."
    ]
  },
  3: {
    easy: [
      "The sky is blue.",
      "Trees give us shade.",
      "I read a book.",
      "She runs every day.",
      "Cats like to sleep."
    ],
    medium: [
      "The clear sky is bright blue today.",
      "Big trees give us cool shade in summer.",
      "I like to read a new book every week.",
      "She goes for a run every morning.",
      "Cats love to sleep in warm sunny spots."
    ],
    hard: [
      "The clear sky is a beautiful shade of bright blue today.",
      "Large trees give us cool and comfortable shade during summer.",
      "I enjoy reading an interesting new book every single week.",
      "She wakes up early and goes for a run every morning.",
      "Most cats love to curl up and sleep in warm sunny spots."
    ]
  },
  4: {
    easy: [
      "The farmer grows vegetables.",
      "We save water.",
      "Stars shine at night.",
      "She helps her mother.",
      "Books give us knowledge."
    ],
    medium: [
      "The hardworking farmer grows fresh vegetables on his farm.",
      "It is important that we save water every day.",
      "Bright stars shine beautifully in the sky at night.",
      "She always helps her mother with the household chores.",
      "Good books give us a great deal of knowledge."
    ],
    hard: [
      "The hardworking farmer wakes up early to grow fresh vegetables on his farm.",
      "It is our responsibility to save water and use it wisely every day.",
      "On a clear night, bright stars shine beautifully across the entire sky.",
      "She willingly helps her mother complete all the household chores every evening.",
      "Reading good books regularly gives us a great deal of useful knowledge."
    ]
  },
  5: {
    easy: [
      "Plants need sunlight to grow.",
      "Honesty is the best policy.",
      "The earth moves around the sun.",
      "We should keep our city clean.",
      "Exercise keeps our body healthy."
    ],
    medium: [
      "Green plants need adequate sunlight and water to grow well.",
      "Honesty is always the best policy in life.",
      "The earth completes one full move around the sun each year.",
      "Every citizen should do their part to keep the city clean.",
      "Regular exercise helps us keep our body fit and healthy."
    ],
    hard: [
      "Green plants require adequate sunlight, water, and nutrients in the soil to grow well.",
      "Practising honesty in all situations is truly the best policy in life.",
      "The earth takes approximately three hundred and sixty-five days to revolve around the sun.",
      "Every responsible citizen should actively do their part to keep the city clean and hygienic.",
      "Engaging in regular physical exercise helps us maintain a fit, healthy, and active body."
    ]
  },
  6: {
    easy: [
      "Water covers most of the earth.",
      "The moon reflects sunlight.",
      "Gravity pulls objects downward.",
      "Pollution harms living things.",
      "Forests are home to wildlife."
    ],
    medium: [
      "Vast oceans and seas cover most of the earth's surface.",
      "The moon does not produce its own light but reflects sunlight.",
      "The force of gravity pulls all objects downward toward the earth.",
      "Air and water pollution causes serious harm to all living things.",
      "Dense forests and jungles are home to a wide variety of wildlife."
    ],
    hard: [
      "Vast oceans, seas, and rivers together cover nearly seventy percent of the earth's total surface.",
      "Unlike the sun, the moon does not produce its own light but simply reflects sunlight toward earth.",
      "The invisible force of gravity constantly pulls all objects downward toward the centre of the earth.",
      "Increasing air, water, and soil pollution causes severe and long-lasting harm to all living organisms.",
      "Dense tropical forests and jungles are home to an extraordinary variety of plant and animal wildlife."
    ]
  },
  7: {
    easy: [
      "Photosynthesis occurs in plant leaves.",
      "Atoms make up all matter.",
      "Democracy values equal rights.",
      "The Renaissance changed European art.",
      "Electricity powers modern life."
    ],
    medium: [
      "Photosynthesis is the process by which plants make food in their leaves using sunlight.",
      "Tiny atoms are the basic building blocks that make up all matter in the universe.",
      "Democracy is a system of government that values equal rights and the freedom of citizens.",
      "The Renaissance was a powerful movement that transformed European art, science, and culture.",
      "The discovery of electricity has completely changed and now powers nearly all aspects of modern life."
    ],
    hard: [
      "Photosynthesis is the remarkable biological process by which green plants convert sunlight into food energy within their leaves.",
      "Atoms are the incredibly tiny fundamental building blocks that combine in various ways to make up all matter in the universe.",
      "Democracy is a form of government built on the principle that all citizens deserve equal rights, representation, and freedom.",
      "The Renaissance was a profound cultural and intellectual movement that dramatically transformed European art, literature, and scientific thought.",
      "The discovery and harnessing of electricity in the nineteenth century fundamentally changed and now powers nearly every aspect of modern life."
    ]
  },
  8: {
    easy: [
      "The human body has many systems.",
      "Trade connects different countries.",
      "Fossils reveal ancient life.",
      "Light travels in a straight line.",
      "Culture shapes our identity."
    ],
    medium: [
      "The human body is made up of many complex and interconnected systems that work together.",
      "International trade connects different countries and enables them to exchange goods and services.",
      "Fossils preserved in rock layers reveal important information about ancient life on earth.",
      "In a uniform medium, light always travels in a perfectly straight line.",
      "Our culture, traditions, and surroundings play a major role in shaping our personal identity."
    ],
    hard: [
      "The human body is an extraordinarily complex organism made up of multiple interconnected systems that must function together to sustain life.",
      "International trade networks connect nations across the globe, enabling the exchange of goods, services, and ideas on a massive scale.",
      "Fossils carefully preserved within ancient rock layers provide scientists with invaluable evidence about the diversity of life on earth millions of years ago.",
      "When travelling through a uniform and transparent medium, light propagates at an incredible speed in a perfectly straight line.",
      "The culture, traditions, language, and environment in which we grow up collectively play a profound role in shaping our sense of personal identity."
    ]
  },
  9: {
    easy: [
      "Chemical reactions involve energy changes.",
      "Shakespeare wrote many famous plays.",
      "Cells are the units of life.",
      "The French Revolution changed society.",
      "Algebra uses symbols for numbers."
    ],
    medium: [
      "Most chemical reactions involve significant changes in energy, either releasing or absorbing heat.",
      "William Shakespeare was one of history's most gifted writers and wrote many famous plays and sonnets.",
      "All living organisms are made of cells, which are considered the fundamental units of life.",
      "The French Revolution was a period of radical political change that completely transformed French society.",
      "Algebra is a branch of mathematics that uses letters and symbols to represent unknown numbers and quantities."
    ],
    hard: [
      "Most chemical reactions are accompanied by significant changes in energy, either releasing heat as exothermic reactions or absorbing energy as endothermic ones.",
      "William Shakespeare, widely regarded as the greatest writer in the English language, produced an unparalleled body of work including thirty-seven plays and one hundred and fifty-four sonnets.",
      "All known living organisms, from the simplest bacteria to complex multicellular animals, are composed of cells, which are considered the fundamental structural and functional units of life.",
      "The French Revolution of seventeen eighty-nine was a period of radical political and social upheaval that dismantled the monarchy and forever transformed the structure of French society.",
      "Algebra is a powerful branch of mathematics in which letters and abstract symbols are used to represent unknown quantities and to express and solve complex numerical relationships."
    ]
  },
  10: {
    easy: [
      "Natural selection drives evolution.",
      "The speed of light is constant.",
      "Globalisation connects the world.",
      "Literature reflects human experience.",
      "Volcanoes form at tectonic boundaries."
    ],
    medium: [
      "Charles Darwin proposed that natural selection is the primary mechanism that drives the evolution of species.",
      "According to physics, the speed of light in a vacuum is a universal constant that cannot be exceeded.",
      "Globalisation is the process by which economies, cultures, and societies around the world become increasingly interconnected.",
      "Great literature serves as a powerful mirror that reflects the full depth and complexity of human experience.",
      "Most volcanoes form at the boundaries where tectonic plates meet, collide, or pull apart beneath the earth's surface."
    ],
    hard: [
      "Charles Darwin's revolutionary theory proposed that natural selection, acting on heritable variations within populations, is the primary mechanism responsible for the gradual evolution of species over time.",
      "According to Einstein's theory of special relativity, the speed of light in a vacuum is a fundamental universal constant of approximately three hundred million metres per second, which no object with mass can reach.",
      "Globalisation refers to the accelerating process through which the economies, political systems, cultures, and societies of nations across the world become ever more deeply and intricately interconnected.",
      "Great literature functions as a powerful and enduring mirror, reflecting the full spectrum of human experience including joy, suffering, moral conflict, and the search for meaning across all cultures and eras.",
      "The majority of the world's volcanoes form along the dynamic boundaries where massive tectonic plates converge, diverge, or slide past one another deep beneath the earth's crust and mantle."
    ]
  },
  11: {
    easy: [
      "Quantum mechanics describes subatomic particles.",
      "Economic systems allocate scarce resources.",
      "Rhetoric is the art of persuasion.",
      "DNA carries genetic information.",
      "Philosophy asks fundamental questions."
    ],
    medium: [
      "Quantum mechanics is the branch of physics that describes the strange and counterintuitive behaviour of subatomic particles.",
      "Economic systems are the structured methods that societies use to allocate their scarce and limited resources among competing needs.",
      "Rhetoric is the classical art of using language strategically and effectively for the purpose of persuasion and communication.",
      "The DNA molecule carries all of the genetic information required to build, regulate, and sustain a living organism.",
      "Philosophy is an intellectual discipline dedicated to asking and carefully examining the most fundamental questions about existence, knowledge, ethics, and reality."
    ],
    hard: [
      "Quantum mechanics is the foundational branch of physics that describes, in precise mathematical terms, the deeply counterintuitive and probabilistic behaviour of matter and energy at the level of subatomic particles.",
      "Economic systems represent the organised institutional frameworks through which societies make collective decisions about how to produce, distribute, and consume their inherently scarce and finite resources among competing demands.",
      "Rhetoric, one of the original disciplines of classical education, is the sophisticated art and discipline of deploying language, argument, and style strategically and effectively to achieve the goal of persuasion and influence.",
      "The double-stranded DNA molecule, coiled into chromosomes within the nucleus of every cell, carries the complete genetic blueprint and hereditary information required to construct, regulate, and sustain a complex living organism.",
      "Philosophy is the rigorous and systematic intellectual discipline dedicated to formulating, analysing, and debating the most profound and fundamental questions concerning the nature of existence, the limits of knowledge, the basis of ethics, and the structure of reality itself."
    ]
  },
  12: {
    easy: [
      "Artificial intelligence is transforming industries.",
      "Climate change threatens biodiversity.",
      "Geopolitics shapes international relations.",
      "Consciousness remains a scientific mystery.",
      "Innovation drives economic progress."
    ],
    medium: [
      "Artificial intelligence and machine learning are rapidly transforming industries and reshaping the global economy.",
      "Human-induced climate change poses a severe and accelerating threat to biodiversity and ecosystem stability worldwide.",
      "Geopolitical forces, including competing national interests and alliances, fundamentally shape the nature of international relations.",
      "Despite decades of scientific progress, human consciousness and subjective experience remain one of the deepest unsolved mysteries.",
      "Sustained technological and scientific innovation is widely recognised as the primary driver of long-term economic growth and human progress."
    ],
    hard: [
      "The rapid advancement of artificial intelligence and sophisticated machine learning algorithms is fundamentally and irreversibly transforming entire industries, labour markets, and the structure of the global economy.",
      "The accelerating consequences of human-induced climate change, including rising temperatures, extreme weather, and habitat loss, pose an existential and increasingly urgent threat to global biodiversity and ecosystem stability.",
      "The complex interplay of geopolitical forces, including competing national interests, military alliances, economic interdependencies, and ideological rivalries, fundamentally determines the character and trajectory of contemporary international relations.",
      "Despite remarkable advances in neuroscience, cognitive science, and philosophy over recent decades, the nature of human consciousness and the origin of subjective experience continue to represent one of the most profound and intractable mysteries in all of science.",
      "Sustained investment in technological research, scientific discovery, and entrepreneurial innovation is broadly recognised by economists and historians alike as the single most powerful and enduring engine of long-term economic growth and human civilisational progress."
    ]
  }
};
