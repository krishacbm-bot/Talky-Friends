// lw_questions.js — TalkyLab Listen & Write
// All questions for Module 02: MCQ, Dictation, Essay, Grammar
// English only — Easy / Medium / Hard — 5 questions each

const LW_QUESTIONS = {

  mcq: {
    easy: [
      { audio:"The cat is sleeping on the sofa.", q:"Where is the cat sleeping?", opts:["On the floor","On the sofa","In the garden","On the bed"], ans:1, exp:"The sentence clearly states the cat is sleeping on the sofa." },
      { audio:"She drinks a glass of water every morning.", q:"What does she drink every morning?", opts:["Juice","Tea","Water","Milk"], ans:2, exp:"The sentence says she drinks a glass of water every morning." },
      { audio:"The school bus arrives at eight o'clock.", q:"When does the bus arrive?", opts:["Seven o'clock","Nine o'clock","Eight o'clock","Ten o'clock"], ans:2, exp:"Eight o'clock is the stated arrival time." },
      { audio:"Tom has two dogs and one cat.", q:"How many pets does Tom have in total?", opts:["Two","Three","Four","One"], ans:1, exp:"Two dogs plus one cat equals three pets total." },
      { audio:"The library closes at six in the evening.", q:"When does the library close?", opts:["Five PM","Seven PM","Six PM","Eight PM"], ans:2, exp:"Six in the evening means 6 PM." }
    ],
    medium: [
      { audio:"Despite the heavy rain, the football match continued without any delay.", q:"What happened to the match?", opts:["It was cancelled","It was delayed","It continued normally","It was moved indoors"], ans:2, exp:"Continued without any delay means the match went on normally." },
      { audio:"The museum will be closed for renovation from March to June.", q:"How long will the museum be closed?", opts:["One month","Two months","Three months","Four months"], ans:3, exp:"March, April, May, June is four months." },
      { audio:"She had studied for three years before moving to Paris.", q:"When did she start learning?", opts:["After moving to Paris","While living in Paris","Three years before Paris","One year before Paris"], ans:2, exp:"She studied three years before moving." },
      { audio:"The new policy requires all employees to submit reports weekly instead of monthly.", q:"How has the reporting frequency changed?", opts:["From weekly to daily","From monthly to weekly","From daily to monthly","No change"], ans:1, exp:"Previously monthly, now weekly." },
      { audio:"Although the presentation was long, the audience remained engaged throughout.", q:"How did the audience react?", opts:["They left early","They fell asleep","They stayed engaged","They complained"], ans:2, exp:"Remained engaged throughout means they stayed attentive." }
    ],
    hard: [
      { audio:"Cognitive dissonance occurs when an individual holds contradictory beliefs simultaneously, causing psychological discomfort.", q:"What triggers cognitive dissonance?", opts:["Lack of sleep","Contradictory beliefs","Physical discomfort","Social pressure"], ans:1, exp:"Holding contradictory beliefs simultaneously causes cognitive dissonance." },
      { audio:"The legislation was finally ratified by a slim majority despite considerable opposition.", q:"By what margin was the legislation passed?", opts:["Overwhelming majority","Unanimous vote","Slim majority","Exactly half"], ans:2, exp:"Slim majority is explicitly stated." },
      { audio:"Neuroplasticity refers to the brain's ability to reorganize itself by forming new neural connections, particularly in response to learning or injury.", q:"When is neuroplasticity especially important?", opts:["During sleep","In response to learning or injury","During childhood only","Under emotional stress"], ans:1, exp:"The definition specifies particularly in response to learning or injury." },
      { audio:"The industrial revolution accelerated economic growth but exacerbated social inequality and environmental degradation.", q:"What was a negative consequence?", opts:["Economic growth","Social inequality","Technological innovation","Urban migration"], ans:1, exp:"Social inequality and environmental degradation are the negative outcomes." },
      { audio:"Quantum entanglement describes particles where the quantum state of each cannot be described independently of the others.", q:"What is unique about entangled particles?", opts:["They move faster than light","Their states are independent","Their states cannot be described independently","They only exist in theory"], ans:2, exp:"Cannot be described independently is the key property." }
    ]
  },

  dict: {
    easy: [
      { audio:"The sun rises in the east every morning.", ans:"The sun rises in the east every morning.", hint:"7 words — direction and time of day." },
      { audio:"She has a red umbrella in her bag.", ans:"She has a red umbrella in her bag.", hint:"8 words — a colour and an object." },
      { audio:"We eat dinner together as a family.", ans:"We eat dinner together as a family.", hint:"7 words — a meal and family." },
      { audio:"The children played in the park all day.", ans:"The children played in the park all day.", hint:"8 words — children and where they played." },
      { audio:"My favourite colour is blue and green.", ans:"My favourite colour is blue and green.", hint:"7 words — colour preferences." }
    ],
    medium: [
      { audio:"The teacher explained the concept clearly using several practical examples.", ans:"The teacher explained the concept clearly using several practical examples.", hint:"10 words — about teaching methods." },
      { audio:"Despite feeling tired, she completed all her homework before midnight.", ans:"Despite feeling tired, she completed all her homework before midnight.", hint:"10 words — perseverance and time." },
      { audio:"The annual science fair attracted students from across the entire region.", ans:"The annual science fair attracted students from across the entire region.", hint:"11 words — a school event." },
      { audio:"He carefully reviewed his notes before the important examination began.", ans:"He carefully reviewed his notes before the important examination began.", hint:"10 words — exam preparation." },
      { audio:"The local government announced new recycling initiatives to protect the environment.", ans:"The local government announced new recycling initiatives to protect the environment.", hint:"11 words — environment and government." }
    ],
    hard: [
      { audio:"The unprecedented surge in renewable energy adoption has fundamentally transformed the global electricity market over the past decade.", ans:"The unprecedented surge in renewable energy adoption has fundamentally transformed the global electricity market over the past decade.", hint:"18 words — energy and economics." },
      { audio:"Researchers discovered that consistent mindfulness practice significantly reduces cortisol levels, thereby mitigating the physiological effects of chronic stress.", ans:"Researchers discovered that consistent mindfulness practice significantly reduces cortisol levels, thereby mitigating the physiological effects of chronic stress.", hint:"19 words — mindfulness and health." },
      { audio:"The constitutional amendment, ratified after years of bipartisan negotiation, established unprecedented protections for digital privacy rights.", ans:"The constitutional amendment, ratified after years of bipartisan negotiation, established unprecedented protections for digital privacy rights.", hint:"16 words — law and privacy." },
      { audio:"Archaeological evidence suggests that sophisticated agricultural techniques were employed by ancient civilizations thousands of years earlier than previously assumed.", ans:"Archaeological evidence suggests that sophisticated agricultural techniques were employed by ancient civilizations thousands of years earlier than previously assumed.", hint:"20 words — archaeology and history." },
      { audio:"The exponential proliferation of artificial intelligence applications has prompted urgent ethical debates among technologists, policymakers, and philosophers alike.", ans:"The exponential proliferation of artificial intelligence applications has prompted urgent ethical debates among technologists, policymakers, and philosophers alike.", hint:"19 words — AI and ethics." }
    ]
  },

  essay: {
    easy: [
      { prompt:"Describe your favourite season and explain why you like it.", min:50, tip:"Include weather, activities, and feelings." },
      { prompt:"Write about your best friend and what makes them special.", min:50, tip:"Think about qualities, memories, and why they matter to you." },
      { prompt:"Describe a place you love to visit and why.", min:50, tip:"Include sights, smells, sounds, and your emotions there." },
      { prompt:"Write about your favourite hobby and how you got started.", min:50, tip:"Explain the activity, when you started, and how it makes you feel." },
      { prompt:"Describe a typical school day from morning to afternoon.", min:50, tip:"Use time words like first, then, after, finally." }
    ],
    medium: [
      { prompt:"Do you think technology has improved education? Give reasons and examples.", min:100, tip:"Consider both advantages and drawbacks with specific examples." },
      { prompt:"Should students wear school uniforms? Argue for or against.", min:100, tip:"State your position clearly and support it with at least 3 reasons." },
      { prompt:"Describe a challenge you have overcome and what you learned.", min:100, tip:"Be specific about the challenge, your actions, and the lesson learned." },
      { prompt:"Is it more important to be kind or to be honest? Discuss.", min:100, tip:"You can argue both sides before reaching a conclusion." },
      { prompt:"How has the internet changed the way people communicate?", min:100, tip:"Think about positive and negative changes with concrete examples." }
    ],
    hard: [
      { prompt:"Analyse the social and economic consequences of rapid urbanisation in developing countries.", min:200, tip:"Consider infrastructure, inequality, opportunity, and environmental impact." },
      { prompt:"To what extent is social media responsible for the rise in mental health issues among teenagers?", min:200, tip:"Examine causation vs correlation, provide evidence, and consider counter-arguments." },
      { prompt:"Evaluate the argument that artificial intelligence poses a greater threat than opportunity to modern society.", min:200, tip:"Structure with introduction, developed arguments, counter-arguments, and a conclusion." },
      { prompt:"Discuss the ethical implications of genetic engineering in medicine.", min:200, tip:"Address consent, equity, unintended consequences, and limits of scientific progress." },
      { prompt:"How far do you agree that economic growth should take priority over environmental protection?", min:200, tip:"Explore sustainable development, intergenerational responsibility, and policy trade-offs." }
    ]
  },

  grammar: {
    easy: [
      { sentence:"She don't like apples." },
      { sentence:"They was playing in the garden." },
      { sentence:"He go to school every day." },
      { sentence:"I seen that movie last week." },
      { sentence:"The childrens are happy today." }
    ],
    medium: [
      { sentence:"If I would have known, I would have helped." },
      { sentence:"She is more smarter than her brother." },
      { sentence:"I look forward to meet you soon." },
      { sentence:"The data shows a interesting trend." },
      { sentence:"Neither the teachers nor the principal were happy." }
    ],
    hard: [
      { sentence:"Having finished the report, the meeting was adjourned." },
      { sentence:"Between you and I, the plan seems flawed." },
      { sentence:"The phenomena is well-documented in scientific literature." },
      { sentence:"She inferred that the professor was inferring her research was flawed." },
      { sentence:"The committee have reached their decision unanimous." }
    ]
  }

};
