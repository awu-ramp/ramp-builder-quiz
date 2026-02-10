// ========== HELPERS ==========
function getIndefiniteArticle(phrase) {
  const firstLetter = phrase.trim().charAt(0).toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? 'an' : 'a';
}

// ========== ARCHETYPE DEFINITIONS ==========
const archetypes = {
  productHacker: {
    name: "Product Hacker",
    emoji: "🧪",
    tagline: "You're energized by experiments, metrics, and making things grow.",
    description:
      "You love the loop: ship something, measure it, learn, iterate. You're drawn to problems where success is defined by a number going up—conversion rates, activation, expansion. You'd thrive in an environment where data drives decisions, experiments are constant, and your work directly moves the needle on business growth. You enjoy building both user-facing experiences and the platforms that power experimentation at scale.",
    enjoy:
      "You'd likely enjoy working on: growth experimentation, conversion optimization, data platforms, sales tooling, and product-led growth systems."
  },
  moneyArchitect: {
    name: "Money Architect",
    emoji: "💰",
    tagline: "You want to build the infrastructure that moves real money—reliably, at scale.",
    description:
      "You're drawn to systems where correctness isn't optional. You want to understand how payments work at a deep level—card networks, ACH rails, settlement, international transfers. The idea of building financial infrastructure that processes millions of transactions excites you more than building UI. You appreciate high-stakes engineering where your systems handle billions of dollars and can't go down.",
    enjoy:
      "You'd likely enjoy working on: payment platforms, card systems, financial infrastructure, international payments, stablecoin, and credit/risk decisioning systems."
  },
  experienceCrafter: {
    name: "Experience Crafter",
    emoji: "✨",
    tagline: "You care deeply about the people using what you build.",
    description:
      "Whether it's an admin setting up company policies, an employee submitting a receipt, or someone booking a business trip—you want to make their experience effortless. You think about UX at every level, from frontend polish to backend automation that eliminates busywork. You love learning what users struggle with and building solutions that feel invisible when they work perfectly.",
    enjoy:
      "You'd likely enjoy working on: employee-facing tools, admin workflows, travel booking, spend management, and AI-powered automation that reduces user friction."
  },
  workflowAutomator: {
    name: "Workflow Automator",
    emoji: "⚙️",
    tagline: "You see manual processes and can't help but automate them.",
    description:
      "You love understanding how a business process works end-to-end—then making it 10x faster. AP workflows, procurement approvals, vendor management, invoice processing—these aren't boring to you; they're puzzles. You enjoy domain-heavy work where you become the expert, and you get satisfaction from turning something that took hours into something that takes seconds.",
    enjoy:
      "You'd likely enjoy working on: bill pay automation, procurement systems, vendor management, AP agents, and business process orchestration."
  },
  connectorBuilder: {
    name: "Connector Builder",
    emoji: "🔗",
    tagline: "You're the bridge between systems—making things work together.",
    description:
      "You find joy in taking two systems that don't speak the same language and making them communicate perfectly. You're comfortable navigating messy third-party APIs, legacy systems, and inconsistent data formats. You understand that integrations aren't glamorous, but they close deals, unlock customers, and make products dramatically more useful. You're a generalist who learns new domains quickly.",
    enjoy:
      "You'd likely enjoy working on: third-party integrations, accounting system connections, API platforms, and cross-product data synchronization."
  },
  systemsSculptor: {
    name: "Systems Sculptor",
    emoji: "🏗️",
    tagline: "You build the foundation that everyone else builds on.",
    description:
      "Your idea of a great day is making a database query 100x faster, fixing a flaky CI pipeline, or designing a platform abstraction that saves every engineer hours per week. You think in terms of leverage—work that multiplies the output of everyone around you. You care about developer experience, system reliability, and elegant infrastructure. You'd rather build the tools than use them.",
    enjoy:
      "You'd likely enjoy working on: developer tooling, infrastructure, platform engineering, performance optimization, and internal systems that scale engineering velocity."
  },
  riskDetective: {
    name: "Risk Detective",
    emoji: "🔍",
    tagline: "You protect the system—combining data, models, and intuition.",
    description:
      "You're drawn to adversarial problems: fraud rings, identity spoofing, suspicious patterns. You enjoy the intersection of engineering and data science—building real-time systems that make decisions using ML models, deterministic rules, and behavioral signals. You care about security, trust, and building systems where a single wrong decision has real financial consequences. High stakes don't scare you; they motivate you.",
    enjoy:
      "You'd likely enjoy working on: fraud detection platforms, real-time decisioning systems, authentication, authorization, identity management, and ML-powered risk scoring."
  },
  fieldEngineer: {
    name: "Field Engineer",
    emoji: "🚀",
    tagline: "You thrive at the edge—closest to customers, furthest from routine.",
    description:
      "You want variety, autonomy, and direct customer impact. You're energized by hopping on a call with an enterprise customer, understanding their unique problem, and building a custom solution. You're comfortable with ambiguity and context-switching. You're part engineer, part consultant, part problem-solver. You'd rather build something bespoke that wins a deal than work on the same product for months.",
    enjoy:
      "You'd likely enjoy working on: custom enterprise solutions, customer-facing implementations, demo environments, specialized integrations, and technical consulting."
  }
};

