// Fortune generator

const tarroCards = {
    theFool: {
        cardName: "The Fool",
        uprightKeywords: "beginnings, freedom, innocence, originality, adventure, idealism, spontaneity",
        reversedKeywords: "reckless, careless, distracted, naive, foolish, gullible, stale, dull",
    },
    theMagician: {
        cardName: "The Magician",
        uprightKeywords: "willpower, desire, being resourceful,, skill, ability, concentration, manifestation",
        reversedKeywords: "manipulation, cunning, trickery, wasted talent, illusion, deception",
    },
    theHighPriestess: {
        cardName: "The High Priestess",
        uprightKeywords: "unconscious, intuition, mystery, spirituality, higher power, inner voice",
        reversedKeywords: "repressed intuition, hidden motives, superficiality, confusion, cognitive dissonance",
    },
    theEmpress: {
        cardName: "The Empress",
        uprightKeywords: "divine feminine, sensuality, fertility, nurturing, creativity, beauty, abundance, nature",
        reversedKeywords: "insecurity, overbearing, negligence, smothering, lack of growth, lack of progress",
    },
    theEmperor: {
        cardName: "The Emperor",
        uprightKeywords: "stability, structure, protection, authority, control, practicality, focus, discipline",
        reversedKeywords: "tyrant, domineering, rigid, stubborn, lack of discipline, recklessness",
    },
    theHierophant: {
        cardName: "The Hierophant",
        uprightKeywords: "tradition, social groups, conventionality, conformity, education, knowledge, beliefs",
        reversedKeywords: "rebellion, unconventionality, non-conformity, new methods, ignorance",
    },
    theLovers: {
        cardName: "The Lovers",
        uprightKeywords: "love, unions, partnerships, relationships, choices, romance, balance, unity",
        reversedKeywords: "disharmony, imbalance, conflict, detachment, bad choices, indecision",
    },
    theChariot: {
        cardName: "The Chariot",
        uprightKeywords: "success, ambition, determination, willpower, control, self-discipline, focus",
        reversedKeywords: "forceful, no direction, no control, powerless, aggression, obstacles",
    },
    strength: {
        cardName: "Strength",
        uprightKeywords: "courage, bravery, confidence, compassion, self-confidence, inner power",
        reversedKeywords: "self-doubt, weakness, low confidence, inadequacy, cowardice, forcefulness",
    },
    theHermit: {
        cardName: "The Hermit",
        uprightKeywords: "self-reflection, introspection, contemplation, withdrawal, solitude, search for self",
        reversedKeywords: "loneliness, isolation, recluse, being anti-social, rejection, returning to society",
    },
    wheelOfFortune: {
        cardName: "Wheel of Fortune",
        uprightKeywords: "change, cycles, fate, decisive moments, luck, fortune, unexpected events",
        reversedKeywords: "bad luck, lack of control, clinging to control, unwelcome changes, delays",
    },
    justice: {
        cardName: "Justice",
        uprightKeywords: "justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect",
        reversedKeywords: "injustice, retribution, dishonesty, corruption, dishonesty, unfairness, avoiding accountability",
    },
    theHangedMan: {
        cardName: "The Hanged man",
        uprightKeywords: "sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation",
        reversedKeywords: "stalling, disinterest, stagnation, avoiding sacrifice, standstill, apathy",
    },
    death: {
        cardName: "Death",
        uprightKeywords: "transformation, endings, change, transition, letting go, release",
        reversedKeywords: "fear of change, repeating negative patterns, resisting change, stagnancy, decay",
    },
    temperance: {
        cardName: "Temperance",
        uprightKeywords: "balance, peace, patience, moderation, calm, tranquillity, harmony, serenity",
        reversedKeywords: "imbalance, excess, extremes, discord, recklessness, hastiness",
    },
    theDevil: {
        cardName: "The Devil",
        uprightKeywords: "oppression, addiction, obsession, dependency, excess, powerlessness, limitations",
        reversedKeywords: "independence, freedom, revelation, release, reclaiming power, reclaiming control",
    },
    theTower: {
        cardName: "The Tower",
        uprightKeywords: "disaster, destruction, upheaval, trauma, sudden change, chaos",
        reversedKeywords: "averting disaster, delaying the inevitable, resisting change",
    },
    theStar: {
        cardName: "The Star",
        uprightKeywords: "hope, inspiration, positivity, faith, renewal, healing, rejuvenation",
        reversedKeywords: "hopelessness, despair, negativity, lack of faith, despondent",
    },
    theMoon: {
        cardName: "The Moon",
        uprightKeywords: "illusion, intuition, uncertainty, confusion, complexity, secrets, unconscious",
        reversedKeywords: "fear, deception, anxiety, misunderstanding, misinterpretation, clarity, understanding",
    },
    theSun: {
        cardName: "The Sun",
        uprightKeywords: "happiness, success, optimism, vitality, joy, confidence, happiness, truth",
        reversedKeywords: "blocked happiness, excessive enthusiasm, pessimism, unrealistic expectations, conceitedness",
    },
    judgement: {
        cardName: "Judgement",
        uprightKeywords: "self-evaluation, awakening, renewal, purpose, reflection, reckoning",
        reversedKeywords: "self-doubt, lack of self-awareness, failure to learn lessons, self-loathing",
    },
    theWorld: {
        cardName: "The World",
        uprightKeywords: "completion, achievement, fulfilment, sense of belonging, wholeness, harmony",
        reversedKeywords: "lack of closure, lack of achievement, feeling incomplete, emptiness",
    },
};

const randomCard = () => {
    const cardArray = Object.keys(tarroCards);
    const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
    return tarroCards[randomCard];
};

const randomCardUpright = () => {
    const card = randomCard();
    return `"${card.cardName}" upright: ${card.uprightKeywords}`;
};

const randomCardReversed = () => {
    const card = randomCard();
    return `"${card.cardName}" reversed: ${card.reversedKeywords}`;
};

console.log(`Today's your fortune card: ${Math.random() > 0.5 ? randomCardUpright() : randomCardReversed()}`);
