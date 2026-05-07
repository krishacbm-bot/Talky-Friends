// sentences.js — TalkyLab Read & Speak
// Structure: SENTENCES[grade][level] = array of 10 strings
// Grades: jr_kg, sr_kg, 1–12
// Levels: easy, medium, hard
// All sentences are grade-appropriate, progressive in difficulty within each grade.

const SENTENCES = {

  /* ══════════════════════════════════════
     Jr KG  (Age 3–4)
     Easy   : 3–4 words, single syllable words
     Medium : 5–7 words, familiar concepts
     Hard   : 8–10 words, simple adjectives + nouns
     ══════════════════════════════════════ */
  jr_kg: {
    easy: [
      "The cat is big.",
      "I see a dog.",
      "A red ball.",
      "I like milk.",
      "The sun is hot.",
      "I have a toy.",
      "The fish is wet.",
      "A big tree.",
      "I see a bird.",
      "The cup is full."
    ],
    medium: [
      "The cat is very big.",
      "I can see a dog run.",
      "The red ball is round.",
      "I like cold milk a lot.",
      "The sun is hot and bright.",
      "I have a small toy car.",
      "The little fish swims fast.",
      "A big tree gives us shade.",
      "I see a bird in the sky.",
      "The cup is full of water."
    ],
    hard: [
      "The big cat sits on the mat.",
      "I can see the dog run fast.",
      "The round red ball is mine.",
      "I like to drink cold milk.",
      "The bright sun makes me warm.",
      "I have a small toy car to play with.",
      "The little fish swims fast in the bowl.",
      "A big shady tree grows in our garden.",
      "I see a small bird up in the sky.",
      "The cup is full of clean cold water."
    ]
  },

  /* ══════════════════════════════════════
     Sr KG  (Age 4–5)
     Easy   : 4–5 words, common objects
     Medium : 6–8 words, describing objects
     Hard   : 9–12 words, simple sentences with details
     ══════════════════════════════════════ */
  sr_kg: {
    easy: [
      "I have a blue pen.",
      "The bird can fly.",
      "She has a doll.",
      "We eat good food.",
      "He plays with a ball.",
      "The frog can jump.",
      "I see a yellow bus.",
      "We have a pet dog.",
      "The cake is sweet.",
      "She draws a pretty flower."
    ],
    medium: [
      "I have a small blue pen.",
      "The little bird can fly high.",
      "She has a pretty red doll.",
      "We eat good food every day.",
      "He plays ball with his friends.",
      "The green frog can jump very far.",
      "I see a big yellow school bus.",
      "We have a friendly little pet dog.",
      "The birthday cake is very sweet.",
      "She draws a pretty flower with colours."
    ],
    hard: [
      "I have a small blue pen in my bag.",
      "The little bird can fly very high in the sky.",
      "She has a pretty doll with a red dress.",
      "We eat healthy food every single day.",
      "He loves to play ball with all his friends.",
      "The green frog can jump very far across the pond.",
      "I see a big yellow school bus on the road.",
      "We have a friendly little dog as our pet at home.",
      "The round birthday cake is very sweet and delicious.",
      "She carefully draws a pretty flower using all her colours."
    ]
  },

  /* ══════════════════════════════════════
     Grade 1  (Age 5–6)
     Easy   : Simple subject + verb + object
     Medium : 8–10 words with time/place
     Hard   : 12–15 words with adjectives and adverbs
     ══════════════════════════════════════ */
  1: {
    easy: [
      "The dog ran fast.",
      "I drink water.",
      "She has a bag.",
      "My name is Sam.",
      "We go to school.",
      "The hen lays eggs.",
      "I like to sing.",
      "He has a red cap.",
      "The moon is round.",
      "Ants are very small."
    ],
    medium: [
      "The dog ran very fast today.",
      "I drink water every morning.",
      "She carries a big bag to school.",
      "My name is Sam and I am six.",
      "We go to school by bus each day.",
      "The hen lays eggs in the nest.",
      "I like to sing happy songs aloud.",
      "He always wears his red cap outside.",
      "The round moon glows brightly at night.",
      "Tiny ants carry food to their home."
    ],
    hard: [
      "The big brown dog ran very fast down the road.",
      "I drink a glass of cold water every morning.",
      "She always carries her heavy bag to school on time.",
      "My name is Sam and I am six years old.",
      "Every morning we go to school on the yellow bus.",
      "The white hen lays fresh eggs in her cosy nest.",
      "I love to sing happy and cheerful songs in the morning.",
      "He always wears his favourite red cap when he goes outside.",
      "The big round moon shines brightly in the dark night sky.",
      "Tiny little ants work together to carry food back to their home."
    ]
  },

  /* ══════════════════════════════════════
     Grade 2  (Age 6–7)
     Easy   : Short sentences about nature and daily life
     Medium : Adding adjectives and connectors
     Hard   : Two-clause sentences with details
     ══════════════════════════════════════ */
  2: {
    easy: [
      "Birds fly in the sky.",
      "Fish swim in water.",
      "Flowers are very pretty.",
      "I love my mother.",
      "We play in the park.",
      "Leaves fall in autumn.",
      "Bees make sweet honey.",
      "Rain makes plants grow.",
      "The cow gives us milk.",
      "We brush our teeth daily."
    ],
    medium: [
      "Colourful birds fly in the clear blue sky.",
      "Small fish swim quickly in the cool water.",
      "The flowers in the garden are very pretty.",
      "I love my kind mother very much.",
      "We play together in the park after school.",
      "Dry brown leaves fall gently in autumn.",
      "Busy little bees make delicious sweet honey.",
      "Cool rain helps all the plants to grow well.",
      "The gentle cow gives us fresh milk every day.",
      "We brush our teeth carefully every morning and night."
    ],
    hard: [
      "Colourful birds fly high in the bright blue sky every morning.",
      "Many small fish swim quickly through the clear and cool water.",
      "The beautiful flowers in the garden bloom brightly every spring.",
      "I love my kind and caring mother more than anything else.",
      "Every evening we play happily together in the nearby green park.",
      "During autumn, dry and crisp brown leaves fall gently from the trees.",
      "Busy little bees work hard all day long to make delicious sweet honey.",
      "Cool and steady rain helps all the plants in the garden to grow tall and strong.",
      "The gentle brown cow on the farm gives us fresh and creamy milk every single day.",
      "Every morning and night we carefully brush our teeth to keep them clean and healthy."
    ]
  },

  /* ══════════════════════════════════════
     Grade 3  (Age 7–8)
     Easy   : Familiar topics with simple verbs
     Medium : Adding frequency words and linking ideas
     Hard   : Multi-word sentences with rich description
     ══════════════════════════════════════ */
  3: {
    easy: [
      "The sky is blue.",
      "Trees give us shade.",
      "I read a book.",
      "She runs every day.",
      "Cats like to sleep.",
      "Rivers flow to the sea.",
      "We need clean air.",
      "The earth is round.",
      "Seeds grow into plants.",
      "Kindness is important."
    ],
    medium: [
      "The clear sky is bright blue today.",
      "Big trees give us cool shade in summer.",
      "I like to read a new book every week.",
      "She goes for a jog every morning.",
      "Cats love to sleep in warm sunny spots.",
      "Long rivers flow steadily and quietly to the sea.",
      "All living things need clean and fresh air to survive.",
      "Scientists have proven that the earth is round like a ball.",
      "Tiny seeds slowly grow into tall and leafy plants over time.",
      "Showing kindness to others is one of the most important values."
    ],
    hard: [
      "The clear sky is a beautiful shade of bright blue on sunny days.",
      "Large shady trees give us cool and comfortable shade during the hot summer.",
      "I enjoy reading an interesting new book every single week without fail.",
      "She wakes up early and goes for a long jog every morning.",
      "Most cats love to curl up and sleep in warm and cosy spots.",
      "Long and winding rivers flow steadily through valleys and plains until they reach the open sea.",
      "Every living creature on earth, from the smallest insect to the largest mammal, needs clean air to survive.",
      "Scientists have long proven beyond doubt that the earth is perfectly round like a giant ball in space.",
      "When given the right conditions of water, light, and soil, tiny seeds slowly grow into tall and leafy plants.",
      "Showing genuine kindness and compassion to others, even strangers, is one of the most important values a person can have."
    ]
  },

  /* ══════════════════════════════════════
     Grade 4  (Age 8–9)
     Easy   : Simple facts and activities
     Medium : Adding purpose and reason clauses
     Hard   : Full compound sentences with detail
     ══════════════════════════════════════ */
  4: {
    easy: [
      "The farmer grows vegetables.",
      "We should save water.",
      "Stars shine at night.",
      "She helps her mother.",
      "Books give us knowledge.",
      "The sun rises in the east.",
      "Bats sleep during the day.",
      "Maps help us find places.",
      "We must respect our elders.",
      "Doctors help sick people."
    ],
    medium: [
      "The hardworking farmer grows fresh vegetables on his farm.",
      "It is important for us to save water every day.",
      "Bright stars shine beautifully in the dark sky at night.",
      "She always helps her mother with the household chores.",
      "Good books give us a great deal of useful knowledge.",
      "The sun rises in the east and sets in the west every day.",
      "Nocturnal bats spend the daylight hours sleeping upside down in dark caves.",
      "Detailed maps help us navigate and find unknown places with ease.",
      "It is essential that we always show respect toward our elders.",
      "Dedicated doctors work hard every day to diagnose and help sick people recover."
    ],
    hard: [
      "The hardworking farmer wakes up early each morning to grow fresh vegetables on his farm.",
      "It is our responsibility to save water carefully and use it wisely every single day.",
      "On a clear and quiet night, bright stars shine beautifully across the entire sky.",
      "She willingly and cheerfully helps her mother complete all the household chores every evening.",
      "Reading good and informative books regularly gives us a great deal of useful knowledge.",
      "The sun reliably rises in the east each morning and sets in the west each evening without fail.",
      "Nocturnal bats spend all of their daylight hours sleeping safely upside down in dark and sheltered caves.",
      "Detailed and accurate maps help travellers and explorers navigate confidently and find unfamiliar places with ease.",
      "It is a fundamental value of every good society that all people must show genuine respect toward their elders.",
      "Dedicated and caring doctors work long hours every single day to diagnose illnesses and help sick people on their road to recovery."
    ]
  },

  /* ══════════════════════════════════════
     Grade 5  (Age 9–10)
     Easy   : Subject + verb sentences about science and values
     Medium : Adding explanation and detail
     Hard   : Complex sentences with subordinate clauses
     ══════════════════════════════════════ */
  5: {
    easy: [
      "Plants need sunlight to grow.",
      "Honesty is the best policy.",
      "The earth moves around the sun.",
      "We should keep our surroundings clean.",
      "Exercise keeps our body healthy.",
      "Water evaporates when it is heated.",
      "Sound travels as waves through air.",
      "Volcanoes release hot lava and ash.",
      "The internet connects people worldwide.",
      "Recycling reduces waste and pollution."
    ],
    medium: [
      "Green plants need adequate sunlight and water to grow well.",
      "Honesty is always the best policy in every situation.",
      "The earth completes one full revolution around the sun each year.",
      "Every citizen should do their part to keep their surroundings clean.",
      "Regular physical exercise helps us keep our body fit and healthy.",
      "When water is heated to one hundred degrees Celsius, it evaporates into steam.",
      "Sound travels as invisible waves through the air and reaches our ears.",
      "When volcanoes erupt, they release scorching hot lava and thick clouds of ash.",
      "The internet connects billions of people around the world instantly and easily.",
      "Recycling used materials such as paper and plastic greatly reduces waste and pollution."
    ],
    hard: [
      "Green plants require adequate sunlight, water, and nutrients from the soil in order to grow and thrive.",
      "Practising honesty in every situation, no matter how difficult, is truly the best policy in life.",
      "The earth takes approximately three hundred and sixty-five days to complete one full revolution around the sun.",
      "Every responsible citizen should actively contribute their effort to keeping their city clean and hygienic at all times.",
      "Engaging in regular physical exercise every day helps us maintain a fit, strong, and healthy body throughout our lives.",
      "When liquid water is heated to its boiling point of one hundred degrees Celsius, it transforms into water vapour and evaporates.",
      "Sound travels as invisible longitudinal waves through the air at a speed of approximately three hundred and forty metres per second.",
      "During a powerful volcanic eruption, enormous quantities of scorching lava, toxic gases, and thick clouds of ash are released into the environment.",
      "The internet has connected billions of people across every corner of the world, enabling instant communication and the rapid sharing of information.",
      "By recycling used materials such as paper, glass, and plastic, individuals and communities can significantly reduce the volume of waste that ends up polluting our environment."
    ]
  },

  /* ══════════════════════════════════════
     Grade 6  (Age 10–11)
     Easy   : Facts about science and environment
     Medium : Adding percentages, comparisons, and cause-effect
     Hard   : Multi-clause academic sentences
     ══════════════════════════════════════ */
  6: {
    easy: [
      "Water covers most of the earth.",
      "The moon reflects sunlight.",
      "Gravity pulls objects downward.",
      "Pollution harms living things.",
      "Forests are home to wildlife.",
      "The human heart pumps blood.",
      "Magnets attract iron objects.",
      "Deserts receive very little rain.",
      "Plants release oxygen into the air.",
      "Microbes can cause disease."
    ],
    medium: [
      "Vast oceans and seas cover most of the earth's surface area.",
      "The moon does not produce its own light but only reflects sunlight.",
      "The force of gravity constantly pulls all objects downward toward the earth.",
      "Air and water pollution causes serious harm to all living things.",
      "Dense forests and jungles are home to a wide variety of wildlife.",
      "The human heart is a powerful muscle that pumps blood around the entire body.",
      "Strong magnets are able to attract objects made of iron and other magnetic materials.",
      "Hot and arid deserts receive very little rainfall throughout the entire year.",
      "Through the process of photosynthesis, plants absorb carbon dioxide and release oxygen into the air.",
      "Tiny and invisible microbes such as bacteria and viruses are capable of causing serious disease in humans."
    ],
    hard: [
      "Vast oceans, seas, and rivers together cover nearly seventy percent of the earth's total surface area.",
      "Unlike the sun, the moon produces no light of its own but simply reflects sunlight toward the earth.",
      "The invisible force of gravity constantly pulls all objects with mass downward toward the centre of the earth.",
      "The rapid increase in air, water, and soil pollution is causing severe and long-lasting harm to all living organisms.",
      "Dense tropical forests and jungles around the world are home to an extraordinary variety of plant and animal species.",
      "The human heart is a remarkably powerful and tireless muscle that pumps oxygen-rich blood continuously to every organ and tissue in the body.",
      "Powerful magnets generate an invisible magnetic field that can attract objects made of iron, nickel, cobalt, and other ferromagnetic materials across a distance.",
      "Extremely hot and arid desert regions, such as the Sahara, receive very little to no rainfall throughout the year, making them among the most inhospitable environments on earth.",
      "Through the complex biochemical process of photosynthesis, green plants absorb carbon dioxide from the atmosphere and convert sunlight into chemical energy, releasing oxygen as a by-product.",
      "Microscopic organisms such as bacteria, viruses, fungi, and parasites are capable of invading the human body and causing a wide range of infectious and potentially life-threatening diseases."
    ]
  },

  /* ══════════════════════════════════════
     Grade 7  (Age 11–12)
     Easy   : Key concepts in science, history, and language
     Medium : Defining and expanding concepts
     Hard   : Formal definitions with subordinate clauses
     ══════════════════════════════════════ */
  7: {
    easy: [
      "Photosynthesis occurs in plant leaves.",
      "Atoms make up all matter.",
      "Democracy values equal rights.",
      "The Renaissance changed European art.",
      "Electricity powers modern life.",
      "Friction slows moving objects.",
      "The water cycle involves evaporation.",
      "Myths explain natural events.",
      "The printing press spread knowledge.",
      "Vaccines prevent infectious diseases."
    ],
    medium: [
      "Photosynthesis is the process by which plants produce food using sunlight in their leaves.",
      "Tiny atoms are the fundamental building blocks that make up all matter in the universe.",
      "Democracy is a system of government that upholds equal rights and freedoms for all citizens.",
      "The Renaissance was a powerful movement that transformed art, science, and culture in Europe.",
      "The discovery and use of electricity has fundamentally changed and now powers modern life.",
      "Friction is a force that opposes the motion of objects and gradually slows them down.",
      "The water cycle is a continuous natural process involving evaporation, condensation, and precipitation.",
      "Ancient myths were stories created by early civilisations to explain natural events and the world around them.",
      "Gutenberg's printing press allowed books to be produced quickly and cheaply, spreading knowledge to millions.",
      "Vaccines work by training the immune system to recognise and fight specific infectious diseases before they occur."
    ],
    hard: [
      "Photosynthesis is the remarkable biological process by which green plants convert sunlight into chemical food energy within the cells of their leaves.",
      "Atoms are the extraordinarily tiny fundamental units of matter that combine in countless ways to form all the substances and materials in the known universe.",
      "Democracy is a form of government founded on the principle that all citizens deserve equal rights, a fair voice, and meaningful representation in the decisions that affect their lives.",
      "The Renaissance was a profound cultural and intellectual movement originating in Italy that dramatically transformed European art, literature, philosophy, and scientific understanding.",
      "The discovery and harnessing of electricity in the nineteenth century fundamentally and irreversibly changed human civilisation and now powers nearly every aspect of modern daily life.",
      "Friction is a physical force that acts in opposition to the relative motion of two surfaces in contact, gradually slowing moving objects by converting their kinetic energy into heat.",
      "The water cycle is a continuous and self-sustaining natural process involving the evaporation of water from surfaces, its condensation into clouds, and its return to earth as precipitation.",
      "Ancient myths were elaborate narrative stories created by early civilisations to provide explanations for natural phenomena, the origins of the world, and the behaviour of gods and humans.",
      "Gutenberg's invention of the movable-type printing press in the fifteenth century revolutionised the production and distribution of books, enabling the rapid and widespread dissemination of knowledge across Europe.",
      "Vaccines function by introducing a weakened or inactivated form of a pathogen into the body, stimulating the immune system to produce antibodies and develop a lasting defence against future infection."
    ]
  },

  /* ══════════════════════════════════════
     Grade 8  (Age 12–13)
     Easy   : Factual statements across disciplines
     Medium : Expanding with evidence and context
     Hard   : Extended academic sentences with precision
     ══════════════════════════════════════ */
  8: {
    easy: [
      "The human body has many systems.",
      "Trade connects different countries.",
      "Fossils reveal ancient life.",
      "Light travels in a straight line.",
      "Culture shapes our identity.",
      "Newton discovered the laws of motion.",
      "The atmosphere protects the earth.",
      "Cells divide to produce new cells.",
      "Migration is caused by many factors.",
      "Energy cannot be created or destroyed."
    ],
    medium: [
      "The human body is made up of many complex and interconnected systems that work together.",
      "International trade connects different countries and enables them to exchange goods and services.",
      "Fossils preserved in ancient rock layers reveal important evidence about life on earth long ago.",
      "In a uniform medium, light always travels in a perfectly straight line at incredible speed.",
      "Our culture, language, and upbringing play a major role in shaping our sense of personal identity.",
      "Isaac Newton's three laws of motion laid the foundation for classical mechanics and our understanding of physical forces.",
      "The earth's atmosphere acts as a protective shield, blocking harmful solar radiation and regulating surface temperature.",
      "All living organisms grow and repair themselves through the process of cell division, where one cell splits into two.",
      "Human migration across history has been driven by a complex combination of factors including conflict, climate, and the search for opportunity.",
      "The law of conservation of energy states that energy can neither be created nor destroyed, only transformed from one form to another."
    ],
    hard: [
      "The human body is an extraordinarily complex organism composed of multiple interconnected systems, each performing specialised functions, that must work in perfect coordination to sustain life.",
      "International trade networks spanning the entire globe enable nations to exchange goods, services, technology, and ideas on a vast scale, driving economic growth and cultural exchange.",
      "Fossils of organisms carefully preserved within ancient stratified rock layers provide scientists with invaluable and irreplaceable evidence about the extraordinary diversity of life on earth over millions of years.",
      "When propagating through a uniform and optically transparent medium such as glass or water, light travels at an astonishing speed and always follows a perfectly straight linear path.",
      "The culture, traditions, language, and social environment in which we are raised and grow up collectively exert a profound and lasting influence on our individual sense of personal and social identity.",
      "Isaac Newton's three laws of motion, formulated in the seventeenth century, established the foundational principles of classical mechanics and transformed humanity's understanding of how forces govern the movement of objects.",
      "The earth's thin but vital atmosphere acts as a multi-layered protective shield, absorbing dangerous ultraviolet radiation from the sun and maintaining the stable surface temperatures necessary for life to exist.",
      "All multicellular living organisms grow, develop, and repair damaged tissues through the precisely regulated process of cell division, in which a parent cell duplicates its genetic material and splits into two genetically identical daughter cells.",
      "Throughout human history, large-scale migration of populations from one region to another has been driven by a complex and interacting combination of factors, including armed conflict, extreme climate conditions, economic hardship, and the pursuit of better opportunities.",
      "The fundamental law of conservation of energy, one of the most important principles in all of physics, states that the total energy of an isolated system remains constant, as energy can never be created or destroyed but only transformed from one form into another."
    ]
  },

  /* ══════════════════════════════════════
     Grade 9  (Age 13–14)
     Easy   : Key concepts in sciences, arts, and maths
     Medium : Defining with historical context
     Hard   : Precise academic sentences at secondary level
     ══════════════════════════════════════ */
  9: {
    easy: [
      "Chemical reactions involve energy changes.",
      "Shakespeare wrote many famous plays.",
      "Cells are the basic units of life.",
      "The French Revolution changed society.",
      "Algebra uses symbols for numbers.",
      "Osmosis involves the movement of water.",
      "The periodic table organises elements.",
      "Propaganda influences public opinion.",
      "Trigonometry deals with angles and triangles.",
      "Colonialism shaped the modern world."
    ],
    medium: [
      "Most chemical reactions involve significant changes in energy, either releasing heat or absorbing it.",
      "William Shakespeare was one of history's greatest writers and authored many celebrated plays and sonnets.",
      "All living organisms are composed of cells, which are considered the fundamental structural units of life.",
      "The French Revolution was a period of radical change that permanently transformed the structure of French society.",
      "Algebra is a branch of mathematics that uses letters and symbols to represent unknown numbers and quantities.",
      "Osmosis is the movement of water molecules through a semi-permeable membrane from an area of low to high solute concentration.",
      "The periodic table is a systematic arrangement of all known chemical elements organised according to their atomic number and properties.",
      "Governments and political groups have historically used propaganda to manipulate and influence the opinions and behaviour of the public.",
      "Trigonometry is the branch of mathematics that studies the relationships between the angles and side lengths of triangles.",
      "European colonialism fundamentally reshaped political boundaries, economies, and cultural identities across much of the modern world."
    ],
    hard: [
      "Most chemical reactions are accompanied by measurable changes in energy, either releasing heat in exothermic reactions or absorbing energy from the surroundings in endothermic ones.",
      "William Shakespeare, widely regarded as the greatest writer in the English language, produced a remarkable body of work including thirty-seven plays, one hundred and fifty-four sonnets, and several long poems.",
      "All known living organisms, from the simplest single-celled bacteria to extraordinarily complex multicellular animals, are composed of cells, which are the fundamental structural and functional units of all biological life.",
      "The French Revolution of seventeen eighty-nine was a period of violent and radical political upheaval that dismantled the ancien régime and permanently transformed the political and social structure of French society.",
      "Algebra is a powerful and abstract branch of mathematics in which letters and symbols are systematically used to represent unknown quantities and to formulate, manipulate, and solve complex numerical relationships.",
      "Osmosis is the passive diffusion of water molecules across a selectively permeable membrane from a region of lower solute concentration to a region of higher solute concentration, until equilibrium is reached.",
      "The periodic table, first devised by Dmitri Mendeleev in eighteen sixty-nine, is a systematic tabular arrangement of all known chemical elements ordered by increasing atomic number, electron configuration, and recurring chemical properties.",
      "Throughout history, governments, political movements, and corporations have employed sophisticated propaganda techniques to selectively shape public perception, manipulate mass opinion, and generate support for their agendas.",
      "Trigonometry is a fundamental branch of mathematics that investigates the precise mathematical relationships between the angles and the lengths of the sides of triangles, with wide applications in science, engineering, and navigation.",
      "European colonialism, which reached its peak in the nineteenth and early twentieth centuries, imposed political domination, economic exploitation, and cultural suppression on vast regions of Africa, Asia, and the Americas, leaving enduring consequences for the modern world."
    ]
  },

  /* ══════════════════════════════════════
     Grade 10  (Age 14–15)
     Easy   : Senior secondary key concepts
     Medium : Analytical statements with mechanisms
     Hard   : Long, precise, formal academic sentences
     ══════════════════════════════════════ */
  10: {
    easy: [
      "Natural selection drives evolution.",
      "The speed of light is constant.",
      "Globalisation connects the world.",
      "Literature reflects human experience.",
      "Volcanoes form at tectonic boundaries.",
      "The pH scale measures acidity.",
      "Opportunity cost is an economic concept.",
      "Existentialism focuses on individual freedom.",
      "Enzymes speed up chemical reactions.",
      "Urbanisation changes population distribution."
    ],
    medium: [
      "Charles Darwin proposed that natural selection is the primary mechanism that drives the gradual evolution of species.",
      "According to physics, the speed of light in a vacuum is a universal constant that cannot be exceeded.",
      "Globalisation is the process by which economies, cultures, and societies across the world become increasingly interconnected.",
      "Great literature serves as a powerful and enduring mirror that reflects the full depth of human experience.",
      "Most volcanoes form at the boundaries where massive tectonic plates meet, collide, or pull apart beneath the earth's surface.",
      "The pH scale is a logarithmic measure used to quantify the acidity or alkalinity of a substance on a scale from zero to fourteen.",
      "In economics, opportunity cost refers to the value of the next best alternative that must be sacrificed when making any decision.",
      "Existentialism is a philosophical movement that places individual freedom, authentic choice, and personal responsibility at the centre of human existence.",
      "Enzymes are biological catalysts that dramatically speed up the rate of chemical reactions within living cells without being consumed in the process.",
      "Rapid urbanisation is transforming the global distribution of population, as increasing numbers of people migrate from rural areas to cities in search of work and opportunity."
    ],
    hard: [
      "Charles Darwin's theory of evolution proposed that natural selection, acting on heritable variations within populations over immense periods of time, is the principal mechanism responsible for the gradual diversification of species.",
      "According to Einstein's special theory of relativity, the speed of light in a vacuum is a fundamental universal constant of approximately three hundred million metres per second, which no object possessing mass can ever attain.",
      "Globalisation refers to the accelerating and deepening process through which the economies, political systems, cultures, and social structures of nations across the entire world become ever more intricately and irreversibly interconnected.",
      "Great literature functions as a powerful, enduring, and universally accessible mirror, reflecting the full and complex spectrum of human experience, including joy and suffering, moral conflict, and the universal search for meaning and identity.",
      "The vast majority of the world's active volcanoes form along the dynamic geological boundaries where enormous tectonic plates converge, diverge, or slide laterally past one another deep beneath the earth's crust and upper mantle.",
      "The pH scale is a logarithmic, inverse measure of hydrogen ion concentration in a solution, ranging from zero for the most strongly acidic substances to fourteen for the most strongly alkaline, with seven representing a perfectly neutral solution.",
      "In economic theory, opportunity cost is the implicit cost of any decision, representing the value of the best alternative foregone, and serves as a fundamental reminder that every resource allocation inevitably involves a trade-off between competing uses.",
      "Existentialism, as developed by philosophers such as Sartre, Camus, and Kierkegaard, is a philosophical tradition asserting that human beings are condemned to radical freedom, bearing full responsibility for creating meaning and defining their own identity through their choices.",
      "Enzymes are highly specific protein-based biological catalysts that function by lowering the activation energy required for biochemical reactions within living cells, thereby dramatically accelerating metabolic processes without themselves being permanently altered or consumed.",
      "The rapid and sustained process of urbanisation, driven by rural-to-urban migration and natural population growth, is fundamentally reshaping the global distribution of human populations, placing enormous pressure on urban infrastructure, housing, and public services worldwide."
    ]
  },

  /* ══════════════════════════════════════
     Grade 11  (Age 15–16)
     Easy   : Advanced concepts across disciplines
     Medium : Analytical with technical vocabulary
     Hard   : University-preparatory academic prose
     ══════════════════════════════════════ */
  11: {
    easy: [
      "Quantum mechanics describes subatomic particles.",
      "Economic systems allocate scarce resources.",
      "Rhetoric is the art of persuasion.",
      "DNA carries genetic information.",
      "Philosophy asks fundamental questions.",
      "Entropy measures disorder in a system.",
      "Postcolonialism examines colonial legacies.",
      "Cognitive biases affect our decisions.",
      "Blockchain enables decentralised transactions.",
      "Moral relativism denies universal ethics."
    ],
    medium: [
      "Quantum mechanics is the branch of physics that describes the counterintuitive behaviour of subatomic particles.",
      "Economic systems are the structured methods that societies use to allocate their scarce and limited resources.",
      "Rhetoric is the classical art of using language strategically and effectively for the purpose of persuasion.",
      "The DNA molecule carries all of the genetic information required to build and sustain a living organism.",
      "Philosophy is a discipline dedicated to examining the most fundamental questions about existence, knowledge, and ethics.",
      "In thermodynamics, entropy is a measure of the degree of disorder or randomness within a physical system, which always tends to increase.",
      "Postcolonial theory is an academic framework that critically examines the enduring cultural, political, and economic legacies left by colonialism.",
      "Cognitive biases are systematic patterns of irrational or distorted thinking that unconsciously influence our perception, judgement, and decision-making.",
      "Blockchain technology is a decentralised and distributed digital ledger system that enables secure, transparent, and tamper-resistant recording of transactions.",
      "Moral relativism is the philosophical position that ethical judgements and moral standards are not universal but vary across cultures, societies, and individuals."
    ],
    hard: [
      "Quantum mechanics is the foundational branch of physics that uses precise mathematical formalism to describe the deeply counterintuitive, probabilistic, and wave-like behaviour of matter and energy at the scale of subatomic particles.",
      "Economic systems represent the organised institutional frameworks through which societies make collective decisions about how to produce, distribute, and consume their inherently scarce and finite resources among an array of competing demands and priorities.",
      "Rhetoric, one of the original disciplines of classical education in ancient Greece and Rome, is the sophisticated art and science of deploying language, argument, evidence, and style strategically to achieve persuasion and meaningful communicative influence.",
      "The double-stranded DNA molecule, coiled into chromosomes within the nucleus of every living cell, carries the complete genetic blueprint and heritable information required to construct, regulate, and perpetuate a complex living organism across generations.",
      "Philosophy is the rigorous and systematic intellectual discipline dedicated to formulating, critically analysing, and rigorously debating the most profound and foundational questions concerning the nature of existence, the scope and limits of human knowledge, the basis of moral and ethical judgement, and the ultimate structure of reality.",
      "In thermodynamics, entropy is a precise quantitative measure of the degree of disorder, randomness, or dispersal of energy within a closed system, and the second law of thermodynamics states that in any spontaneous process, the total entropy of the universe will always increase.",
      "Postcolonial theory, associated with scholars such as Edward Said, Homi Bhabha, and Gayatri Spivak, provides a rigorous critical framework for examining how the political, economic, cultural, and psychological legacies of colonialism continue to shape identities, power structures, and knowledge systems in the contemporary world.",
      "Cognitive biases, which arise from the heuristic shortcuts that the human brain employs to process information rapidly, are systematic and predictable patterns of irrational or distorted thinking that unconsciously skew our perception of reality, impair our judgement, and lead to suboptimal decisions.",
      "Blockchain technology is an innovative decentralised and cryptographically secured distributed ledger system in which data is stored in a chain of immutable, time-stamped blocks shared across a peer-to-peer network, enabling transparent, trustless, and tamper-resistant recording of transactions without the need for a central authority.",
      "Moral relativism is the contested philosophical doctrine asserting that moral and ethical standards, values, and judgements are not absolute or universally binding but are instead culturally constructed, historically contingent, and variable across different societies, communities, and individuals."
    ]
  },

  /* ══════════════════════════════════════
     Grade 12  (Age 16–18)
     Easy   : Current issues and advanced concepts
     Medium : Analytical with nuanced vocabulary
     Hard   : University-level formal academic prose
     ══════════════════════════════════════ */
  12: {
    easy: [
      "Artificial intelligence is transforming industries.",
      "Climate change threatens biodiversity.",
      "Geopolitics shapes international relations.",
      "Consciousness remains a scientific mystery.",
      "Innovation drives economic progress.",
      "Gene editing raises ethical questions.",
      "Disinformation undermines democratic processes.",
      "Dark matter remains largely unexplained.",
      "Social media reshapes cultural identity.",
      "Sustainable development balances growth and ecology."
    ],
    medium: [
      "Artificial intelligence and machine learning are rapidly transforming industries and reshaping the global economy.",
      "Human-induced climate change poses a severe and accelerating threat to global biodiversity and ecosystem stability.",
      "Geopolitical forces, including competing national interests and alliances, fundamentally shape international relations.",
      "Despite decades of scientific progress, human consciousness and subjective experience remain deeply mysterious.",
      "Sustained technological and scientific innovation is widely recognised as the primary driver of long-term economic growth.",
      "The advent of CRISPR gene-editing technology has opened profound ethical debates about the limits of human intervention in the genome.",
      "The unchecked proliferation of disinformation across digital platforms poses a serious and growing threat to democratic institutions and public trust.",
      "Dark matter, which is believed to constitute approximately twenty-seven percent of the universe's total mass-energy content, has never been directly observed or detected.",
      "The pervasive influence of social media platforms is profoundly reshaping the way individuals construct and negotiate their cultural and personal identities.",
      "Sustainable development seeks to reconcile the imperatives of economic growth and social progress with the urgent need to preserve ecological integrity for future generations."
    ],
    hard: [
      "The rapid and accelerating advancement of artificial intelligence and sophisticated machine learning algorithms is fundamentally and irreversibly transforming entire industries, restructuring labour markets, and reshaping the architecture of the global economy.",
      "The intensifying consequences of anthropogenic climate change, including rising global temperatures, increased frequency of extreme weather events, and accelerating habitat destruction, pose an existential and increasingly urgent threat to the stability of global biodiversity and interconnected ecosystems.",
      "The complex and evolving interplay of geopolitical forces, including competing national interests, shifting military alliances, deepening economic interdependencies, and clashing ideological frameworks, fundamentally determines the character, trajectory, and stability of contemporary international relations.",
      "Despite the remarkable advances achieved in neuroscience, cognitive science, and philosophy of mind over recent decades, the precise nature of human consciousness and the underlying mechanisms that give rise to subjective phenomenal experience continue to represent one of the most profound and intractable mysteries confronting modern science.",
      "Sustained and strategic investment in technological research, fundamental scientific discovery, and an enabling environment for entrepreneurial innovation is broadly recognised by economists, historians, and policymakers alike as the single most powerful and enduring engine of long-term economic growth and the advancement of human civilisation.",
      "The emergence of CRISPR-Cas9 and other precise gene-editing technologies has introduced unprecedented capabilities for modifying the human genome, simultaneously offering extraordinary potential for eradicating hereditary disease and raising profound and unresolved ethical questions about consent, equity, and the risks of germline modification.",
      "The unchecked proliferation of algorithmically amplified disinformation, deepfake media, and coordinated inauthentic behaviour across global digital platforms poses a systemic and escalating threat to the epistemic foundations of democratic governance, electoral integrity, and informed public discourse.",
      "Dark matter, a hypothetical and as-yet undetected form of matter inferred from its gravitational effects on visible galaxies and large-scale cosmic structures, is estimated to account for approximately twenty-seven percent of the universe's total mass-energy content, yet its fundamental nature and composition remain entirely unknown to contemporary physics.",
      "The ubiquitous and algorithmically curated influence of social media platforms is profoundly and continuously reshaping the processes through which individuals, communities, and societies construct, negotiate, perform, and contest their cultural, political, and personal identities in the digital age.",
      "Sustainable development, as articulated in the United Nations' Sustainable Development Goals, represents an ambitious and multidimensional global framework seeking to reconcile the competing imperatives of economic growth, social equity, and the urgent preservation of ecological integrity and natural resources for the benefit of present and future generations."
    ]
  }

};