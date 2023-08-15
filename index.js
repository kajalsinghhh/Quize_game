
const quesJSON = [
  {
    correctAnswer: '📶 A good Wi-Fi connection',
    options: ['📶 A good Wi-Fi connection', '😂 Ignoring each other bad jokes', '👗 Matching outfits every day'],
    question: "What's the secret to a long-lasting relationship?",
  },
  {
    correctAnswer: '💑 Lovebirds',
    options: ['💑 Sweethearts', '💑 Lovebirds', '💑 Winged romantics'],
    question: "What do you call two birds in love?",
  },
  {
    correctAnswer: '🗝️ Remembering anniversaries like your Wi-Fi password',
    options: [
      '🗝️ Keeping secrets like where the chocolate is hidden',
      '🗝️ Remembering anniversaries like your Wi-Fi password',
      '🗝️ Laughing at each other bad jokes',
    ],
    question: "What's the key to a successful relationship?",
  },
  {
    correctAnswer: '👁️‍🗨️ I feel like were not seeing things eye to eye',
    options: [
      '👁️‍🗨️ Between you and me, something smells.',
      '👁️‍🗨️ I feel like were not seeing things eye to eye',
      '👁️‍🗨️ Youre the only eye-deal friend I have.',
    ],
    question: "What did the left eye say to the right eye?",
  },
  {
    correctAnswer: '💘 Never forget the anniversary of your first date',
    options: [
      '💘 You get butterflies every time you see your favorite food',
      '💘 You lose the ability to focus on anything else',
      '💘 Your heart skips a beat every time your phone beeps',
    ],
    question: "How do you know if you're in love?",
  },
  {
    correctAnswer: '📱 Sending each other memes',
    options: ['📱 Communication', '📱 Matching tattoos', '📱 Sending each other memes'],
    question: "What's the key to maintaining a healthy relationship?",
  },
  {
    correctAnswer: '🎈 In a hot air balloon at sunrise',
    options: [
      '🎈 In a hot air balloon at sunrise',
      '🎈 With a flash mob in the middle of a park',
      '🎈 Through a game of tic-tac-toe',
    ],
    question: "What's a romantic way to propose?",
  },
  {
    correctAnswer: '🧦 Collecting matching socks',
    options: [
      '🧦 Arguing over the thermostat',
      '🧦 Collecting matching socks',
      '🧦 Competitive binge-watching',
    ],
    question: "What's a couple's favorite hobby?",
  },
  {
    correctAnswer: '📞 You cant remember your own phone number',
    options: [
      '📞 You start using their favorite emojis',
      '📞 You cant remember your own phone number',
      '📞 You dont mind sharing your fries',
    ],
    question: "How do you know when you're in love?",
  },
  {
    correctAnswer: '🛍️ Follow a trail of pizza slices',
    options: [
      '🛍️ Download a Soulmate Finder app',
      '🛍️ Follow a trail of pizza slices',
      '🛍️ Ask a magic eight-ball',
    ],
    question: "What's the best way to find your soulmate?",
  },
];
 //const { correctAnswer, options, question } = quesJSON[0]; // quesJSON is an array, so we need to access the first object using [0]
let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextEl = document.getElementById('next');
 showQuestion();
  nextEl.addEventListener('click', ()=>{
    scoreEl.textContent =`Score:${score}/ ${totalScore}`;
    nextQuestion()
  });

  
  function showQuestion() {
  
  const { correctAnswer, options, question 
   }= quesJSON[currentQuestion];

questionEl.textContent = question;
const shuffledOptions = shuffleOptions(options);
shuffledOptions.forEach((opt) => {
  const btn = document.createElement('button');
  btn.textContent = opt;
  optionEl.appendChild(btn);

  btn.addEventListener('click', () => {
    if (opt === correctAnswer) {
      score++;
    } else {
      score = score - -0.25;
    }
    console.log(score);
    // Display the score
    scoreEl.textContent = `Score: ${score}/${totalScore}`;
    nextQuestion();
   
  });
});

  }

  function nextQuestion() {
    currentQuestion++;
    optionEl.textContent = '';
    
    if (currentQuestion >= quesJSON.length) {
      questionEl.textContent = 'Quiz Completed!! 😊 Thank you for playing!';
      nextEl.remove();
    } else {
      showQuestion();
    }
  }

  //console.log(currentQuestion);



// Shuffling the options
function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}
