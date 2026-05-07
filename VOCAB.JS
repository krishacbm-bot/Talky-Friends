/* ================================================================
   TalkyLab — Question Bank FILE 1
   Topics : tenses | articles
   Grades : jr_kg | sr_kg | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   Acts   : mcq | fill | error  (5 Qs each)
   Usage  : paste before your main <script> then:
            Object.assign(BANK, BANK_FILE1);
   ================================================================ */

const BANK_FILE1 = {

/* ══════════════════════════════════════════════════════════════════
   T E N S E S
══════════════════════════════════════════════════════════════════ */
tenses:{

  jr_kg:{
    mcq:[
      {q:'The dog ___ every morning.',opts:['bark','barks','barking','barked'],ans:1,exp:'Third-person singular needs verb+s.',rule:'He/She/It + verb+s in Simple Present'},
      {q:'Look! The bird ___ in the sky.',opts:['fly','flies','is flying','flew'],ans:2,exp:'Action happening right now → Present Continuous.',rule:'am/is/are + verb+ing for actions happening NOW'},
      {q:'She ___ a cake yesterday.',opts:['bake','bakes','baked','baking'],ans:2,exp:'"Yesterday" signals Simple Past.',rule:'Simple Past for completed actions; regular verbs add -ed'},
      {q:'We ___ to the zoo tomorrow.',opts:['go','went','will go','going'],ans:2,exp:'"Tomorrow" signals future.',rule:'will + base verb for future actions'},
      {q:'I ___ milk every day.',opts:['drink','drinks','drank','drinking'],ans:0,exp:'"I" takes the base verb in Simple Present.',rule:'I/We/You/They + base verb in Simple Present'},
    ],
    fill:[
      {q:'The cat ___ (sleep) on the mat every night.',ans:'sleeps',exp:'Third-person singular Simple Present.',rule:'He/She/It + verb+s in Simple Present'},
      {q:'Right now he ___ (eat) his lunch.',ans:'is eating',exp:'"Right now" → Present Continuous.',rule:'is/am/are + verb+ing for current actions'},
      {q:'They ___ (play) football yesterday.',ans:'played',exp:'Simple Past, regular verb +ed.',rule:'Regular verbs: add -ed for Simple Past'},
      {q:'She ___ (come) to the party tomorrow.',ans:'will come',exp:'"Tomorrow" → Simple Future.',rule:'will + base verb for future'},
      {q:'The baby ___ (cry) right now.',ans:'is crying',exp:'Present Continuous for ongoing action.',rule:'is/am/are + verb+ing for ongoing action'},
    ],
    error:[
      {q:'The boy play cricket every day.',error:'play',correction:'plays',exp:'Third-person singular needs verb+s.',rule:'He/She/It + verb+s/es in Simple Present'},
      {q:'She are reading a book.',error:'are',correction:'is',exp:'"She" is singular → use "is".',rule:'She/He/It + is + verb+ing'},
      {q:'They goed to the market.',error:'goed',correction:'went',exp:'"Go" is irregular; past tense is "went".',rule:'Irregular verbs: go → went, come → came'},
      {q:'I will going to school.',error:'going',correction:'go',exp:'"Will" is followed by the base verb.',rule:'will + base verb (NOT will + going)'},
      {q:'He is eat an apple.',error:'eat',correction:'eating',exp:'Present Continuous needs verb+ing.',rule:'is/am/are + verb+ing'},
    ],
  },

  sr_kg:{
    mcq:[
      {q:'My mother ___ tea every morning.',opts:['make','makes','making','made'],ans:1,exp:'"Mother" = she → verb+s.',rule:'He/She/It + verb+s in Simple Present'},
      {q:'The children ___ in the garden right now.',opts:['play','plays','are playing','played'],ans:2,exp:'"Right now" → Present Continuous.',rule:'am/is/are + verb+ing for current action'},
      {q:'He ___ his homework before dinner last night.',opts:['finish','finishes','finished','finishing'],ans:2,exp:'"Last night" signals Simple Past.',rule:'Simple Past for completed past actions'},
      {q:'She ___ a doctor when she grows up.',opts:['become','becomes','will become','is becoming'],ans:2,exp:'"When she grows up" points to the future.',rule:'will + base verb for future plans'},
      {q:'The children ___ TV when I came home.',opts:['watch','watches','watched','were watching'],ans:3,exp:'Past Continuous: action in progress when another happened.',rule:'was/were + verb+ing for interrupted past action'},
    ],
    fill:[
      {q:'Birds ___ (sing) sweet songs every morning.',ans:'sing',exp:'"Birds" is plural → base verb.',rule:'Plural subjects + base verb in Simple Present'},
      {q:'Look! It ___ (rain) outside.',ans:'is raining',exp:'"Right now" → Present Continuous.',rule:'It + is + verb+ing for current action'},
      {q:'My father ___ (leave) for work at 8 am yesterday.',ans:'left',exp:'"Left" – irregular past of "leave".',rule:'Irregular verb: leave → left'},
      {q:'We ___ (visit) our grandparents next Sunday.',ans:'will visit',exp:'"Next Sunday" → Simple Future.',rule:'will + base verb for future'},
      {q:'The children ___ (watch) TV when I arrived.',ans:'were watching',exp:'Past Continuous for action in progress when another occurred.',rule:'was/were + verb+ing for past ongoing action'},
    ],
    error:[
      {q:'She make breakfast every day.',error:'make',correction:'makes',exp:'"She" → "makes" (third-person singular).',rule:'She/He/It + verb+s in Simple Present'},
      {q:'They is playing in the park.',error:'is',correction:'are',exp:'"They" is plural → "are".',rule:'They/We/You + are + verb+ing'},
      {q:'He goed to the market last week.',error:'goed',correction:'went',exp:'"Go" is irregular – past is "went".',rule:'Irregular past: go → went'},
      {q:'I am go to school now.',error:'go',correction:'going',exp:'Present Continuous needs verb+ing after "am".',rule:'am/is/are + verb+ing'},
      {q:'She will goes to the park tomorrow.',error:'goes',correction:'go',exp:'"Will" is always followed by the base verb.',rule:'will + base verb (no -s)'},
    ],
  },

  1:{
    mcq:[
      {q:'Water ___ at 100 degrees Celsius.',opts:['boil','boils','boiled','is boiling'],ans:1,exp:'Scientific facts use Simple Present.',rule:'Simple Present for permanent facts/scientific truths'},
      {q:'They ___ dinner when the phone rang.',opts:['have','had','were having','are having'],ans:2,exp:'Past Continuous for ongoing action interrupted by another.',rule:'Past Continuous: was/were + verb+ing for interrupted action'},
      {q:'She ___ English for five years now.',opts:['learns','learned','has been learning','is learning'],ans:2,exp:'Present Perfect Continuous for ongoing past-to-present action.',rule:'has/have been + verb+ing for ongoing past-to-present action'},
      {q:'By the time she arrived he ___ already left.',opts:['had','has','was','will have'],ans:0,exp:'Past Perfect for action completed before another past event.',rule:'Past Perfect: had + past participle'},
      {q:'If it rains we ___ stay indoors.',opts:['will','would','shall','are'],ans:0,exp:'First Conditional: If + Simple Present → will + base verb.',rule:'First Conditional: If + present simple, will + base verb'},
    ],
    fill:[
      {q:'The Earth ___ (revolve) around the Sun.',ans:'revolves',exp:'Scientific fact → Simple Present.',rule:'Simple Present for permanent truths'},
      {q:'She ___ (study) when I called her.',ans:'was studying',exp:'Past Continuous for action in progress when another occurred.',rule:'was/were + verb+ing'},
      {q:'He ___ (not / finish) his project yet.',ans:'has not finished',exp:'"Yet" → Present Perfect Negative.',rule:'have/has + not + past participle + yet'},
      {q:'I ___ (live) here since 2015.',ans:'have been living',exp:'"Since" + ongoing action → Present Perfect Continuous.',rule:'have been + verb+ing + since'},
      {q:'By 2050 scientists ___ (find) a cure.',ans:'will have found',exp:'Future Perfect for completion before a future time.',rule:'will have + past participle'},
    ],
    error:[
      {q:'She have been working here since 2010.',error:'have',correction:'has',exp:'"She" → "has been".',rule:'She/He/It + has been + verb+ing'},
      {q:'He had went to the market before it closed.',error:'went',correction:'gone',exp:'Past Perfect uses past participle; go → gone.',rule:'Past Perfect: had + past participle (go → gone)'},
      {q:'They was playing cricket when I arrived.',error:'was',correction:'were',exp:'"They" is plural → "were".',rule:'They/We/You + were + verb+ing in Past Continuous'},
      {q:'If it will rain we will cancel the match.',error:'will rain',correction:'rains',exp:'If-clause in First Conditional uses Simple Present.',rule:'First Conditional: If + Simple Present (no "will" in if-clause)'},
      {q:'She is working here since five years.',error:'is working',correction:'has been working',exp:'"Since" requires Present Perfect Continuous.',rule:'have/has been + verb+ing + since/for'},
    ],
  },

  2:{
    mcq:[
      {q:'No sooner ___ she left than it started raining.',opts:['had','has','was','did'],ans:0,exp:'"No sooner…than" requires Past Perfect inversion.',rule:'No sooner had + subject + V3 + than + Simple Past'},
      {q:'She wishes she ___ harder in school.',opts:['studies','studied','had studied','will study'],ans:2,exp:'"Wish + Past Perfect" expresses regret about the past.',rule:'Wish + Past Perfect for past regrets'},
      {q:'He ___ for three hours before the match started.',opts:['practised','had been practising','has practised','was practising'],ans:1,exp:'Past Perfect Continuous for ongoing action before a past event.',rule:'had been + verb+ing before + past event'},
      {q:'By next year she ___ her degree.',opts:['finishes','finished','will finish','will have finished'],ans:3,exp:'Future Perfect for completion before a future time.',rule:'will have + past participle + by + future time'},
      {q:'The cake ___ by the time the guests arrived.',opts:['bakes','was baking','had been baked','is baked'],ans:2,exp:'Past Perfect Passive for earlier completed action.',rule:'Past Perfect Passive: had been + past participle'},
    ],
    fill:[
      {q:'Scarcely ___ (she / arrive) when the lights went out.',ans:'had she arrived',exp:'"Scarcely" triggers inversion: had + subject + V3.',rule:'Scarcely/Hardly/Barely + had + subject + V3 + when'},
      {q:'It is time we ___ (leave) — we are already late.',ans:'left',exp:'"It is time" + past simple (subjunctive).',rule:'"It is time" + subject + past simple'},
      {q:'They ___ (complete) the bridge by December.',ans:'will have completed',exp:'Future Perfect for completion by a deadline.',rule:'will have + past participle + by + time'},
      {q:'She insisted that he ___ (be) present at the meeting.',ans:'be',exp:'Mandative subjunctive after "insist that".',rule:'insist/suggest/demand that + subject + base verb'},
      {q:'Had I known earlier I ___ (help) you.',ans:'would have helped',exp:'Third Conditional result: would have + past participle.',rule:'Third Conditional: Had + V3, would have + V3'},
    ],
    error:[
      {q:'No sooner she left than it started raining.',error:'she left',correction:'had she left',exp:'"No sooner" requires Past Perfect inversion.',rule:'No sooner had + subject + V3 + than'},
      {q:'She wishes she studied harder last year.',error:'studied',correction:'had studied',exp:'"Wish + Past Perfect" for past regrets.',rule:'Wish + Past Perfect (had + V3) for regrets'},
      {q:'It is time you will start working.',error:'will start',correction:'started',exp:'"It is time" + past simple (not will).',rule:'"It is time" + subject + past simple'},
      {q:'He had been practise for three hours.',error:'practise',correction:'practising',exp:'Past Perfect Continuous: had been + verb+ing.',rule:'had been + verb+ing (not base verb)'},
      {q:'By next week they will finish the report.',error:'will finish',correction:'will have finished',exp:'Future Perfect needed for completion before a future point.',rule:'will have + past participle + by + future time'},
    ],
  },

  3:{
    mcq:[
      {q:'The experiment ___ three times before results were accepted.',opts:['repeated','was repeated','had been repeated','has been repeated'],ans:2,exp:'Past Perfect Passive for action completed before another past event.',rule:'Past Perfect Passive: had been + past participle'},
      {q:'It is essential that every applicant ___ the form.',opts:['submits','submit','will submit','submitted'],ans:1,exp:'Mandative Subjunctive: base verb after "essential that".',rule:'Mandative Subjunctive: essential/vital that + base verb'},
      {q:'Global temperatures ___ by 2°C since pre-industrial times.',opts:['rose','rise','have risen','had risen'],ans:2,exp:'Present Perfect for past action with ongoing present relevance.',rule:'Present Perfect: have/has + V3 for past-to-present relevance'},
      {q:'She ___ the city before she moved there.',opts:['visited','has visited','had visited','visits'],ans:2,exp:'Past Perfect for action completed before another past event.',rule:'Past Perfect: had + V3 for the earlier of two past events'},
      {q:'"___ the results be announced today!" she prayed.',opts:['Should','Would','Will','Did'],ans:0,exp:'Optative Subjunctive: "Should" for a formal wish.',rule:'Optative Subjunctive: Should/Would + base verb for formal wish'},
    ],
    fill:[
      {q:'Suppose you had unlimited resources what would you build? (use Supposing)',ans:'Supposing',exp:'"Supposing" introduces a hypothetical condition (= If).',rule:'"Supposing/Provided that/As long as" = conditional conjunctions'},
      {q:'The law requires that all drivers ___ (wear) a seatbelt.',ans:'wear',exp:'Mandative Subjunctive after "requires that".',rule:'require/insist/demand that + subject + base verb'},
      {q:'By the time rescuers arrived the survivors ___ (wait) for 40 hours.',ans:'had been waiting',exp:'Past Perfect Continuous: ongoing action before a past event.',rule:'had been + verb+ing before another past event'},
      {q:'The ancient texts ___ (discover) in 1945.',ans:'were discovered',exp:'Simple Past Passive for a completed past action.',rule:'Simple Past Passive: was/were + past participle'},
      {q:'She demanded that the report ___ (submit) immediately.',ans:'be submitted',exp:'Mandative Subjunctive Passive: be + past participle.',rule:'demand/insist that + subject + be + past participle'},
    ],
    error:[
      {q:'It is essential that every student follows the guidelines.',error:'follows',correction:'follow',exp:'Mandative Subjunctive uses base verb — no -s.',rule:'Mandative Subjunctive: essential that + subject + base verb (no -s)'},
      {q:'The scrolls were discover by archaeologists.',error:'discover',correction:'discovered',exp:'Passive voice needs the past participle.',rule:'Passive: was/were + past participle'},
      {q:'She had been wait for two hours.',error:'wait',correction:'waiting',exp:'Past Perfect Continuous: had been + verb+ing.',rule:'had been + verb+ing (not base verb)'},
      {q:'Had she worked harder she would achieve more.',error:'would achieve',correction:'would have achieved',exp:'Third Conditional result: would have + past participle.',rule:'Third Conditional: Had + V3 → would have + past participle'},
      {q:'Global temperatures rose by 2°C since 1900.',error:'rose',correction:'have risen',exp:'"Since" with ongoing relevance → Present Perfect.',rule:'Present Perfect with "since" for past-to-present action'},
    ],
  },

  4:{
    mcq:[
      {q:'The contract stipulates that all disputes ___ be referred to arbitration.',opts:['shall','will','should','must'],ans:0,exp:'"Shall" in legal documents = mandatory obligation.',rule:'"Shall" in legal/formal documents = binding obligation'},
      {q:'"The Tempest" ___ written by Shakespeare in 1611.',opts:['was','were','has been','is'],ans:0,exp:'Simple Past Passive for a completed past action.',rule:'Simple Past Passive: was/were + past participle'},
      {q:'___ he submitted the application he would have got the scholarship.',opts:['If','Had','Unless','Should'],ans:1,exp:'Third Conditional Inversion: Had + subject + V3.',rule:'Inverted Third Conditional: Had + subject + V3, would have + V3'},
      {q:'It is imperative that the data ___ verified before publication.',opts:['is','be','was','will be'],ans:1,exp:'Mandative Subjunctive: base form "be" after "imperative that".',rule:'Mandative Subjunctive: imperative/essential that + be'},
      {q:'Twenty years ___ a long time to wait.',opts:['is','are','was','were'],ans:0,exp:'Periods of time as a single span → singular verb.',rule:'Periods of time treated as one unit → singular verb'},
    ],
    fill:[
      {q:'The amendments ___ (be) submitted by Friday — the policy requires it.',ans:'are to be',exp:'"Are to be" = formal passive obligation.',rule:'"Be to" + passive: are to be + past participle'},
      {q:'She would sooner face failure than ___ (betray) her principles.',ans:'betray',exp:'"Would sooner…than" + base verb.',rule:'"Would sooner + base verb + than + base verb"'},
      {q:'It is imperative that every delegate ___ (be) present.',ans:'be',exp:'Mandative Subjunctive after "imperative that".',rule:'Mandative Subjunctive: imperative that + subject + base verb'},
      {q:'Had the government acted sooner the crisis ___ (might avoid, passive).',ans:'might have been avoided',exp:'Third Conditional passive result.',rule:'Third Conditional Passive: Had + V3, might/could/would have been + V3'},
      {q:'The data ___ (verify, passive obligation) before submission.',ans:'are to be verified',exp:'"Are to be" = formal passive obligation.',rule:'"Be to" + passive: are to be + past participle'},
    ],
    error:[
      {q:'It is imperative that she is present at the hearing.',error:'is',correction:'be',exp:'Mandative Subjunctive: "be" after imperative that.',rule:'Mandative Subjunctive: imperative that + subject + be (NOT is)'},
      {q:'The contract stipulates that disputes will be referred.',error:'will',correction:'shall',exp:'"Shall" in legal documents = binding obligation.',rule:'"Shall" in contracts = mandatory; "will" = future intention'},
      {q:'She would sooner to face failure than give up.',error:'to face',correction:'face',exp:'"Would sooner" + base verb (no "to").',rule:'"Would sooner/rather + base verb" (no infinitive marker "to")'},
      {q:'The reports are to submitted by end of day.',error:'submitted',correction:'be submitted',exp:'"Are to be submitted" — passive infinitive.',rule:'"Be to" + passive: are to be + past participle'},
      {q:'Had they invested earlier they would now profiting.',error:'profiting',correction:'be profiting',exp:'"Would now be profiting" — modal + continuous.',rule:'Mixed Conditional: would/could/might + now + be + verb+ing'},
    ],
  },

  5:{
    mcq:[
      {q:'She ___ the novel three times before the exam.',opts:['reads','read','has read','had read'],ans:3,exp:'Past Perfect: action completed before another past reference point.',rule:'Past Perfect: had + V3 for action completed before another past event'},
      {q:'By this time next year he ___ his training.',opts:['completes','will complete','will have completed','is completing'],ans:2,exp:'Future Perfect for completion before a specific future point.',rule:'Future Perfect: will have + V3 + by + future time'},
      {q:'If she ___ harder she would pass.',opts:['studies','studied','has studied','had studied'],ans:1,exp:'Second Conditional: If + Past Simple → would + base verb.',rule:'Second Conditional: If + past simple, would + base verb (unreal present)'},
      {q:'He suggested that the meeting ___ postponed.',opts:['is','be','was','should be'],ans:1,exp:'Mandative Subjunctive: base verb after "suggested that".',rule:'Mandative Subjunctive: suggest/demand/insist that + base verb'},
      {q:'The bridge ___ for six months when it finally opened.',opts:['built','was built','had been built','has been built'],ans:2,exp:'Past Perfect Passive for ongoing passive action before a past event.',rule:'Past Perfect Passive: had been + past participle'},
    ],
    fill:[
      {q:'She ___ (practise) the piano for two hours before the concert.',ans:'had been practising',exp:'Past Perfect Continuous for ongoing action before a past event.',rule:'had been + verb+ing before + past event'},
      {q:'By 2030 robots ___ (replace) many manual jobs.',ans:'will have replaced',exp:'Future Perfect: completion before 2030.',rule:'will have + V3 + by + future time'},
      {q:'It is vital that each entry ___ (check) twice.',ans:'be checked',exp:'Mandative Subjunctive Passive: be + past participle.',rule:'vital/essential that + subject + be + past participle'},
      {q:'If I ___ (be) taller I would play basketball professionally.',ans:'were',exp:'Second Conditional: "were" for all subjects (hypothetical).',rule:'Second Conditional: If I/he/she/it were (hypothetical)'},
      {q:'She ___ (not see) him since he moved abroad.',ans:'has not seen',exp:'"Since" + Present Perfect Negative.',rule:'have/has + not + V3 + since'},
    ],
    error:[
      {q:'If she would study harder she would pass.',error:'would study',correction:'studied',exp:'Second Conditional if-clause: past simple (not would).',rule:'Second Conditional: If + past simple, would + base verb'},
      {q:'He suggested that the meeting is postponed.',error:'is',correction:'be',exp:'Mandative Subjunctive: "be" after suggest.',rule:'suggest/insist/demand that + subject + base verb'},
      {q:'By 2030 scientists will find the cure.',error:'will find',correction:'will have found',exp:'Future Perfect needed for completion before 2030.',rule:'will have + V3 + by + future time'},
      {q:'She had been practise for two hours.',error:'practise',correction:'practising',exp:'Past Perfect Continuous: had been + verb+ing.',rule:'had been + verb+ing (not base verb)'},
      {q:'I have not saw him since Monday.',error:'saw',correction:'seen',exp:'Present Perfect uses past participle; see → seen.',rule:'Present Perfect: have/has + past participle (see → seen)'},
    ],
  },

  6:{
    mcq:[
      {q:'She ___ in this city since she was born.',opts:['lives','lived','has lived','is living'],ans:2,exp:'"Since she was born" → Present Perfect for ongoing past-to-present.',rule:'Present Perfect: have/has + V3 + since/for'},
      {q:'No sooner ___ the bell rung than students rushed out.',opts:['had','has','was','did'],ans:0,exp:'"No sooner…than" uses Past Perfect inversion.',rule:'No sooner had + subject + V3 + than + Simple Past'},
      {q:'The policy ___ three times in the last decade.',opts:['revised','has been revised','had been revised','is revised'],ans:1,exp:'Present Perfect Passive for past actions with present relevance.',rule:'Present Perfect Passive: has/have been + past participle'},
      {q:'If she ___ the truth earlier things would have been different.',opts:['tells','told','had told','would tell'],ans:2,exp:'Third Conditional: If + Past Perfect → would have + V3.',rule:'Third Conditional: If + Past Perfect, would have + V3'},
      {q:'"___ this day mark a new beginning!" the leader declared.',opts:['May','Shall','Will','Can'],ans:0,exp:'Optative Subjunctive: "May" for a wish.',rule:'Optative Subjunctive: May + subject + base verb for wishes'},
    ],
    fill:[
      {q:'Hardly ___ (she / sit down) when the alarm rang.',ans:'had she sat down',exp:'"Hardly" triggers inversion: had + subject + V3.',rule:'Hardly/Scarcely + had + subject + V3 + when'},
      {q:'The report ___ (present, passive) to the board next Monday.',ans:'will be presented',exp:'Future Passive: will be + past participle.',rule:'Future Passive: will be + past participle'},
      {q:'It is necessary that all staff ___ (attend) the seminar.',ans:'attend',exp:'Mandative Subjunctive: base verb after "necessary that".',rule:'necessary/essential/vital that + subject + base verb'},
      {q:'By the time I finish she ___ (leave) already.',ans:'will have left',exp:'Future Perfect: action completed before a future point.',rule:'will have + V3 + by the time'},
      {q:'She ___ (work) on this project for three months now.',ans:'has been working',exp:'Present Perfect Continuous for ongoing action from past to present.',rule:'has/have been + verb+ing + for/since'},
    ],
    error:[
      {q:'No sooner she left than the rain started.',error:'she left',correction:'had she left',exp:'"No sooner" requires Past Perfect inversion.',rule:'No sooner had + subject + V3 + than'},
      {q:'If she told the truth things would have been different.',error:'told',correction:'had told',exp:'Third Conditional if-clause: Past Perfect.',rule:'Third Conditional: If + Past Perfect (had + V3)'},
      {q:'It is necessary that all staff attends the seminar.',error:'attends',correction:'attend',exp:'Mandative Subjunctive: base verb — no -s.',rule:'necessary that + subject + base verb (no -s)'},
      {q:'She has been work on this project for three months.',error:'work',correction:'working',exp:'Present Perfect Continuous: has been + verb+ing.',rule:'has/have been + verb+ing'},
      {q:'The policy has been revised for the last decade.',error:'for',correction:'in',exp:'"In the last decade" is the correct idiom.',rule:'Use "in the last decade" (not "for") for a period up to now'},
    ],
  },

  7:{
    mcq:[
      {q:'The team ___ their strategy for weeks before the tournament.',opts:['refined','has refined','had been refining','was refining'],ans:2,exp:'Past Perfect Continuous for ongoing action before a past event.',rule:'Past Perfect Continuous: had been + verb+ing'},
      {q:'Were I in your position I ___ accept the offer.',opts:['will','would','shall','could'],ans:1,exp:'"Were I" = Second Conditional inversion (formal).',rule:'Second Conditional Inversion: Were I/he/she, would + base verb'},
      {q:'The new policy ___ by the parliament next session.',opts:['will pass','will be passed','is passing','passes'],ans:1,exp:'Future Passive: will be + past participle.',rule:'Future Passive: will be + past participle'},
      {q:'She acts as if she ___ the entire project alone.',opts:['does','did','had done','has done'],ans:2,exp:'"As if" + Past Perfect for a hypothetical past situation.',rule:'"As if/as though" + Past Perfect for hypothetical past'},
      {q:'Provided that you ___ on time you will be admitted.',opts:['arrive','arrived','have arrived','will arrive'],ans:0,exp:'"Provided that" uses Simple Present in the conditional clause.',rule:'"Provided that/As long as" + Simple Present in conditional clause'},
    ],
    fill:[
      {q:'Were she here now she ___ (advise) us better.',ans:'would advise',exp:'Second Conditional Inversion: Were + subject → would + base verb.',rule:'Were + subject, would + base verb'},
      {q:'The decision ___ (review, passive) by the board before announcement.',ans:'will be reviewed',exp:'Future Passive: will be + past participle.',rule:'Future Passive: will be + past participle'},
      {q:'She acts as if she ___ (own) the whole company.',ans:'owned',exp:'"As if" + past simple for unreal present hypothetical.',rule:'"As if/as though" + past simple for unreal present'},
      {q:'Provided that you ___ (submit) the form you will receive the grant.',ans:'submit',exp:'"Provided that" uses Simple Present.',rule:'"Provided that" + Simple Present → will + base verb'},
      {q:'The team ___ (refine) their strategy for weeks before the match.',ans:'had been refining',exp:'Past Perfect Continuous for action before a past event.',rule:'had been + verb+ing before + past event'},
    ],
    error:[
      {q:'Were I you I will accept the offer.',error:'will',correction:'would',exp:'Second Conditional result: would (not will).',rule:'Second Conditional: Were + subject, would + base verb'},
      {q:'The policy will be pass by parliament.',error:'pass',correction:'passed',exp:'Future Passive: will be + past participle.',rule:'will be + past participle (not base verb)'},
      {q:'She acts as if she has owned the company.',error:'has owned',correction:'owned',exp:'"As if" + past simple for unreal present.',rule:'"As if" + past simple (not Present Perfect) for unreal present'},
      {q:'The team had been refine their strategy for weeks.',error:'refine',correction:'refining',exp:'Past Perfect Continuous: had been + verb+ing.',rule:'had been + verb+ing (not base verb)'},
      {q:'Provided that you will submit the form you will receive the grant.',error:'will submit',correction:'submit',exp:'"Provided that" uses Simple Present (no "will") in the clause.',rule:'"Provided that" + Simple Present (no will in the if-clause)'},
    ],
  },

  8:{
    mcq:[
      {q:'Scarcely ___ she sat down when the phone rang.',opts:['had','has','was','did'],ans:0,exp:'"Scarcely…when" requires Past Perfect inversion.',rule:'Scarcely had + subject + V3 + when + Simple Past'},
      {q:'She would rather I ___ the project myself.',opts:['do','did','have done','would do'],ans:1,exp:'"Would rather + subject + past simple" = preference about someone else.',rule:'"Would rather + subject + past simple" for preference about another person'},
      {q:'The ruins ___ to date back 3,000 years.',opts:['believed','are believed','have believed','believe'],ans:1,exp:'Reporting passive: are believed + to infinitive.',rule:'Reporting passive: is/are + believed/said/thought + to + infinitive'},
      {q:'I ___ rather go now before it gets dark.',opts:['would','should','could','had'],ans:0,exp:'"Would rather + base verb" = personal preference.',rule:'"Would rather + base verb" for personal preference'},
      {q:'Assuming that the loan is approved construction ___ begin.',opts:['will','would','shall','can'],ans:0,exp:'"Assuming that" = conditional; result clause uses "will".',rule:'"Assuming that" + present → will + base verb in result clause'},
    ],
    fill:[
      {q:'Scarcely ___ (she / finish) her speech when the applause broke out.',ans:'had she finished',exp:'"Scarcely" → inversion: had + subject + V3.',rule:'Scarcely/Barely/Hardly + had + subject + V3 + when'},
      {q:'She would rather he ___ (tell) her the truth.',ans:'told',exp:'"Would rather + subject + past simple" for preference about others.',rule:'"Would rather + subject + past simple"'},
      {q:'The monument ___ (believe, passive) to be over 2,000 years old.',ans:'is believed',exp:'Reporting passive: is believed + to be.',rule:'Reporting passive: is/are + believed/said/thought + to be'},
      {q:'I would rather ___ (stay) than leave early.',ans:'stay',exp:'"Would rather + base verb" for personal preference.',rule:'"Would rather + base verb" (no "to")'},
      {q:'Assuming that the funds ___ (approve, passive) we will proceed.',ans:'are approved',exp:'"Assuming that" + passive present for a condition.',rule:'"Assuming that" + present passive in conditional clause'},
    ],
    error:[
      {q:'Scarcely she sat down when the alarm went off.',error:'she sat',correction:'had she sat',exp:'"Scarcely" requires Past Perfect inversion.',rule:'Scarcely had + subject + V3 + when'},
      {q:'She would rather he tells her the truth.',error:'tells',correction:'told',exp:'"Would rather + subject + past simple".',rule:'"Would rather + subject + past simple" (not present)'},
      {q:'The ruins are believe to be ancient.',error:'believe',correction:'believed',exp:'Passive: are + past participle.',rule:'is/are + past participle in passive reporting'},
      {q:'I would rather to stay than leave.',error:'to stay',correction:'stay',exp:'"Would rather" + base verb (no "to").',rule:'"Would rather + base verb" (no infinitive marker "to")'},
      {q:'Assuming that the funds will approve we proceed.',error:'will approve',correction:'are approved',exp:'"Assuming that" + passive present.',rule:'"Assuming that" + present passive in conditional clause'},
    ],
  },

  9:{
    mcq:[
      {q:'The findings ___ be interpreted with caution according to the protocol.',opts:['should','must','are to','need to'],ans:2,exp:'"Are to" = formal obligation from a protocol.',rule:'"Be to" = formal scheduled/official obligation'},
      {q:'Not until she resigned ___ the extent of the fraud become known.',opts:['became','had the extent','was it','did it'],ans:1,exp:'"Not until" fronted triggers inversion in the main clause.',rule:'Fronted "Not until": Not until + clause + had/did + subject + verb'},
      {q:'She ___ sooner resign than compromise her integrity.',opts:['would','should','could','might'],ans:0,exp:'"Would sooner + base verb + than" = strong preference.',rule:'"Would sooner/rather + base verb + than + base verb"'},
      {q:'The law requires that every vehicle ___ registered annually.',opts:['is','be','was','will be'],ans:1,exp:'Mandative Subjunctive Passive: be + past participle.',rule:'require/demand that + subject + be + past participle'},
      {q:'Had they acted promptly the situation ___ been contained.',opts:['could','could have','would','might'],ans:1,exp:'Third Conditional result: could have + past participle.',rule:'Third Conditional: Had + V3, could/would/might have + V3'},
    ],
    fill:[
      {q:'Not until the results ___ (announce, passive) did she relax.',ans:'were announced',exp:'Simple Past Passive after "Not until" clause.',rule:'"Not until" clause + Simple Past Passive'},
      {q:'The regulation requires that all exports ___ (certify, passive).',ans:'be certified',exp:'Mandative Subjunctive Passive: be + past participle.',rule:'require/insist that + subject + be + past participle'},
      {q:'She would sooner face the consequences than ___ (lie).',ans:'lie',exp:'"Would sooner…than" + base verb.',rule:'"Would sooner + base verb + than + base verb"'},
      {q:'Had the bridge ___ (inspect, passive) regularly the collapse might have been prevented.',ans:'been inspected',exp:'Passive Third Conditional: Had + been + past participle.',rule:'Passive Third Conditional: Had + subject + been + past participle'},
      {q:'The submissions ___ (be, passive obligation) reviewed within 48 hours.',ans:'are to be',exp:'"Are to be" = formal passive obligation.',rule:'"Be to" + passive: are to be + past participle'},
    ],
    error:[
      {q:'Not until she resigned the extent of the fraud became known.',error:'became known',correction:'did the extent of the fraud become known',exp:'"Not until" fronted requires inversion in the main clause.',rule:'Fronted "Not until" → inversion: did/had + subject + verb'},
      {q:'The regulation requires that all exports are certified.',error:'are',correction:'be',exp:'Mandative Subjunctive: "be" (not "are") after require.',rule:'require/insist/demand that + subject + be (Mandative Subjunctive)'},
      {q:'She would sooner to resign than compromise.',error:'to resign',correction:'resign',exp:'"Would sooner" + base verb (no "to").',rule:'"Would sooner + base verb" (no "to")'},
      {q:'Had the bridge inspected regularly it would not have collapsed.',error:'inspected',correction:'been inspected',exp:'Passive Third Conditional: Had + been + past participle.',rule:'Passive Third Conditional: Had + subject + been + past participle'},
      {q:'The findings are to interpreted carefully.',error:'interpreted',correction:'be interpreted',exp:'"Are to be interpreted" — passive infinitive.',rule:'"Be to" + passive: are to be + past participle'},
    ],
  },

  10:{
    mcq:[
      {q:'She ___ have warned us — she knew about the danger.',opts:['should','could','might','would'],ans:0,exp:'"Should have" = past obligation not fulfilled; criticism.',rule:'"Should have" = past obligation not met; criticism of past action'},
      {q:'The ancient city ___ to have been founded in 500 BC.',opts:['is said','says','said','has said'],ans:0,exp:'Reporting passive: "is said to have been + past participle".',rule:'Reporting passive: is/are said/believed/thought + to have + past participle'},
      {q:'No sooner ___ the announcement made than the market reacted.',opts:['had been','was','has been','is'],ans:0,exp:'"No sooner…than" + Passive Past Perfect inversion.',rule:'No sooner had + subject + been + V3 + than + Simple Past'},
      {q:'"___ the sun shine brightly on this great day!" the poet wrote.',opts:['Should','Would','May','Can'],ans:2,exp:'Optative Subjunctive: "May" for a wish.',rule:'Optative Subjunctive: May + subject + base verb for wish/prayer'},
      {q:'The treaty ___ by all members before it takes effect.',opts:['must ratify','must be ratified','must ratified','must have ratified'],ans:1,exp:'"Must be ratified" = strong passive obligation.',rule:'Modal Passive Obligation: must/shall be + past participle'},
    ],
    fill:[
      {q:'The ancient city ___ (say, passive) to have been founded in 500 BC.',ans:'is said',exp:'Reporting passive: is said + to have been.',rule:'Reporting passive: is/are + said/believed + to have + V3'},
      {q:'No sooner ___ (the prize / announce, passive) than the hall erupted.',ans:'had the prize been announced',exp:'Passive "No sooner" inversion.',rule:'No sooner had + subject + been + V3 (passive) + than'},
      {q:'She ___ (should / warn) us — she was aware of the risk.',ans:'should have warned',exp:'"Should have" = past obligation not met.',rule:'"Should have" + past participle for unfulfilled past obligation'},
      {q:'"___ (May) your efforts be rewarded!" the mentor said.',ans:'May',exp:'Optative Subjunctive: May + subject + base verb for wish.',rule:'Optative Subjunctive: May + base verb'},
      {q:'The treaty ___ (ratify, passive obligation) by all members before it takes effect.',ans:'must be ratified',exp:'"Must be ratified" = strong passive obligation.',rule:'Modal Passive: must/shall be + past participle'},
    ],
    error:[
      {q:'The city is said to be founded in 500 BC.',error:'to be founded',correction:'to have been founded',exp:'Reporting passive about a past event: to have been + past participle.',rule:'For past reference: is said to HAVE BEEN + past participle'},
      {q:'No sooner the prize was announced than the hall erupted.',error:'the prize was announced',correction:'had the prize been announced',exp:'"No sooner" requires Past Perfect inversion.',rule:'No sooner had + subject + been + V3 + than'},
      {q:'She should warned us about the danger.',error:'should warned',correction:'should have warned',exp:'"Should have" + past participle for past obligation.',rule:'"Should have" + past participle (not should + base verb)'},
      {q:'May the sun shines brightly on this day!',error:'shines',correction:'shine',exp:'Optative Subjunctive: base verb (no -s).',rule:'Optative Subjunctive: May + subject + BASE verb (no -s)'},
      {q:'The treaty must ratified by all members.',error:'must ratified',correction:'must be ratified',exp:'Modal Passive: must + be + past participle.',rule:'Modal Passive: modal + be + past participle'},
    ],
  },

  11:{
    mcq:[
      {q:'Seldom ___ such a remarkable discovery been made in modern times.',opts:['has','have','had','is'],ans:0,exp:'"Seldom" fronted causes inversion: Seldom has + subject + V3.',rule:'Fronted negative adverbs: Seldom/Rarely/Never + has/have + subject + V3'},
      {q:'The data ___ to demonstrate a link between the variables.',opts:['would','appear','appears to','seem'],ans:1,exp:'"Appear to" = hedging language in academic writing.',rule:'Hedging in academic writing: appear to/seem to + base verb'},
      {q:'Rarely ___ a linguist of such brilliance emerge in a generation.',opts:['does','do','is','has'],ans:0,exp:'"Rarely" fronted = inversion: Rarely does + subject + base verb.',rule:'Fronted "Rarely": Rarely does + subject + base verb'},
      {q:'She ___ rewrite the entire chapter only to find the original was better.',opts:['had to','was to','used to','should'],ans:0,exp:'"Had to" = past obligation/necessity.',rule:'"Had to" = past obligation; "was to" = past formal plan'},
      {q:'The proposal ___ under review when the funding was withdrawn.',opts:['was','is','had been','were'],ans:2,exp:'Past Perfect for ongoing state at the time of another past event.',rule:'Past Perfect: had been for state/condition at the time of another past event'},
    ],
    fill:[
      {q:'Seldom ___ (such a result / achieve, passive) in a single attempt.',ans:'has such a result been achieved',exp:'"Seldom" inversion + Passive Perfect.',rule:'Seldom has + subject + been + V3 (passive inversion)'},
      {q:'The study ___ (appear) to confirm the hypothesis.',ans:'appears',exp:'"Appears to" = hedging language.',rule:'"Appear to/seem to + base verb" for hedged academic claims'},
      {q:'Rarely ___ (a discovery / make, passive) that changes science so profoundly.',ans:'is a discovery made',exp:'"Rarely is + subject + past participle" = passive inversion.',rule:'Rarely/Seldom + is/are + subject + past participle (passive inversion)'},
      {q:'She ___ (had to) rewrite the chapter three times.',ans:'had to',exp:'"Had to" = past necessity.',rule:'"Had to" for past obligation/necessity'},
      {q:'The proposal ___ (be) under review for six months when it was cancelled.',ans:'had been',exp:'Past Perfect for ongoing state up to another past event.',rule:'Past Perfect: had been + noun/adjective phrase'},
    ],
    error:[
      {q:'Seldom such a discovery has been made.',error:'Seldom such a discovery has',correction:'Seldom has such a discovery',exp:'"Seldom" fronted = inversion: Seldom has + subject.',rule:'Fronted negative adverb: Seldom has + subject + V3'},
      {q:'Rarely a linguist of such brilliance does emerge.',error:'a linguist of such brilliance does emerge',correction:'does a linguist of such brilliance emerge',exp:'"Rarely" + does + subject + base verb (inversion).',rule:'Fronted "Rarely": Rarely does + subject + base verb'},
      {q:'The data appears to demonstrate a strong link.',error:'appears',correction:'appear',exp:'"Data" is plural → "appear".',rule:'"Data" is plural → plural verb: the data appear/show/suggest'},
      {q:'She had to rewritten the chapter three times.',error:'rewritten',correction:'rewrite',exp:'"Had to" + base verb.',rule:'"Had to" + base verb (infinitive)'},
      {q:'The proposal had been under review for six months before cancelled.',error:'before cancelled',correction:'before it was cancelled',exp:'A full clause is needed: before + subject + verb.',rule:'Use a full clause: "before it was cancelled" (not just "before cancelled")'},
    ],
  },

  12:{
    mcq:[
      {q:'Little ___ he know that this decision would change his life.',opts:['does','did','has','had'],ans:1,exp:'"Little did he know" = emphatic past narrative inversion.',rule:'Fronted "Little/Rarely/Never": Little did + subject + base verb (past inversion)'},
      {q:'The manuscript ___ lost for centuries before being rediscovered in 1920.',opts:['was','had been','has been','is'],ans:1,exp:'Past Perfect Passive for a state completed before another past event.',rule:'Past Perfect Passive: had been + V3 for earlier past state/action'},
      {q:'She is reported to ___ significant progress in her research.',opts:['make','be making','have made','made'],ans:2,exp:'Reporting structure with perfect infinitive: to have + V3.',rule:'Reporting passive: is reported/said/believed + to have + V3'},
      {q:'Not since the Renaissance ___ such artistic genius flourished.',opts:['has','have','had','is'],ans:0,exp:'"Not since" fronted = inversion.',rule:'Fronted "Not since": Not since + time + has/have + subject + V3'},
      {q:'As the evidence ___ further the pattern becomes clearer.',opts:['is analysed','was analysed','has been analysed','having been analysed'],ans:0,exp:'Present Passive in as-clause.',rule:'Passive in temporal clause: as/when + subject + is/are + V3'},
    ],
    fill:[
      {q:'Little ___ (they / realise) the impact their discovery would have.',ans:'did they realise',exp:'"Little did" = past narrative inversion.',rule:'Fronted "Little": Little did + subject + base verb'},
      {q:'The manuscript ___ (lose, passive) for centuries before being found.',ans:'had been lost',exp:'Past Perfect Passive: had been + past participle.',rule:'Past Perfect Passive: had been + past participle'},
      {q:'She is reported to ___ (make) a breakthrough in quantum computing.',ans:'have made',exp:'Reporting passive + perfect infinitive: to have + V3.',rule:'is reported/said + to have + V3 for past reference'},
      {q:'Not since 1945 ___ (such / violence / see, passive) on this scale.',ans:'has such violence been seen',exp:'"Not since" + Present Perfect Passive inversion.',rule:'Not since + time + has/have + subject + been + V3'},
      {q:'As the evidence ___ (analyse, passive) the pattern becomes clearer.',ans:'is analysed',exp:'Present Passive in as-clause.',rule:'Passive in temporal clause: as/when + subject + is/are + V3'},
    ],
    error:[
      {q:'Little he did know that this would happen.',error:'he did know',correction:'did he know',exp:'"Little" fronted = inversion: did + subject + base verb.',rule:'Fronted "Little": Little did + subject + base verb (inversion)'},
      {q:'The manuscript was lost for centuries before rediscovered.',error:'was lost',correction:'had been lost',exp:'Past Perfect Passive needed for action earlier than another past event.',rule:'Past Perfect Passive: had been + V3 (for the earlier of two past events)'},
      {q:'She is reported to make a breakthrough last year.',error:'to make',correction:'to have made',exp:'Past reference in reporting structure: to have + V3.',rule:'is reported + to have + V3 (for past reference)'},
      {q:'Not since 1945 such violence has been seen.',error:'such violence has been seen',correction:'has such violence been seen',exp:'"Not since" fronted = inversion in main clause.',rule:'Not since + time + has/have + subject + V3 (inversion)'},
      {q:'As the evidence is analysing further the pattern becomes clear.',error:'is analysing',correction:'is analysed',exp:'Passive needed: evidence is analysed (by researchers).',rule:'Passive: subject + is/are + past participle (not -ing)'},
    ],
  },

}, // end tenses


/* ══════════════════════════════════════════════════════════════════
   A R T I C L E S
══════════════════════════════════════════════════════════════════ */
articles:{

  jr_kg:{
    mcq:[
      {q:'I have ___ apple in my bag.',opts:['a','an','the','—'],ans:1,exp:'"Apple" starts with a vowel sound — use "an".',rule:'Use "an" before vowel sounds: an apple, an egg, an umbrella'},
      {q:'He has ___ dog named Tommy.',opts:['a','an','the','—'],ans:0,exp:'"Dog" starts with consonant /d/ — use "a".',rule:'Use "a" before consonant sounds'},
      {q:'___ sky is blue today.',opts:['A','An','The','—'],ans:2,exp:'"The sky" — unique noun.',rule:'"The" for unique nouns (the sky, the sun, the moon)'},
      {q:'She is ___ teacher.',opts:['a','an','the','—'],ans:0,exp:'"Teacher" starts with consonant /t/ — use "a".',rule:'"a" before consonant sounds'},
      {q:'I saw ___ elephant at the zoo.',opts:['a','an','the','—'],ans:1,exp:'"Elephant" starts with vowel sound — use "an".',rule:'"an" before vowel sounds'},
    ],
    fill:[
      {q:'There is ___ (a/an) orange on the table.',ans:'an',exp:'"Orange" starts with vowel sound — use "an".',rule:'"an" before vowel sounds'},
      {q:'___ (A/The) boy next door is my friend.',ans:'The',exp:'"The boy next door" = specific known person.',rule:'"The" for specific/known nouns'},
      {q:'She wants to be ___ (a/an) engineer.',ans:'an',exp:'"Engineer" starts with vowel sound /ɛ/.',rule:'"an" before vowel sounds'},
      {q:'He gave me ___ (a/an) useful book.',ans:'a',exp:'"Useful" starts with consonant sound /j/.',rule:'"a" when the word starts with a consonant SOUND'},
      {q:'___ (The/A) sun rises in the east.',ans:'The',exp:'"The sun" = unique.',rule:'"The" with unique objects (the sun, the moon, the earth)'},
    ],
    error:[
      {q:'She ate a orange.',error:'a',correction:'an',exp:'"Orange" starts with vowel sound.',rule:'"an" before vowel sounds'},
      {q:'He is a honest man.',error:'a',correction:'an',exp:'"Honest" starts with vowel sound /ɒ/ (silent h).',rule:'"an" before words with a vowel SOUND (silent h: hour, heir, honest)'},
      {q:'I met an university professor.',error:'an',correction:'a',exp:'"University" sounds like "you-niversity" — consonant sound /j/.',rule:'"a" before consonant sounds even if spelled with a vowel'},
      {q:'She plays a violin.',error:'a',correction:'the',exp:'"The" is used before musical instruments.',rule:'"the" before musical instruments'},
      {q:'The gold is a precious metal.',error:'The gold',correction:'Gold',exp:'No article for general statements about materials.',rule:'No article for materials/uncountable nouns in a general sense'},
    ],
  },

  sr_kg:{
    mcq:[
      {q:'He returned home after ___ hour-long journey.',opts:['a','an','the','—'],ans:1,exp:'"Hour-long" starts with vowel sound /aʊ/.',rule:'"an" before vowel sounds: an hour, an honour, an heir'},
      {q:'___ rich should help the poor.',opts:['A','An','The','—'],ans:2,exp:'"The + adjective" = a group of people.',rule:'"The" + adjective = a group of people (the rich, the poor)'},
      {q:'She plays ___ piano at school.',opts:['a','an','the','—'],ans:2,exp:'"The" before musical instruments.',rule:'"the" before musical instruments'},
      {q:'He is ___ European.',opts:['a','an','the','—'],ans:0,exp:'"European" starts with /j/ — consonant sound.',rule:'"a" before consonant sounds even if spelled with a vowel'},
      {q:'I saw a lion. ___ lion was huge.',opts:['A','An','The','—'],ans:2,exp:'Second mention = specific reference → "The".',rule:'First mention = a/an; second mention = the (definite)'},
    ],
    fill:[
      {q:'He has ___ (a/an) MBA degree.',ans:'an',exp:'"MBA" = /ɛm biː eɪ/ — starts with vowel sound.',rule:'"an" before abbreviations that start with a vowel sound'},
      {q:'___ (A/The) Nile is the longest river in Africa.',ans:'The',exp:'Rivers take "the".',rule:'"The" with rivers, seas, oceans'},
      {q:'She is ___ (a/an/the) best singer in her class.',ans:'the',exp:'Superlatives always take "the".',rule:'"the" before superlatives'},
      {q:'Gold is ___ (a/the/—) precious metal.',ans:'a',exp:'"A precious metal" = classifying gold as one type.',rule:'"a/an" for classification: "X is a Y"'},
      {q:'He plays ___ (a/an/the/—) cricket.',ans:'',exp:'No article before sports and games.',rule:'No article before sports/games: cricket, chess, tennis'},
    ],
    error:[
      {q:'He is an European citizen.',error:'an',correction:'a',exp:'"European" starts with /j/ consonant sound.',rule:'"a" before consonant sounds even if spelled with a vowel'},
      {q:'She plays a violin in the orchestra.',error:'a',correction:'the',exp:'"The" before musical instruments.',rule:'"the" before names of musical instruments'},
      {q:'Nile is the longest river in Africa.',error:'Nile',correction:'The Nile',exp:'Rivers take "the".',rule:'"The" with rivers (the Nile, the Amazon, the Ganges)'},
      {q:'He is a best student in the school.',error:'a',correction:'the',exp:'Superlatives take "the".',rule:'"the" before superlatives: the best, the most'},
      {q:'She plays the cricket on weekends.',error:'the',correction:'',exp:'No article before sports.',rule:'No article before sports and games'},
    ],
  },

  1:{
    mcq:[
      {q:'___ Himalayas are the highest mountains in the world.',opts:['A','An','The','—'],ans:2,exp:'Mountain ranges take "the".',rule:'"The" with mountain ranges (the Himalayas, the Alps)'},
      {q:'She gave me ___ good advice.',opts:['a','an','the','—'],ans:3,exp:'"Advice" is uncountable — no article.',rule:'No article with uncountable nouns (advice, information, news)'},
      {q:'___ French love their cuisine.',opts:['The','A','An','—'],ans:0,exp:'"The French" = the French people.',rule:'"The" + nationality adjective = that nation\'s people'},
      {q:'He is ___ one-eyed pirate.',opts:['a','an','the','—'],ans:0,exp:'"One" starts with consonant sound /w/.',rule:'"a" before consonant sounds: a one-eyed man, a one-way street'},
      {q:'She plays ___ violin beautifully.',opts:['a','an','the','—'],ans:2,exp:'"The" before musical instruments.',rule:'"the" before musical instruments'},
    ],
    fill:[
      {q:'___ (A/An/The) Indian Ocean is the third largest ocean.',ans:'The',exp:'Oceans take "the".',rule:'"The" with oceans, seas, gulfs'},
      {q:'She is ___ (a/an) MBA graduate.',ans:'an',exp:'"MBA" starts with vowel sound.',rule:'"an" before abbreviations with vowel sounds'},
      {q:'She is ___ (a/an/the) best player on the team.',ans:'the',exp:'Superlatives take "the".',rule:'"the" before superlatives'},
      {q:'Gold is ___ (a/the/—) precious metal.',ans:'a',exp:'"A precious metal" — classifying gold as one type.',rule:'"a/an" for classification'},
      {q:'He plays ___ (a/an/the/—) hockey.',ans:'',exp:'No article before sports.',rule:'No article before sports: hockey, football, chess'},
    ],
    error:[
      {q:'Himalayas are the highest mountain range.',error:'Himalayas',correction:'The Himalayas',exp:'Mountain ranges take "the".',rule:'"The" with mountain ranges'},
      {q:'She plays the cricket on weekends.',error:'the',correction:'',exp:'No article before sports.',rule:'No article before names of sports'},
      {q:'The advice she gave was an useful tip.',error:'an',correction:'a',exp:'"Useful" starts with consonant sound /j/.',rule:'"a" before consonant sounds (useful = /j/ sound)'},
      {q:'She is a best player on the team.',error:'a',correction:'the',exp:'Superlatives take "the".',rule:'"the" before superlatives (the best, the most)'},
      {q:'He plays a violin in the orchestra.',error:'a',correction:'the',exp:'"The" before musical instruments.',rule:'"the" before instruments'},
    ],
  },

  2:{
    mcq:[
      {q:'___ accused was declared innocent by the court.',opts:['A','An','The','—'],ans:2,exp:'"The accused" = specific legal term.',rule:'"The" with nouns in legal contexts (the accused, the deceased)'},
      {q:'He earns ___ 80,000 rupees a month.',opts:['a','an','the','—'],ans:3,exp:'No article before specific amounts.',rule:'No article before specific numbers/amounts'},
      {q:'___ more you read ___ more you know.',opts:['The/the','A/an','—/—','The/a'],ans:0,exp:'"The more…the more" = correlative comparative.',rule:'"The + comparative, the + comparative" — both need "the"'},
      {q:'She was appointed ___ Chief Minister.',opts:['a','an','the','—'],ans:3,exp:'No article after "appointed" with a unique title.',rule:'No article after "elected/appointed/became" with unique titles'},
      {q:'He has ___ eye for detail.',opts:['a','an','the','—'],ans:1,exp:'"An eye for detail" = fixed idiomatic expression.',rule:'Fixed idioms with articles: an eye for detail, a blessing in disguise'},
    ],
    fill:[
      {q:'___ (A/The) more she practised ___ (a/the) better she performed.',ans:'The / the',exp:'"The more…the better" = correlative comparatives.',rule:'"The + comparative, the + comparative" — both need "the"'},
      {q:'It is ___ (a/an) honour to receive this award.',ans:'an',exp:'"Honour" starts with vowel sound /ɒ/ (silent h).',rule:'"an" before vowel sounds (silent h: honour, hour, heir)'},
      {q:'She was elected ___ (a/an/the/—) President.',ans:'',exp:'No article after "elected" with unique title.',rule:'No article after elected/appointed/became with unique titles'},
      {q:'___ (The/A) French Revolution changed Europe.',ans:'The',exp:'"The" before historical events.',rule:'"The" with historical events'},
      {q:'He has ___ (a/an) eye for colour.',ans:'an',exp:'"Eye" starts with vowel sound /aɪ/.',rule:'"an" before vowel sounds'},
    ],
    error:[
      {q:'The more you work a better result you get.',error:'a better',correction:'the better',exp:'"The more…the better" — both need "the".',rule:'"The + comparative, the + comparative"'},
      {q:'She was appointed as the Prime Minister.',error:'the',correction:'',exp:'No article after "appointed" with a unique title.',rule:'No article after appointed/elected/became with unique titles'},
      {q:'He has a eye for colour.',error:'a',correction:'an',exp:'"Eye" starts with vowel sound /aɪ/.',rule:'"an" before vowel sounds'},
      {q:'The Rome is a beautiful city.',error:'The Rome',correction:'Rome',exp:'No article before proper names of cities.',rule:'No article before proper names (cities, countries, people)'},
      {q:'She read an history book.',error:'an',correction:'a',exp:'"History" starts with consonant sound /h/.',rule:'"a" before consonant sounds'},
    ],
  },

  3:{
    mcq:[
      {q:'___ prose of Hemingway is admired worldwide.',opts:['A','An','The','—'],ans:2,exp:'"The prose of Hemingway" = specific reference to a named person\'s work.',rule:'"The" for specific reference to a named person\'s work or style'},
      {q:'She is ___ Shakespeare of our era.',opts:['a','an','the','—'],ans:2,exp:'"The Shakespeare" = the greatest/most famous example.',rule:'"the" + proper noun = the greatest exemplar of that type'},
      {q:'___ knowledge of finance is essential for a manager.',opts:['A','An','The','—'],ans:0,exp:'"A knowledge of finance" = some degree of knowledge.',rule:'"a/an" with abstract nouns when qualified: a knowledge of, a love of'},
      {q:'He is in ___ hospital recovering from surgery.',opts:['a','an','the','—'],ans:3,exp:'"In hospital" = fixed phrase; no article when receiving treatment.',rule:'Fixed phrases: in hospital, in prison, at school, in bed (institutional sense)'},
      {q:'___ cattle are grazing in the field.',opts:['A','An','The','—'],ans:2,exp:'"The cattle" = specific cattle specified by context.',rule:'"The" when the noun is specified by context or location'},
    ],
    fill:[
      {q:'She has ___ (a/an/the) extraordinary understanding of law.',ans:'an',exp:'"Extraordinary" starts with vowel sound /ɛ/.',rule:'"an" before vowel sounds even in long phrases'},
      {q:'He is recovering in ___ (a/an/the/—) bed.',ans:'',exp:'"In bed" = fixed idiom — no article.',rule:'Fixed phrases without article: in bed, at home, in hospital'},
      {q:'She prefers ___ (the/a/—) mountains to the sea.',ans:'the',exp:'"The mountains…the sea" = generic reference to types of landscape.',rule:'"The" for generic reference to types of landscape/nature'},
      {q:'___ (The/A) prose of Dickens is highly praised.',ans:'The',exp:'"The prose of Dickens" = specific reference.',rule:'"The" + specific reference to a named person\'s work'},
      {q:'She served ___ (a/the/—) tea to the guests.',ans:'',exp:'No article with uncountable nouns in a general context.',rule:'No article with uncountable nouns used generally'},
    ],
    error:[
      {q:'She is a Shakespeare of this century.',error:'a',correction:'the',exp:'"The Shakespeare" = the greatest/most famous of that type.',rule:'"the" + proper noun: the greatest exemplar'},
      {q:'The knowledge is power.',error:'The knowledge',correction:'Knowledge',exp:'No article with abstract nouns in general statements.',rule:'No article for abstract nouns in general statements'},
      {q:'He is recovering in the bed.',error:'the',correction:'',exp:'"In bed" = fixed idiom — no article.',rule:'Fixed phrases: in bed (no article)'},
      {q:'She has a extraordinary eye for colour.',error:'a',correction:'an',exp:'"Extraordinary" starts with vowel sound /ɛ/.',rule:'"an" before vowel sounds'},
      {q:'A Himalayas are the highest range.',error:'A',correction:'The',exp:'Mountain ranges take "the".',rule:'"The" with mountain ranges'},
    ],
  },

  4:{
    mcq:[
      {q:'___ data collected from this study is inconclusive.',opts:['A','An','The','—'],ans:2,exp:'"The data collected" = specific data made definite by a qualifying phrase.',rule:'"The" when a noun is made specific by a qualifying phrase or clause'},
      {q:'She has ___ abiding passion for justice.',opts:['a','an','the','—'],ans:1,exp:'"Abiding" starts with vowel sound /ə/.',rule:'"an" before vowel sounds'},
      {q:'He spoke with ___ authority that left everyone silent.',opts:['a','an','the','—'],ans:1,exp:'"An authority" = a particular kind of authority; vowel sound.',rule:'"a/an" with abstract nouns to indicate a particular type or degree'},
      {q:'The results show that ___ climate change is accelerating.',opts:['a','an','the','—'],ans:3,exp:'"Climate change" as a concept — no article.',rule:'No article for abstract concepts used in a general sense'},
      {q:'He was elected ___ member of the committee.',opts:['a','an','the','—'],ans:0,exp:'"A member" = one among many (not a unique title).',rule:'"a/an" for non-unique roles; no article for unique titles'},
    ],
    fill:[
      {q:'___ (The/A/—) data collected from this study is inconclusive.',ans:'The',exp:'"The data collected from this study" = specific data.',rule:'"The" when noun is made specific by a qualifying phrase/clause'},
      {q:'She has ___ (a/an/the) abiding passion for justice.',ans:'an',exp:'"Abiding" starts with vowel sound /ə/.',rule:'"an" before vowel sounds'},
      {q:'He spoke with ___ (a/an) authority that silenced everyone.',ans:'an',exp:'"An authority" = a kind of authority; vowel sound /ɔː/.',rule:'"an" before vowel sounds; "a/an" for a type/degree of abstract noun'},
      {q:'___ (The/—) climate change is accelerating.',ans:'',exp:'Climate change as a concept — no article.',rule:'No article for abstract concepts used generally'},
      {q:'He was elected ___ (a/an/the/—) member of the committee.',ans:'a',exp:'"A member" = one of many.',rule:'"a/an" for non-unique roles'},
    ],
    error:[
      {q:'A data collected from the study is inconclusive.',error:'A data',correction:'The data',exp:'"The data collected" = specific data.',rule:'"The" when noun is made specific by a qualifying clause'},
      {q:'She has a abiding passion for justice.',error:'a',correction:'an',exp:'"Abiding" starts with vowel sound.',rule:'"an" before vowel sounds'},
      {q:'He was elected the member of the committee.',error:'the',correction:'a',exp:'"A member" = one of many members.',rule:'"a/an" for non-unique roles/positions'},
      {q:'The climate change is a serious issue.',error:'The climate change',correction:'Climate change',exp:'Abstract concept used generally → no article.',rule:'No article for abstract concepts used in a general sense'},
      {q:'He spoke with a authority that impressed everyone.',error:'a',correction:'an',exp:'"Authority" starts with vowel sound /ɔː/.',rule:'"an" before vowel sounds'},
    ],
  },

  5:{
    mcq:[
      {q:'___ GDP of India grew significantly last quarter.',opts:['A','An','The','—'],ans:2,exp:'"The GDP of India" = specific economic measure.',rule:'"The" when a noun is made specific by a qualifying phrase'},
      {q:'She gave ___ speech that moved the audience.',opts:['a','an','the','—'],ans:0,exp:'"A speech" = first mention; indefinite.',rule:'"a/an" for first mention of a singular countable noun'},
      {q:'He was appointed ___ Secretary General of the UN.',opts:['a','an','the','—'],ans:3,exp:'No article after "appointed" with a unique title.',rule:'No article after appointed/elected/became with unique titles'},
      {q:'She has ___ flair for languages.',opts:['a','an','the','—'],ans:0,exp:'"A flair for" = fixed expression.',rule:'Fixed expressions: a flair for, a talent for, a passion for'},
      {q:'It is ___ honour to serve the nation.',opts:['a','an','the','—'],ans:1,exp:'"Honour" starts with vowel sound /ɒ/ (silent h).',rule:'"an" before vowel sounds (honour, hour, heir, honest)'},
    ],
    fill:[
      {q:'___ (The/A) GDP of India grew last quarter.',ans:'The',exp:'"The GDP of India" = specific.',rule:'"The" when noun is specified by a qualifying phrase'},
      {q:'She has ___ (a/an/the) flair for languages.',ans:'a',exp:'"A flair for" = fixed expression.',rule:'Fixed expressions: a flair for, a talent for'},
      {q:'It is ___ (a/an) honour to be chosen.',ans:'an',exp:'"Honour" starts with vowel sound /ɒ/.',rule:'"an" before vowel sounds (silent h words)'},
      {q:'He was appointed ___ (a/an/the/—) Secretary General.',ans:'',exp:'No article with unique titles after "appointed".',rule:'No article after appointed/elected/became with unique titles'},
      {q:'She gave ___ (a/an) speech that moved the audience.',ans:'a',exp:'"A speech" = first mention; consonant sound.',rule:'"a/an" for first mention of singular countable nouns'},
    ],
    error:[
      {q:'She has the flair for languages.',error:'the',correction:'a',exp:'"A flair for" = fixed expression.',rule:'"a flair for" — fixed idiomatic expression'},
      {q:'It is a honour to be chosen.',error:'a',correction:'an',exp:'"Honour" starts with vowel sound.',rule:'"an" before vowel sounds (silent h words)'},
      {q:'He was appointed the Secretary General.',error:'the',correction:'',exp:'No article after "appointed" with unique titles.',rule:'No article after appointed/elected/became with unique titles'},
      {q:'She gave the speech that moved the audience.',error:'the speech',correction:'a speech',exp:'"A speech" — first mention; indefinite.',rule:'"a/an" for first mention of singular countable nouns'},
      {q:'The GDP grew significantly in last quarter.',error:'in last quarter',correction:'last quarter',exp:'No preposition before "last quarter" as a time expression.',rule:'No preposition before "last/next/this + time noun"'},
    ],
  },

  6:{
    mcq:[
      {q:'___ Mahabharata is ___ ancient Indian epic.',opts:['The / an','A / the','The / a','An / a'],ans:2,exp:'"The Mahabharata" = specific known text; "a" = classifying it as one type.',rule:'"The" for specific known texts; "a/an" for classification'},
      {q:'She was awarded ___ Nobel Prize for Literature.',opts:['a','an','the','—'],ans:2,exp:'"The Nobel Prize" = specific, unique award.',rule:'"The" with unique/specific awards and prizes'},
      {q:'He has ___ reputation for excellence.',opts:['a','an','the','—'],ans:0,exp:'"A reputation for" = fixed expression.',rule:'Fixed expressions with "a": a reputation for, a passion for'},
      {q:'She teaches at ___ university in Delhi.',opts:['a','an','the','—'],ans:0,exp:'"A university in Delhi" = one of several; first mention.',rule:'"a/an" for first mention/non-specific reference'},
      {q:'She has ___ natural talent for music.',opts:['a','an','the','—'],ans:0,exp:'"A natural talent" = a type of quality; "natural" starts with consonant.',rule:'"a/an" with qualified abstract nouns: a natural talent, a deep understanding'},
    ],
    fill:[
      {q:'___ (The/A) Mahabharata is ___ (a/an) ancient epic.',ans:'The / an',exp:'"The Mahabharata" = specific; "an ancient epic" = classification (vowel sound).',rule:'"The" for specific known works; "an" before vowel sounds'},
      {q:'She was awarded ___ (a/an/the) Nobel Prize.',ans:'the',exp:'"The Nobel Prize" = specific unique award.',rule:'"The" with unique/specific prizes and awards'},
      {q:'He has ___ (a/an/the) reputation for honesty.',ans:'a',exp:'"A reputation for" = fixed expression.',rule:'Fixed expressions: a reputation for'},
      {q:'She teaches at ___ (a/an/the) university in Delhi.',ans:'a',exp:'"A university" = one of many; non-specific.',rule:'"a/an" for non-specific first mention'},
      {q:'She has ___ (a/an/the) natural talent for music.',ans:'a',exp:'"A natural talent" — "natural" starts with consonant /n/.',rule:'"a" before consonant sounds'},
    ],
    error:[
      {q:'Mahabharata is an ancient Indian epic.',error:'Mahabharata',correction:'The Mahabharata',exp:'"The Mahabharata" = specific known text.',rule:'"The" with specific known texts and named works'},
      {q:'She was awarded a Nobel Prize.',error:'a',correction:'the',exp:'"The Nobel Prize" = specific unique award.',rule:'"The" with unique/specific prizes'},
      {q:'He has the reputation for honesty.',error:'the',correction:'a',exp:'"A reputation for" = fixed idiomatic expression.',rule:'Fixed expression: a reputation for (not the)'},
      {q:'She teaches at the university in Delhi.',error:'the',correction:'a',exp:'"A university" = one of many; non-specific.',rule:'"a/an" for non-specific nouns; "the" for specific known ones'},
      {q:'She has an natural talent for music.',error:'an',correction:'a',exp:'"Natural" starts with consonant sound /n/.',rule:'"a" before consonant sounds'},
    ],
  },

  7:{
    mcq:[
      {q:'She is considered ___ authority on Renaissance art.',opts:['a','an','the','—'],ans:1,exp:'"An authority on" = fixed expression; vowel sound /ɔː/.',rule:'"an" before vowel sounds; "an authority on" = fixed expression'},
      {q:'He gave such ___ impassioned speech that the crowd was moved.',opts:['a','an','the','—'],ans:1,exp:'"Such an impassioned speech" — "impassioned" starts with vowel /ɪ/.',rule:'"Such a/an + adjective + noun" — article agrees with the adjective\'s sound'},
      {q:'The crisis has had ___ profound impact on the economy.',opts:['a','an','the','—'],ans:0,exp:'"A profound impact" = one kind of impact; "profound" starts with consonant.',rule:'"a/an" with qualified abstract nouns: a profound impact'},
      {q:'___ poverty and ___ unemployment are serious challenges.',opts:['The/the','A/an','—/—','The/—'],ans:2,exp:'Abstract nouns in general statements → no article.',rule:'No article for abstract nouns in general statements'},
      {q:'She is regarded as ___ visionary in her field.',opts:['a','an','the','—'],ans:0,exp:'"A visionary" — consonant sound /v/.',rule:'"a" before consonant sounds; "a/an" for classifying roles'},
    ],
    fill:[
      {q:'She is considered ___ (a/an) authority on the subject.',ans:'an',exp:'"An authority on" = fixed expression; vowel sound.',rule:'"an" before vowel sounds; "an authority on" = fixed expression'},
      {q:'He gave such ___ (a/an) impassioned speech.',ans:'an',exp:'"Such an impassioned speech" — vowel sound /ɪ/.',rule:'"Such a/an": article depends on the sound of the adjective/noun'},
      {q:'The crisis had ___ (a/an/the) profound impact.',ans:'a',exp:'"A profound impact" — consonant sound /p/.',rule:'"a" before consonant sounds; abstract noun qualified by adjective'},
      {q:'___ (The/—) Poverty and ___ (the/—) unemployment are challenges.',ans:'— / —',exp:'Abstract nouns in general statements → no article.',rule:'No article for abstract nouns used generally'},
      {q:'She is regarded as ___ (a/an/the) visionary.',ans:'a',exp:'"A visionary" — consonant sound /v/.',rule:'"a" before consonant sounds; "a/an" for classifying'},
    ],
    error:[
      {q:'She is considered the authority on the subject.',error:'the',correction:'an',exp:'"An authority on" = she is one authority among possible authorities.',rule:'"an authority on" = fixed expression (not "the")'},
      {q:'He gave such a impassioned speech.',error:'a',correction:'an',exp:'"Impassioned" starts with vowel sound /ɪ/.',rule:'"an" before vowel sounds'},
      {q:'The crisis had an profound impact.',error:'an',correction:'a',exp:'"Profound" starts with consonant sound /p/.',rule:'"a" before consonant sounds'},
      {q:'The poverty and the unemployment are serious challenges.',error:'The poverty and the unemployment',correction:'Poverty and unemployment',exp:'Abstract nouns in general statements → no article.',rule:'No article for abstract nouns used generally'},
      {q:'She is regarded as the visionary in her field.',error:'the',correction:'a',exp:'"A visionary" = one of a group.',rule:'"a/an" for classifying; "the" only for a specific unique person'},
    ],
  },

  8:{
    mcq:[
      {q:'The board passed ___ resolution that surprised everyone.',opts:['a','an','the','—'],ans:0,exp:'"A resolution" = first mention; indefinite.',rule:'"a/an" for first mention of singular countable nouns'},
      {q:'She is ___ chairperson of the academic committee.',opts:['a','an','the','—'],ans:2,exp:'"The chairperson" = specific, unique position in this committee.',rule:'"The" for unique positions in specific organisations'},
      {q:'___ honesty is the best policy.',opts:['A','An','The','—'],ans:3,exp:'"Honesty" as an abstract concept in a proverb → no article.',rule:'No article for abstract nouns in proverbs and general statements'},
      {q:'He gave ___ account of the events that shocked the court.',opts:['a','an','the','—'],ans:1,exp:'"Account" starts with vowel sound /ə/ — use "an".',rule:'"an" before vowel sounds: an account, an error, an opportunity'},
      {q:'She has written ___ thesis on climate change.',opts:['a','an','the','—'],ans:0,exp:'"A thesis" = first mention; "thesis" starts with consonant /θ/.',rule:'"a" before consonant sounds; first mention of singular countable noun'},
    ],
    fill:[
      {q:'The board passed ___ (a/an/the) resolution.',ans:'a',exp:'"A resolution" = first mention; indefinite.',rule:'"a/an" for first mention of singular countable nouns'},
      {q:'She is ___ (a/an/the) chairperson of the committee.',ans:'the',exp:'"The chairperson" = unique position in a specific group.',rule:'"The" for unique positions in specific organisations'},
      {q:'___ (The/—) Honesty is the best policy.',ans:'',exp:'Abstract noun in proverb → no article.',rule:'No article for abstract nouns in proverbs'},
      {q:'He gave ___ (a/an) account of the events.',ans:'an',exp:'"Account" starts with vowel sound /ə/.',rule:'"an" before vowel sounds'},
      {q:'She has written ___ (a/an) thesis on climate change.',ans:'a',exp:'"Thesis" starts with consonant sound /θ/.',rule:'"a" before consonant sounds'},
    ],
    error:[
      {q:'The board passed an resolution.',error:'an',correction:'a',exp:'"Resolution" starts with consonant sound /r/.',rule:'"a" before consonant sounds'},
      {q:'She is a chairperson of the committee.',error:'a',correction:'the',exp:'"The chairperson" = specific unique position.',rule:'"The" for unique positions in specific organisations'},
      {q:'The honesty is the best policy.',error:'The honesty',correction:'Honesty',exp:'Abstract noun in proverb → no article.',rule:'No article for abstract nouns in proverbs'},
      {q:'He gave a account of the events.',error:'a',correction:'an',exp:'"Account" starts with vowel sound /ə/.',rule:'"an" before vowel sounds'},
      {q:'She has written an thesis on climate change.',error:'an',correction:'a',exp:'"Thesis" starts with consonant sound /θ/.',rule:'"a" before consonant sounds'},
    ],
  },

  9:{
    mcq:[
      {q:'___ Constitution of India was adopted in 1950.',opts:['A','An','The','—'],ans:2,exp:'"The Constitution of India" = specific document.',rule:'"The" for specific documents, treaties, and constitutions'},
      {q:'She wrote ___ treatise on economic inequality.',opts:['a','an','the','—'],ans:0,exp:'"A treatise" = first mention; consonant sound /t/.',rule:'"a" before consonant sounds; "a/an" for first mention'},
      {q:'He is regarded as ___ foremost expert in the field.',opts:['a','an','the','—'],ans:2,exp:'"The foremost expert" = the single most prominent expert.',rule:'"The" with superlative-like adjectives (foremost, leading, principal)'},
      {q:'___ information he provided was crucial.',opts:['A','An','The','—'],ans:2,exp:'"The information he provided" = specific; made definite by a relative clause.',rule:'"The" when noun is made specific by a qualifying relative clause'},
      {q:'She showed ___ remarkable degree of patience.',opts:['a','an','the','—'],ans:0,exp:'"A remarkable degree of" = a type/amount; "remarkable" starts with consonant.',rule:'"a" before consonant sounds; "a/an" with qualified abstract nouns'},
    ],
    fill:[
      {q:'___ (The/A) Constitution of India was adopted in 1950.',ans:'The',exp:'"The Constitution of India" = specific document.',rule:'"The" for specific documents, constitutions, treaties'},
      {q:'She wrote ___ (a/an) treatise on inequality.',ans:'a',exp:'"A treatise" — consonant sound /t/.',rule:'"a" before consonant sounds'},
      {q:'He is ___ (a/an/the) foremost expert in the field.',ans:'the',exp:'"The foremost expert" = the single most prominent.',rule:'"The" with superlative-like adjectives: foremost, leading, principal'},
      {q:'___ (The/A) information he provided was crucial.',ans:'The',exp:'"The information he provided" = specific.',rule:'"The" when noun is made specific by a relative clause'},
      {q:'She showed ___ (a/an) remarkable degree of patience.',ans:'a',exp:'"Remarkable" starts with consonant /r/.',rule:'"a" before consonant sounds'},
    ],
    error:[
      {q:'A Constitution of India was adopted in 1950.',error:'A',correction:'The',exp:'"The Constitution of India" = specific unique document.',rule:'"The" for specific documents and constitutions'},
      {q:'She wrote the treatise on inequality.',error:'the',correction:'a',exp:'"A treatise" = first mention; indefinite.',rule:'"a/an" for first mention of singular countable nouns'},
      {q:'He is a foremost expert in the field.',error:'a',correction:'the',exp:'"The foremost expert" = the single most prominent.',rule:'"The" with superlative-like adjectives (foremost, leading, principal)'},
      {q:'An information he provided was crucial.',error:'An',correction:'The',exp:'"The information he provided" — specific; "information" is uncountable.',rule:'"The" when noun is specific; no "a/an" with uncountable nouns'},
      {q:'She showed the remarkable degree of patience.',error:'the',correction:'a',exp:'"A remarkable degree of" = a type/amount.',rule:'"a/an" with qualified abstract nouns: a degree of, a sense of'},
    ],
  },

  10:{
    mcq:[
      {q:'His contribution to science is beyond ___ measure.',opts:['a','an','the','—'],ans:3,exp:'"Beyond measure" = fixed expression; no article.',rule:'Fixed phrases: beyond measure, beyond doubt, at peace, by chance'},
      {q:'___ fact that she succeeded against all odds is inspiring.',opts:['A','An','The','—'],ans:2,exp:'"The fact that" = fixed expression introducing a specific fact.',rule:'"The fact that" = fixed expression; "the" introduces the specific fact'},
      {q:'She spoke with ___ clarity that impressed even her critics.',opts:['a','an','the','—'],ans:0,exp:'"A clarity that" = a kind of clarity qualified by relative clause.',rule:'"a/an" with abstract noun qualified by a "that" relative clause'},
      {q:'He has ___ understanding of economics that few possess.',opts:['a','an','the','—'],ans:1,exp:'"An understanding of" = a degree; vowel sound /ʌ/.',rule:'"an" before vowel sounds; "a/an" with qualified abstract nouns'},
      {q:'___ corruption is a major obstacle to development.',opts:['A','An','The','—'],ans:3,exp:'Abstract noun in general statement → no article.',rule:'No article for abstract nouns used in a general sense'},
    ],
    fill:[
      {q:'His contribution is beyond ___ (a/an/the/—) measure.',ans:'',exp:'"Beyond measure" = fixed phrase.',rule:'Fixed phrases: beyond measure, beyond doubt (no article)'},
      {q:'___ (The/A) fact that she succeeded is inspiring.',ans:'The',exp:'"The fact that" = fixed expression.',rule:'"The fact that" = fixed expression with "the"'},
      {q:'She spoke with ___ (a/an) clarity that impressed everyone.',ans:'a',exp:'"A clarity that" — "clarity" starts with consonant; relative clause.',rule:'"a/an" with abstract noun qualified by "that" clause'},
      {q:'He has ___ (a/an) understanding of economics.',ans:'an',exp:'"An understanding of" — vowel sound /ʌ/.',rule:'"an" before vowel sounds'},
      {q:'___ (The/—) Corruption is a major obstacle.',ans:'',exp:'Abstract noun in general statement → no article.',rule:'No article for abstract nouns in general statements'},
    ],
    error:[
      {q:'His contribution is beyond the measure.',error:'the',correction:'',exp:'"Beyond measure" = fixed phrase.',rule:'Fixed phrases: beyond measure, beyond doubt (no article)'},
      {q:'A fact that she succeeded is inspiring.',error:'A fact',correction:'The fact',exp:'"The fact that" = fixed expression.',rule:'"The fact that" = fixed expression'},
      {q:'She spoke with the clarity that impressed everyone.',error:'the',correction:'a',exp:'"A clarity that" — qualified by relative clause.',rule:'"a/an" + abstract noun + relative clause (not "the")'},
      {q:'He has the understanding of economics.',error:'the',correction:'an',exp:'"An understanding of" = a degree/type.',rule:'"an" before vowel sounds; "a/an" with qualified abstract nouns'},
      {q:'The corruption is a major obstacle to development.',error:'The corruption',correction:'Corruption',exp:'Abstract noun in general statement → no article.',rule:'No article for abstract nouns in general statements'},
    ],
  },

  11:{
    mcq:[
      {q:'___ body of evidence suggests systemic failure.',opts:['A','An','The','—'],ans:0,exp:'"A body of evidence" = a collection; first mention.',rule:'"a body of" = a collection; "a" before consonant sound'},
      {q:'She demonstrated ___ grasp of the subject that was impressive.',opts:['a','an','the','—'],ans:0,exp:'"A grasp of" = a degree; "grasp" starts with consonant.',rule:'"a/an" with abstract noun qualified by relative clause; "a" before consonant'},
      {q:'___ research conducted over ten years confirmed these findings.',opts:['A','An','The','—'],ans:2,exp:'"The research conducted over ten years" = specific research.',rule:'"The" when noun is made specific by a qualifying phrase or clause'},
      {q:'It is beyond ___ reasonable doubt that he is guilty.',opts:['a','an','the','—'],ans:3,exp:'"Beyond reasonable doubt" = legal fixed phrase; no article.',rule:'Fixed legal phrases: beyond (reasonable) doubt'},
      {q:'The phenomenon has been described as ___ watershed moment.',opts:['a','an','the','—'],ans:0,exp:'"A watershed moment" = a significant turning point; consonant sound.',rule:'"a/an" for classifying; "a" before consonant sounds'},
    ],
    fill:[
      {q:'___ (A/The) body of evidence suggests systemic failure.',ans:'A',exp:'"A body of evidence" = a collection; first mention.',rule:'"a body of" = a collection; "a" before consonant sound'},
      {q:'She demonstrated ___ (a/an) grasp of the subject.',ans:'a',exp:'"A grasp of" — "grasp" starts with consonant /g/.',rule:'"a" before consonant sounds'},
      {q:'___ (The/A) research conducted over ten years confirmed this.',ans:'The',exp:'"The research conducted over ten years" = specific research.',rule:'"The" when noun is made specific by a qualifying phrase'},
      {q:'It is beyond ___ (a/an/the/—) reasonable doubt.',ans:'',exp:'"Beyond reasonable doubt" = legal fixed phrase.',rule:'Fixed legal phrases: beyond (reasonable) doubt'},
      {q:'This is ___ (a/an/the) watershed moment.',ans:'a',exp:'"A watershed moment" — consonant sound /w/.',rule:'"a" before consonant sounds; "a/an" for classifying'},
    ],
    error:[
      {q:'The body of evidence suggests systemic failure.',error:'The body',correction:'A body',exp:'"A body of evidence" = a collection (first general mention).',rule:'"a body of" = a collection of (indefinite, general)'},
      {q:'She demonstrated the grasp of the subject.',error:'the',correction:'a',exp:'"A grasp of" = a degree of understanding.',rule:'"a/an" with qualified abstract nouns: a grasp of, a sense of'},
      {q:'A research conducted over ten years confirmed this.',error:'A',correction:'The',exp:'"The research conducted…" = specific research.',rule:'"The" when noun is made specific by a qualifying phrase'},
      {q:'It is beyond the reasonable doubt.',error:'the',correction:'',exp:'"Beyond reasonable doubt" = fixed legal phrase.',rule:'Fixed phrases: beyond (reasonable) doubt (no article)'},
      {q:'This is the watershed moment.',error:'the',correction:'a',exp:'"A watershed moment" = one significant turning point.',rule:'"a/an" for classifying; "the" only for a specific known referent'},
    ],
  },

  12:{
    mcq:[
      {q:'In ___ final analysis the policy proved effective.',opts:['a','an','the','—'],ans:2,exp:'"In the final analysis" = fixed expression.',rule:'Fixed expressions with "the": in the final analysis, in the long run'},
      {q:'She has made ___ indelible mark on the field.',opts:['a','an','the','—'],ans:1,exp:'"An indelible mark" — "indelible" starts with vowel sound /ɪ/.',rule:'"an" before vowel sounds'},
      {q:'The report draws on ___ breadth of research rarely seen.',opts:['a','an','the','—'],ans:0,exp:'"A breadth of research" = a type/degree; consonant sound /b/.',rule:'"a/an" with abstract noun qualified by a phrase'},
      {q:'He is considered ___ greatest physicist of his generation.',opts:['a','an','the','—'],ans:2,exp:'"The greatest physicist" = superlative reference.',rule:'"The" with superlatives and superlative-like constructions'},
      {q:'This represents ___ sea change in government policy.',opts:['a','an','the','—'],ans:0,exp:'"A sea change" = a significant transformation; fixed expression.',rule:'"a sea change" = fixed idiomatic expression'},
    ],
    fill:[
      {q:'In ___ (the/a) final analysis the policy proved effective.',ans:'the',exp:'"In the final analysis" = fixed expression.',rule:'Fixed expressions: in the final analysis, in the long run'},
      {q:'She has made ___ (a/an) indelible mark on the field.',ans:'an',exp:'"Indelible" starts with vowel sound /ɪ/.',rule:'"an" before vowel sounds'},
      {q:'The report draws on ___ (a/an) breadth of research.',ans:'a',exp:'"A breadth of" — consonant sound /b/.',rule:'"a" before consonant sounds; abstract noun qualified'},
      {q:'He is considered ___ (a/an/the) greatest physicist of his generation.',ans:'the',exp:'"The greatest" = superlative reference.',rule:'"The" with superlatives and superlative-like constructions'},
      {q:'This represents ___ (a/an) sea change in policy.',ans:'a',exp:'"A sea change" = fixed expression.',rule:'"a sea change" = fixed idiomatic expression'},
    ],
    error:[
      {q:'In a final analysis the policy proved effective.',error:'a',correction:'the',exp:'"In the final analysis" = fixed expression.',rule:'Fixed expressions with "the": in the final analysis'},
      {q:'She has made a indelible mark on the field.',error:'a',correction:'an',exp:'"Indelible" starts with vowel sound /ɪ/.',rule:'"an" before vowel sounds'},
      {q:'The report draws on the breadth of research rarely seen.',error:'the breadth',correction:'a breadth',exp:'"A breadth of research" = a degree/type.',rule:'"a/an" with abstract noun qualified by a phrase'},
      {q:'He is considered a greatest physicist of his generation.',error:'a',correction:'the',exp:'"The greatest" = superlative reference.',rule:'"The" with superlatives and superlative-like references'},
      {q:'This represents the sea change in policy.',error:'the',correction:'a',exp:'"A sea change" = fixed idiomatic expression.',rule:'"a sea change" = fixed idiomatic expression'},
    ],
  },

}, // end articles

}; // end BANK_FILE1