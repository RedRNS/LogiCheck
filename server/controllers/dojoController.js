import { v4 as uuidv4 } from 'uuid';

/**
 * Fallacy database with scenarios for the Fallacy Sparring game
 * These 10 fallacies are the core set for LogiCheck
 */
const fallacyDatabase = [
  // Ad Hominem
  {
    scenario: "A politician argues we shouldn't listen to a climate scientist's research because the scientist was once fined for littering.",
    options: ["Straw Man", "Ad Hominem", "Hasty Generalization", "Red Herring"],
    correctAnswer: "Ad Hominem",
    explanation: "This is an Ad Hominem fallacy because it attacks the scientist's character (littering fine) rather than addressing the validity of their climate research."
  },
  {
    scenario: "A debate opponent dismisses a doctor's argument about healthcare reform by pointing out the doctor's expensive car, implying they're too wealthy to understand regular people's problems.",
    options: ["Ad Hominem", "Appeal to Authority", "False Dichotomy", "Bandwagon Appeal"],
    correctAnswer: "Ad Hominem",
    explanation: "This attacks the person's wealth rather than addressing the merits of their healthcare argument."
  },
  
  // Straw Man
  {
    scenario: "Person A: 'We should have stricter regulations on industrial pollution.' Person B: 'So you want to shut down all factories and destroy the economy?'",
    options: ["Straw Man", "Slippery Slope", "False Dichotomy", "Red Herring"],
    correctAnswer: "Straw Man",
    explanation: "Person B misrepresents Person A's argument about stricter regulations as wanting to shut down all factories, making it easier to attack."
  },
  {
    scenario: "A student proposes having healthier lunch options at school. The principal responds, 'I'm not going to ban all the food students enjoy and force everyone to eat salad.'",
    options: ["Straw Man", "Hasty Generalization", "Appeal to Authority", "Post Hoc"],
    correctAnswer: "Straw Man",
    explanation: "The principal distorts the proposal for 'healthier options' into an extreme position of 'banning all enjoyable food', which is easier to dismiss."
  },
  
  // Hasty Generalization
  {
    scenario: "After meeting two rude customers from a particular city, a store clerk concludes that everyone from that city is rude.",
    options: ["Hasty Generalization", "Post Hoc", "Faulty Analogy", "Bandwagon Appeal"],
    correctAnswer: "Hasty Generalization",
    explanation: "Drawing a broad conclusion about all people from a city based on only two encounters is a hasty generalization."
  },
  {
    scenario: "A student fails one math test and declares, 'I'm terrible at all math and will never understand it.'",
    options: ["Hasty Generalization", "Slippery Slope", "False Dichotomy", "Ad Hominem"],
    correctAnswer: "Hasty Generalization",
    explanation: "Concluding that one failed test means permanent inability in all of math is a hasty generalization from insufficient evidence."
  },
  
  // Appeal to Authority
  {
    scenario: "A celebrity with no medical training promotes a health supplement, claiming it cured their illness, so it must work for everyone.",
    options: ["Appeal to Authority", "Bandwagon Appeal", "Post Hoc", "Faulty Analogy"],
    correctAnswer: "Appeal to Authority",
    explanation: "This relies on the celebrity's fame rather than medical expertise or scientific evidence, making it a false appeal to authority."
  },
  {
    scenario: "An advertisement states, 'Nine out of ten dentists recommend this toothpaste,' without mentioning that those dentists were paid consultants for the company.",
    options: ["Appeal to Authority", "Bandwagon Appeal", "Red Herring", "Hasty Generalization"],
    correctAnswer: "Appeal to Authority",
    explanation: "While dentists are legitimate authorities, the conflict of interest undermines the validity of this appeal to authority."
  },
  
  // False Dichotomy
  {
    scenario: "A politician declares, 'Either we build this wall, or our country will be overrun with criminals.'",
    options: ["False Dichotomy", "Slippery Slope", "Straw Man", "Red Herring"],
    correctAnswer: "False Dichotomy",
    explanation: "This presents only two extreme options while ignoring many other possibilities for border security and immigration policy."
  },
  {
    scenario: "A parent tells their child, 'You either study medicine like I want, or you'll end up working a minimum wage job forever.'",
    options: ["False Dichotomy", "Ad Hominem", "Hasty Generalization", "Appeal to Authority"],
    correctAnswer: "False Dichotomy",
    explanation: "This falsely presents only two career outcomes, ignoring the many other professional paths available."
  },
  
  // Slippery Slope
  {
    scenario: "If we allow students to redo one assignment, soon they'll expect to redo everything, then they'll want unlimited deadline extensions, and eventually academic standards will completely collapse.",
    options: ["Slippery Slope", "False Dichotomy", "Hasty Generalization", "Straw Man"],
    correctAnswer: "Slippery Slope",
    explanation: "This assumes that one reasonable accommodation will inevitably lead to a catastrophic chain of events without justification."
  },
  {
    scenario: "A person argues, 'If we ban one type of plastic bag, next they'll ban all plastic, then all packaging, and soon we won't be able to buy anything.'",
    options: ["Slippery Slope", "Red Herring", "Post Hoc", "Faulty Analogy"],
    correctAnswer: "Slippery Slope",
    explanation: "This claims that one environmental regulation will inevitably lead to extreme outcomes without evidence for this chain reaction."
  },
  
  // Red Herring
  {
    scenario: "During a debate about education funding, a candidate suddenly shifts to talking about their military service record instead of addressing the education question.",
    options: ["Red Herring", "Ad Hominem", "Straw Man", "Appeal to Authority"],
    correctAnswer: "Red Herring",
    explanation: "The candidate introduces an irrelevant topic (military service) to distract from the actual question about education funding."
  },
  {
    scenario: "When asked about missing homework, a student responds, 'But what about all the times I did submit my homework on time?'",
    options: ["Red Herring", "Hasty Generalization", "False Dichotomy", "Bandwagon Appeal"],
    correctAnswer: "Red Herring",
    explanation: "The student deflects from the current missing homework by bringing up past submissions, which is irrelevant to the present issue."
  },
  
  // Bandwagon Appeal
  {
    scenario: "An advertisement claims, 'Over 10 million people have bought this product. Shouldn't you?' without explaining why the product is actually good.",
    options: ["Bandwagon Appeal", "Appeal to Authority", "Hasty Generalization", "Post Hoc"],
    correctAnswer: "Bandwagon Appeal",
    explanation: "This argues that because many people bought it, you should too, relying on popularity rather than the product's merits."
  },
  {
    scenario: "A teenager tells their parents, 'Everyone in my class has the latest phone. I need one too or I'll be left out.'",
    options: ["Bandwagon Appeal", "False Dichotomy", "Ad Hominem", "Slippery Slope"],
    correctAnswer: "Bandwagon Appeal",
    explanation: "This argues for getting the phone based on what everyone else has, rather than on actual need or value."
  },
  
  // Faulty Analogy
  {
    scenario: "A manager argues, 'Employees are like machines. Just as we don't ask machines how they feel, we shouldn't care about employee satisfaction.'",
    options: ["Faulty Analogy", "Ad Hominem", "Straw Man", "False Dichotomy"],
    correctAnswer: "Faulty Analogy",
    explanation: "This comparison between employees and machines is faulty because humans have emotions, motivations, and needs that machines don't have."
  },
  {
    scenario: "Someone argues, 'Banning books is like weeding a garden. Just as gardeners remove harmful weeds, we should remove harmful books.'",
    options: ["Faulty Analogy", "Slippery Slope", "Appeal to Authority", "Bandwagon Appeal"],
    correctAnswer: "Faulty Analogy",
    explanation: "This analogy is faulty because weeds objectively harm gardens, but labeling books as 'harmful' is subjective and involves complex free speech considerations that don't apply to gardening."
  },
  
  // Post Hoc Ergo Propter Hoc
  {
    scenario: "After a new mayor took office, the city's crime rate decreased. Therefore, the mayor's policies must have caused the decrease in crime.",
    options: ["Post Hoc", "Hasty Generalization", "False Dichotomy", "Faulty Analogy"],
    correctAnswer: "Post Hoc",
    explanation: "This assumes that because the crime decrease happened after the mayor took office, the mayor's policies caused it, ignoring other potential factors."
  },
  {
    scenario: "I wore my lucky socks during the exam and got an A. These socks must bring good luck on tests.",
    options: ["Post Hoc", "Hasty Generalization", "Appeal to Authority", "Red Herring"],
    correctAnswer: "Post Hoc",
    explanation: "This assumes that wearing the socks caused the good grade simply because it happened first, ignoring the actual cause (studying, preparation, etc.)."
  }
];

