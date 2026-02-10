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
const questions = [
  {
    text: "It's your first week. What do you hope your onboarding project looks like?",
    answers: [
      { text: "Run an A/B test on a signup flow and measure conversion lift", archetype: "productHacker" },
      { text: "Trace how a payment moves through the system from swipe to settlement", archetype: "moneyArchitect" },
      { text: "Redesign a settings page that thousands of admins use daily", archetype: "experienceCrafter" },
      { text: "Automate a manual approval workflow that ops does hundreds of times a day", archetype: "workflowAutomator" },
      { text: "Build a new integration with a third-party accounting tool", archetype: "connectorBuilder" },
      { text: "Improve the CI/CD pipeline so the whole team ships 20% faster", archetype: "systemsSculptor" },
      { text: "Write a rule that blocks a new type of suspicious transaction in real time", archetype: "riskDetective" },
      { text: "Hop on a call with an enterprise customer and scope a custom solution", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "Which of these problems sounds most fun to debug?",
    answers: [
      { text: "Conversion dropped 3% after a deploy—figure out which experiment variant caused it", archetype: "productHacker" },
      { text: "A batch of international payments settled in the wrong currency", archetype: "moneyArchitect" },
      { text: "Users are rage-clicking a button on mobile—figure out why the UX is confusing", archetype: "experienceCrafter" },
      { text: "A vendor's invoice was auto-paid twice due to a deduplication edge case", archetype: "workflowAutomator" },
      { text: "A customer's QuickBooks sync broke after they upgraded their plan", archetype: "connectorBuilder" },
      { text: "A database migration caused a cascade of slow queries across three services", archetype: "systemsSculptor" },
      { text: "A fraud ring figured out how to bypass the sanctions screening check", archetype: "riskDetective" },
      { text: "A Fortune 500 customer needs a data export format that doesn't exist yet", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "What does 'impact' mean to you?",
    answers: [
      { text: "I moved a metric that directly affected revenue growth", archetype: "productHacker" },
      { text: "Billions of dollars flowed through infrastructure I built", archetype: "moneyArchitect" },
      { text: "Thousands of people used something I built and it just worked", archetype: "experienceCrafter" },
      { text: "A finance team went from 4 hours of manual work to 10 minutes", archetype: "workflowAutomator" },
      { text: "A deal closed because we shipped the integration the customer needed", archetype: "connectorBuilder" },
      { text: "Every engineer at the company shipped faster because of my work", archetype: "systemsSculptor" },
      { text: "A fraud attack was stopped before it cost real money", archetype: "riskDetective" },
      { text: "I solved a problem no one else could because I understood the customer's world", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "Pick a side project that sounds most appealing:",
    answers: [
      { text: "A tool that tracks which landing page variants convert best", archetype: "productHacker" },
      { text: "A personal finance app that reconciles transactions across bank accounts", archetype: "moneyArchitect" },
      { text: "A Chrome extension that simplifies a clunky web app's UI", archetype: "experienceCrafter" },
      { text: "A bot that auto-files your expense reports from email receipts", archetype: "workflowAutomator" },
      { text: "A universal API adapter that normalizes data across different SaaS tools", archetype: "connectorBuilder" },
      { text: "A custom CLI that scaffolds projects, runs linters, and deploys in one command", archetype: "systemsSculptor" },
      { text: "A browser extension that flags phishing sites using heuristic analysis", archetype: "riskDetective" },
      { text: "A demo environment generator that spins up fake data for any customer scenario", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "What kind of team environment do you thrive in?",
    answers: [
      { text: "Fast experiments, data reviews, and quick iterations—ship and measure", archetype: "productHacker" },
      { text: "High-stakes systems where correctness matters more than speed", archetype: "moneyArchitect" },
      { text: "Cross-functional with designers and PMs, obsessing over user feedback", archetype: "experienceCrafter" },
      { text: "Domain-heavy—I want to become an expert in a business process", archetype: "workflowAutomator" },
      { text: "Embedded across teams, contributing to different parts of the product", archetype: "connectorBuilder" },
      { text: "Deep technical work with other platform engineers, focused on leverage", archetype: "systemsSculptor" },
      { text: "Analytically rigorous, where I can combine data science with engineering", archetype: "riskDetective" },
      { text: "Highly autonomous, working directly with customers, lots of ambiguity", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "You have a free Friday to work on anything. What do you pick?",
    answers: [
      { text: "Analyze a funnel to find where users drop off and prototype a fix", archetype: "productHacker" },
      { text: "Read about payment rails (ACH, SWIFT, card networks) and how settlement works", archetype: "moneyArchitect" },
      { text: "User-test a feature with real people and iterate on the design", archetype: "experienceCrafter" },
      { text: "Map out a messy business workflow and design an elegant automated version", archetype: "workflowAutomator" },
      { text: "Explore a third-party API's docs and build a proof-of-concept integration", archetype: "connectorBuilder" },
      { text: "Profile the slowest endpoints and optimize them", archetype: "systemsSculptor" },
      { text: "Study a recent fraud case study and think about how you'd prevent it", archetype: "riskDetective" },
      { text: "Shadow a sales call and think about what tooling could help close the deal", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "What kind of AI/ML work excites you most?",
    answers: [
      { text: "Personalized recommendations that increase product adoption", archetype: "productHacker" },
      { text: "Models that assess creditworthiness or predict payment behavior", archetype: "moneyArchitect" },
      { text: "LLMs that auto-categorize expenses so users never have to", archetype: "experienceCrafter" },
      { text: "AI agents that negotiate vendor bills or auto-process invoices", archetype: "workflowAutomator" },
      { text: "Using LLMs to normalize messy data from different third-party systems", archetype: "connectorBuilder" },
      { text: "Building the platform layer that serves models to other teams reliably", archetype: "systemsSculptor" },
      { text: "Real-time ML models that score every transaction for fraud", archetype: "riskDetective" },
      { text: "AI-powered demo environments or customer-facing consulting tools", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "Which headline would make you proudest?",
    answers: [
      { text: "\"Ramp's conversion rate hit an all-time high after growth experiment\"", archetype: "productHacker" },
      { text: "\"Ramp processes $1B in payments with zero downtime\"", archetype: "moneyArchitect" },
      { text: "\"Ramp named easiest expense tool to use by G2 users\"", archetype: "experienceCrafter" },
      { text: "\"Ramp's AP automation saves customers 10,000 hours per month\"", archetype: "workflowAutomator" },
      { text: "\"Ramp launches 50th integration, unlocking new market segment\"", archetype: "connectorBuilder" },
      { text: "\"Ramp engineers ship 2x faster after internal platform overhaul\"", archetype: "systemsSculptor" },
      { text: "\"Ramp stops $50M fraud ring with real-time detection system\"", archetype: "riskDetective" },
      { text: "\"Fortune 100 company goes live with Ramp in record time\"", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "What's your relationship with ambiguity?",
    answers: [
      { text: "I love it when there's a clear metric and I can experiment my way to the answer", archetype: "productHacker" },
      { text: "I prefer well-defined correctness requirements—money can't be wrong", archetype: "moneyArchitect" },
      { text: "I like talking to users to reduce ambiguity, then iterating", archetype: "experienceCrafter" },
      { text: "I like learning a complex domain deeply and then simplifying it", archetype: "workflowAutomator" },
      { text: "I'm comfortable navigating messy third-party systems and figuring things out", archetype: "connectorBuilder" },
      { text: "I like structured technical problems with measurable before/after", archetype: "systemsSculptor" },
      { text: "I thrive on detective work—piecing together signals to find the truth", archetype: "riskDetective" },
      { text: "Total ambiguity is my comfort zone—give me a customer and I'll figure it out", archetype: "fieldEngineer" }
    ]
  },
  {
    text: "If you could mass-produce one superpower for your team, what would it be?",
    answers: [
      { text: "The ability to run experiments and know what's working instantly", archetype: "productHacker" },
      { text: "Bulletproof reliability—systems that never drop a transaction", archetype: "moneyArchitect" },
      { text: "Perfect empathy—knowing exactly what users need before they ask", archetype: "experienceCrafter" },
      { text: "Process mastery—turning any manual workflow into an automated one", archetype: "workflowAutomator" },
      { text: "Universal compatibility—connecting any system to any other system", archetype: "connectorBuilder" },
      { text: "Infinite developer productivity—every engineer's tools just work", archetype: "systemsSculptor" },
      { text: "Omniscience—seeing every suspicious pattern the moment it appears", archetype: "riskDetective" },
      { text: "Shape-shifting—adapting to whatever the customer needs right now", archetype: "fieldEngineer" }
    ]
  }
];

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
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ========== RENDER QUESTION ==========
function renderQuestion() {
  const q = questions[currentQuestion];
  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = q.text;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;

  answersDiv.innerHTML = '';
  const shuffledAnswers = shuffleArray(q.answers);
  shuffledAnswers.forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => {
      // visual selected state
      document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // score and advance
      selectAnswer(answer.archetype);
    });
    answersDiv.appendChild(btn);
  });
}

// ========== SELECT ANSWER ==========
function selectAnswer(archetype) {
  // ensure scores initialized
  if (!scores || Object.keys(scores).length === 0) initScores();

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
  const topKey = sorted[0][0];
  const runnerUpKey = sorted[1][0];
  const top = archetypes[topKey];
  const runnerUp = archetypes[runnerUpKey];

  const article = getIndefiniteArticle(top.name);

  document.getElementById('result-emoji').textContent = top.emoji;
  document.getElementById('result-title').innerHTML = `You're ${article} <span class="archetype-name">${top.name}</span>!`;
  document.getElementById('result-tagline').textContent = top.tagline;
  document.getElementById('result-description').textContent = top.description;
  document.getElementById('result-enjoy').textContent = top.enjoy;

  const runnerUpDiv = document.getElementById('runner-up');
  if (sorted[1][1] > 0) {
    runnerUpDiv.innerHTML = `
      <h3>Runner-up: ${archetypes[runnerUpKey].emoji} ${archetypes[runnerUpKey].name}</h3>
      <p>${archetypes[runnerUpKey].tagline}</p>
    `;
    runnerUpDiv.style.display = 'block';
  } else {
    runnerUpDiv.style.display = 'none';
  }

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
