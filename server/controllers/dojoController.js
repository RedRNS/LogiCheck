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

/**
 * Bias Blindspot Challenge Database
 * Contains pairs of articles on the same topic from opposing perspectives
 */
const biasDatabase = [
  {
    topic: "Climate Change Policy",
    articleA: {
      source: "Progressive News Network",
      bias: "Left-leaning",
      title: "Climate Crisis Demands Immediate Action",
      content: "Scientists are sounding the alarm: our planet is on the brink of catastrophe. The devastating wildfires, unprecedented floods, and scorching heatwaves we've witnessed are not random events—they're dire warnings of the climate emergency we face. Every day of inaction is a betrayal of future generations. Progressive leaders are fighting tooth and nail against the fossil fuel industry's stranglehold on our government, but conservative politicians continue to deny science and protect their corporate donors. We must act now with bold, sweeping reforms before it's too late."
    },
    articleB: {
      source: "Conservative Policy Review",
      bias: "Right-leaning",
      title: "Balanced Approach Needed for Climate Policy",
      content: "While climate change is a concern that deserves attention, radical environmentalists are pushing extreme policies that would devastate our economy and hurt working families. Their alarmist rhetoric ignores the real-world consequences of shutting down entire industries overnight. Hardworking Americans in energy sectors would lose their jobs, while elitist politicians fly in private jets to climate conferences. We need sensible, market-based solutions that protect both our environment and our prosperity—not the job-killing regulations that liberal activists demand."
    }
  },
  {
    topic: "Education Reform",
    articleA: {
      source: "Teachers United Journal",
      bias: "Pro-teacher union",
      title: "Public Schools Under Attack by Privatization Agenda",
      content: "Corporate interests are systematically dismantling our public education system. Greedy charter school operators and voucher advocates are siphoning away desperately needed funds from struggling public schools, all while lining their own pockets. Our dedicated teachers—who already sacrifice so much for poverty-stricken students—face unconscionable budget cuts while billionaires push their privatization schemes. These reformers care nothing about education quality; they only see dollar signs. We must stand with our heroic teachers and protect public education from these predatory corporate raiders."
    },
    articleB: {
      source: "Parents for School Choice",
      bias: "Pro-school choice",
      title: "Empowering Parents Through Education Options",
      content: "For too long, teachers unions have held our children's education hostage to protect their own interests. Thousands of students remain trapped in failing schools while union bosses fight any attempt at meaningful reform. Parents—especially in underserved communities—are demanding the freedom to choose the best education for their children, whether that's a charter school, private school, or homeschooling. But the education establishment continues its fear-mongering campaign, protecting the status quo at the expense of student success. It's time to put children first and break the unions' monopoly on education."
    }
  },
  {
    topic: "Immigration Policy",
    articleA: {
      source: "Border Security Today",
      bias: "Restrictionist",
      title: "Border Crisis Threatens National Security",
      content: "Our southern border is in complete chaos. Waves of illegal immigrants are flooding across, overwhelming our communities and draining public resources. Criminal cartels are exploiting our weak border enforcement, trafficking dangerous drugs and weapons into American neighborhoods. Law-abiding citizens are paying the price while politicians turn a blind eye to this invasion. Every country has the right—the duty—to protect its borders and control who enters. Yet open-borders advocates recklessly dismiss these legitimate security concerns as 'xenophobia.' We need leaders with the courage to enforce our laws and protect American families."
    },
    articleB: {
      source: "New Americans Coalition",
      bias: "Pro-immigration",
      title: "Compassion and Justice for Immigrant Families",
      content: "Heartbreaking images of families torn apart at the border reveal the cruelty of our broken immigration system. Desperate refugees fleeing violence and persecution are being treated like criminals by xenophobic politicians who exploit fear for political gain. These vulnerable people—including innocent children—deserve compassion, not demonization. They're seeking the same opportunities our own ancestors sought when they came to America. Yet hardliners continue their inhumane crusade, spreading racist rhetoric and proposing cruel policies that violate our nation's values. We must reject this hatred and embrace our identity as a nation of immigrants."
    }
  }
];

/**
 * Get a random Bias Blindspot Challenge
 * GET /api/dojo/bias-challenge
 */
export const getBiasChallenge = async (req, res) => {
  try {
    // Select a random challenge from the bias database
    const randomIndex = Math.floor(Math.random() * biasDatabase.length);
    const challenge = biasDatabase[randomIndex];

    const response = {
      challengeId: uuidv4(),
      topic: challenge.topic,
      articleA: challenge.articleA,
      articleB: challenge.articleB,
      instructions: "Highlight examples of loaded language, emotional appeals, and biased framing in both articles. Notice how each source presents the same topic through a different lens."
    };

    res.json(response);

  } catch (error) {
    console.error('Error in getBiasChallenge:', error);
    res.status(500).json({
      error: {
        message: 'Failed to fetch bias challenge',
        status: 500
      }
    });
  }
};