/**
 * Get a random sparring challenge
 * GET /api/dojo/sparring-challenge
 */
export const getSparringChallenge = async (req, res) => {
  try {
    // Select a random challenge from the database
    const randomIndex = Math.floor(Math.random() * fallacyDatabase.length);
    const challenge = fallacyDatabase[randomIndex];

    const response = {
      challengeId: uuidv4(),
      scenario: challenge.scenario,
      options: challenge.options,
      correctAnswer: challenge.correctAnswer
    };

    res.json(response);

  } catch (error) {
    console.error('Error in getSparringChallenge:', error);
    res.status(500).json({
      error: {
        message: 'Failed to fetch sparring challenge',
        status: 500
      }
    });
  }
};

/**
 * Verify the user's answer to a sparring challenge
 * POST /api/dojo/verify-answer
 */
export const verifySparringAnswer = async (req, res) => {
  try {
    const { challengeId, userAnswer, scenario } = req.body;

    if (!userAnswer || !scenario) {
      return res.status(400).json({
        error: {
          message: 'Missing required fields',
          status: 400
        }
      });
    }

    // Find the challenge in the database by scenario
    const challenge = fallacyDatabase.find(c => c.scenario === scenario);

    if (!challenge) {
      return res.status(404).json({
        error: {
          message: 'Challenge not found',
          status: 404
        }
      });
    }

    const isCorrect = userAnswer === challenge.correctAnswer;

    res.json({
      isCorrect,
      correctAnswer: challenge.correctAnswer,
      explanation: challenge.explanation
    });

  } catch (error) {
    console.error('Error in verifySparringAnswer:', error);
    res.status(500).json({
      error: {
        message: 'Failed to verify answer',
        status: 500
      }
    });
  }
};