// ========== QUESTIONS ==========
const questions = [ /* unchanged — keep exactly as before */ ];

// ========== STATE ==========
let currentQuestion = 0;
let scores = {};

function initScores() {
  scores = {};
  Object.keys(archetypes).forEach(key => {
    scores[key] = 0;
  });
}

// ========== SHUFFLE ==========
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ========== DOM ELEMENTS ==========
const landingScreen = document.getElementById('landing');
const quizScreen = document.getElementById('quiz');
const resultsScreen = document.getElementById('results');
const startBtn = document.getElementById('start-btn');
const retakeBtn = document.getElementById('retake-btn');
const questionCount = document.getElementById('question-count');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const progressFill = document.getElementById('progress-fill');

// ========== NAVIGATION ==========
function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s =>
    s.classList.remove('active')
  );
  screen.classList.add('active');
}

// ========== RENDER QUESTION ==========
function renderQuestion() {
  const q = questions[currentQuestion];
  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = q.text;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;

  answersDiv.innerHTML = '';
  shuffleArray(q.answers).forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.archetype));
    answersDiv.appendChild(btn);
  });
}

// ========== SELECT ANSWER ==========
function selectAnswer(archetype) {
  scores[archetype] += 2;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

// ========== SHOW RESULTS ==========
function showResults() {
  progressFill.style.width = '100%';

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = archetypes[sorted[0][0]];
  const runnerUp = archetypes[sorted[1][0]];

  const article = getIndefiniteArticle(top.name);

  document.getElementById('result-emoji').textContent = top.emoji;
  document.getElementById('result-title').innerHTML =
    `You're ${article} <span class="archetype-name">${top.name}</span>!`;
  document.getElementById('result-tagline').textContent = top.tagline;
  document.getElementById('result-description').textContent = top.description;
  document.getElementById('result-enjoy').textContent = top.enjoy;

  const runnerUpDiv = document.getElementById('runner-up');
  runnerUpDiv.innerHTML = `
    <h3>Runner-up: ${runnerUp.emoji} ${runnerUp.name}</h3>
    <p>${runnerUp.tagline}</p>
  `;

  showScreen(resultsScreen);
}

// ========== EVENTS ==========
startBtn.addEventListener('click', () => {
  initScores();
  currentQuestion = 0;
  showScreen(quizScreen);
  renderQuestion();
});

retakeBtn.addEventListener('click', () => {
  initScores();
  currentQuestion = 0;
  showScreen(landingScreen);
});

// Initialize
showScreen(landingScreen);