/**
 * Analyze user's bias highlights and provide feedback
 * POST /api/dojo/analyze-bias-highlights
 */
export const analyzeBiasHighlights = async (req, res) => {
  try {
    const { challengeId, articleAHighlights, articleBHighlights, topic } = req.body;

    if (!articleAHighlights || !articleBHighlights || !topic) {
      return res.status(400).json({
        error: {
          message: 'Missing required fields',
          status: 400
        }
      });
    }

    // Count highlights by category
    const countByCategory = (highlights) => {
      return highlights.reduce((acc, h) => {
        acc[h.category] = (acc[h.category] || 0) + 1;
        return acc;
      }, {});
    };

    const articleAStats = countByCategory(articleAHighlights);
    const articleBStats = countByCategory(articleBHighlights);
    const totalHighlights = articleAHighlights.length + articleBHighlights.length;

    // Generate feedback based on highlights
    let feedback = {
      overallScore: 0,
      strengths: [],
      improvements: [],
      insights: [],
      categoryBreakdown: {
        loaded: (articleAStats.loaded || 0) + (articleBStats.loaded || 0),
        emotional: (articleAStats.emotional || 0) + (articleBStats.emotional || 0),
        framing: (articleAStats.framing || 0) + (articleBStats.framing || 0)
      }
    };

    // Evaluate completeness
    if (totalHighlights >= 10) {
      feedback.strengths.push("Excellent thoroughness! You identified a substantial number of bias indicators across both articles.");
      feedback.overallScore += 30;
    } else if (totalHighlights >= 5) {
      feedback.strengths.push("Good effort in identifying bias indicators in both articles.");
      feedback.overallScore += 20;
    } else {
      feedback.improvements.push("Try to identify more examples of bias. Look closely at word choices, emotional language, and how facts are framed.");
      feedback.overallScore += 10;
    }

    // Evaluate category diversity
    const categoriesUsed = Object.keys({...articleAStats, ...articleBStats}).length;
    if (categoriesUsed === 3) {
      feedback.strengths.push("Great job identifying all three types of bias: loaded language, emotional appeals, and biased framing!");
      feedback.overallScore += 30;
    } else if (categoriesUsed === 2) {
      feedback.improvements.push("You identified two types of bias. Try to also look for the third category to get a more complete picture.");
      feedback.overallScore += 20;
    } else {
      feedback.improvements.push("Focus on identifying different types of bias, not just one category. Look for loaded language, emotional appeals, AND biased framing.");
      feedback.overallScore += 10;
    }

    // Evaluate balance between articles
    const articleARatio = articleAHighlights.length / totalHighlights;
    if (articleARatio >= 0.4 && articleARatio <= 0.6) {
      feedback.strengths.push("Well-balanced analysis! You recognized that both articles contain bias, not just one perspective.");
      feedback.overallScore += 25;
    } else {
      feedback.improvements.push("Try to identify bias in BOTH articles more evenly. Remember, both perspectives use biased language—not just one side.");
      feedback.overallScore += 10;
    }

    // Specific insights based on the topic
    feedback.insights.push("Both articles use emotionally charged language to influence readers rather than presenting neutral facts.");
    feedback.insights.push("Notice how each source frames the same issue completely differently based on their ideological perspective.");
    feedback.insights.push("Loaded language often reveals the author's bias more clearly than the facts they present.");

    // Cap score at 100
    feedback.overallScore = Math.min(feedback.overallScore, 100);

    // Add performance message
    if (feedback.overallScore >= 80) {
      feedback.performanceLevel = "Expert";
      feedback.message = "Outstanding! You have a keen eye for identifying bias in different forms.";
    } else if (feedback.overallScore >= 60) {
      feedback.performanceLevel = "Proficient";
      feedback.message = "Good work! You're developing strong skills in recognizing biased language.";
    } else if (feedback.overallScore >= 40) {
      feedback.performanceLevel = "Developing";
      feedback.message = "You're on the right track. Keep practicing to sharpen your bias detection skills.";
    } else {
      feedback.performanceLevel = "Beginner";
      feedback.message = "Keep practicing! Bias detection is a skill that improves with experience.";
    }

    res.json(feedback);

  } catch (error) {
    console.error('Error in analyzeBiasHighlights:', error);
    res.status(500).json({
      error: {
        message: 'Failed to analyze bias highlights',
        status: 500
      }
    });
  }
};
