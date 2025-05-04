const wordData = [
  {
    category: "Positive Adjectives - Basic",
    terms: [
      {
        term: "Amazed",
        definition:
          "Experiencing great surprise or wonder, often due to something extraordinary or unexpectedly delightful."
      },
      {
        term: "Amused",
        definition: "Finding something humorous or entertaining, often resulting in a light-hearted smile or chuckle."
      },
      {
        term: "Animated",
        definition: "Full of life, enthusiasm, and spirited energy, often making situations lively and engaging."
      },
      {
        term: "Astonished",
        definition:
          "Overwhelmed with amazement or surprise, typically due to an unexpected and impressive event or revelation."
      },
      {
        term: "Blissful",
        definition:
          "Experiencing or expressing extreme happiness and joy, often accompanied by a sense of perfect contentment."
      },
      {
        term: "Buoyant",
        definition:
          "Exhibiting cheerfulness and optimism, with an ability to remain upbeat even in challenging circumstances."
      },
      {
        term: "Calm",
        definition: "Maintaining a state of tranquility and composure, free from agitation or emotional distress."
      },
      {
        term: "Cheerful",
        definition: "Displaying noticeable happiness and optimism, often spreading positivity to those around."
      },
      {
        term: "Confident",
        definition: "Possessing a strong sense of self-assurance and belief in one's abilities or decisions."
      },
      {
        term: "Content",
        definition: "Feeling a deep sense of satisfaction and peace with one's current circumstances or achievements."
      },
      {
        term: "Curious",
        definition:
          "Eager to explore, learn, or understand something new, driven by intellectual or emotional intrigue."
      },
      {
        term: "Delighted",
        definition: "Experiencing great pleasure and satisfaction, often due to a pleasant or unexpected event."
      },
      {
        term: "Eager",
        definition: "Showing keen interest or enthusiasm for something anticipated, often with a sense of readiness."
      },
      {
        term: "Ecstatic",
        definition: "Overwhelmed with intense happiness or excitement, often to the point of exuberant expression."
      },
      {
        term: "Elated",
        definition: "Filled with ecstatic joy or pride, often resulting from a significant achievement or happy event."
      },
      {
        term: "Empathetic",
        definition:
          "Demonstrating the ability to deeply understand and share the emotions of others, fostering connection."
      },
      {
        term: "Energetic",
        definition: "Possessing or displaying vigorous enthusiasm and vitality, often invigorating those nearby."
      },
      {
        term: "Enthusiastic",
        definition: "Exhibiting intense excitement and eager interest, often inspiring others with passion."
      },
      {
        term: "Exuberant",
        definition: "Overflowing with lively energy, excitement, and unrestrained joy, often contagious to others."
      },
      {
        term: "Gleeful",
        definition: "Expressing exuberant or triumphant joy, often with playful or childlike delight."
      },
      {
        term: "Grateful",
        definition: "Feeling or expressing heartfelt appreciation for kindness, support, or positive circumstances."
      },
      {
        term: "Happy",
        definition: "Experiencing or displaying pleasure, contentment, or joy, often reflected in a positive demeanor."
      },
      {
        term: "Hopeful",
        definition: "Feeling or inspiring optimism and confidence about a positive outcome or future event."
      },
      {
        term: "Inspired",
        definition:
          "Filled with a sudden urge or motivation to create, act, or pursue something meaningful or innovative."
      },
      {
        term: "Intrigued",
        definition: "Having one's curiosity or interest strongly aroused, often by something mysterious or fascinating."
      },
      {
        term: "Joyful",
        definition: "Experiencing, expressing, or causing great pleasure and happiness, often with a radiant quality."
      },
      {
        term: "Jubilant",
        definition: "Displaying great joy, triumph, or celebration, often marked by enthusiastic expressions."
      },
      {
        term: "Loving",
        definition: "Showing deep affection, care, or devotion, often fostering warmth and connection."
      },
      {
        term: "Merry",
        definition: "Characterized by cheerful, festive, or lighthearted joy, often associated with celebration."
      },
      {
        term: "Moved (emotionally)",
        definition:
          "Experiencing deep, often tender emotions, such as gratitude or compassion, stirred by a meaningful event."
      },
      {
        term: "Nostalgic",
        definition:
          "Feeling a sentimental longing for past experiences or times, often tinged with warmth and melancholy."
      },
      {
        term: "Optimistic",
        definition: "Maintaining a hopeful and positive outlook, expecting favorable outcomes even in uncertainty."
      },
      {
        term: "Overjoyed",
        definition: "Experiencing extreme happiness or elation, often overwhelming in its intensity."
      },
      {
        term: "Peaceful",
        definition: "Enjoying a state of calm and tranquility, free from disturbance or inner turmoil."
      },
      {
        term: "Pensive",
        definition: "Engaged in deep, reflective thought, often with a quiet or contemplative demeanor."
      },
      {
        term: "Playful",
        definition: "Fond of lighthearted fun, games, or teasing, often bringing joy and spontaneity to interactions."
      },
      {
        term: "Pleased",
        definition: "Feeling satisfaction or pleasure, typically due to a favorable outcome or experience."
      },
      {
        term: "Proud",
        definition:
          "Experiencing deep satisfaction or pleasure from one's own or another's accomplishments or qualities."
      },
      {
        term: "Radiant",
        definition: "Emitting or reflecting bright happiness or vitality, often metaphorically glowing with joy."
      },
      {
        term: "Satisfied",
        definition: "Feeling fulfilled or pleased because one's expectations or needs have been met."
      },
      {
        term: "Serene",
        definition: "Exhibiting calm, peacefulness, and an untroubled state, often radiating quiet confidence."
      },
      {
        term: "Silly",
        definition: "Engaging in playful, absurd, or foolish behavior, often in a lighthearted or endearing way."
      },
      {
        term: "Spirited",
        definition: "Full of lively energy, courage, or enthusiasm, often inspiring action or excitement."
      },
      {
        term: "Surprised",
        definition: "Experiencing sudden astonishment or wonder due to an unexpected event or revelation."
      },
      {
        term: "Sympathetic",
        definition: "Showing or feeling concern and understanding for another's emotions or struggles."
      },
      {
        term: "Tender",
        definition: "Expressing gentle care, affection, or sensitivity, often in a nurturing or protective manner."
      },
      {
        term: "Thoughtful",
        definition: "Demonstrating careful consideration or kindness, often attentive to others' needs or feelings."
      },
      {
        term: "Thrilled",
        definition: "Experiencing a sudden, intense wave of excitement or pleasure, often due to an exciting event."
      },
      {
        term: "Triumphant",
        definition:
          "Feeling victorious or successful, often accompanied by pride and elation after overcoming challenges."
      },
      {
        term: "Upbeat",
        definition: "Maintaining a cheerful, optimistic, and lively attitude, often uplifting those around."
      },
      {
        term: "Vibrant",
        definition: "Bursting with energy, enthusiasm, and vivid life, often making experiences colorful and dynamic."
      },
      {
        term: "Wistful",
        definition:
          "Feeling a gentle, regretful longing, often for something lost or unattainable, with a touch of sadness."
      },
      {
        term: "Zealous",
        definition: "Demonstrating fervent enthusiasm or devotion, often with intense commitment to a cause or goal."
      }
    ]
  },
  {
    category: "Negative Adjectives - Basic",
    terms: [
      {
        term: "Afraid",
        definition: "Experiencing fear or apprehension, often due to a perceived threat or uncertainty."
      },
      {
        term: "Agitated",
        definition: "Feeling or appearing visibly troubled, restless, or nervous, often due to stress or irritation."
      },
      {
        term: "Angry",
        definition: "Feeling intense displeasure or hostility, often triggered by perceived injustice or frustration."
      },
      {
        term: "Annoyed",
        definition: "Experiencing mild anger or irritation, typically due to a minor inconvenience or disturbance."
      },
      {
        term: "Anxious",
        definition: "Feeling unease or nervousness, often about an uncertain or potentially negative outcome."
      },
      {
        term: "Cranky",
        definition: "Displaying irritability or bad temper, often due to discomfort, fatigue, or minor annoyances."
      },
      {
        term: "Depressed",
        definition: "Experiencing deep sadness, hopelessness, or discouragement, often affecting mood and energy."
      },
      {
        term: "Distressed",
        definition: "Feeling intense emotional or physical suffering, often due to a traumatic or upsetting situation."
      },
      {
        term: "Forlorn",
        definition: "Appearing pitifully sad or lonely, often with a sense of abandonment or hopelessness."
      },
      {
        term: "Frustrated",
        definition: "Feeling upset or annoyed due to obstacles preventing the achievement of a goal or desire."
      },
      {
        term: "Furious",
        definition: "Overwhelmed with extreme anger, often leading to intense emotional or verbal outbursts."
      },
      {
        term: "Gloomy",
        definition: "Feeling or projecting a sense of pessimism, sadness, or darkness, often affecting the atmosphere."
      },
      {
        term: "Grumpy",
        definition: "Exhibiting a bad-tempered or irritable mood, often making interactions unpleasant."
      },
      {
        term: "Irritated",
        definition: "Feeling slight anger or annoyance, often due to repeated or minor provocations."
      },
      {
        term: "Miserable",
        definition: "Experiencing profound unhappiness or discomfort, often with a sense of despair or suffering."
      },
      {
        term: "Mournful",
        definition: "Expressing or evoking deep sadness or grief, often associated with loss or regret."
      },
      {
        term: "Nervous",
        definition: "Feeling apprehensive or uneasy, often accompanied by physical signs like trembling or sweating."
      },
      { term: "Peeved", definition: "Feeling mildly irritated or annoyed, often over a petty or trivial matter." },
      {
        term: "Sad",
        definition: "Experiencing or expressing sorrow or unhappiness, often due to loss, disappointment, or hardship."
      },
      { term: "Scared", definition: "Feeling fear or fright, often triggered by a sudden or perceived danger." },
      {
        term: "Sorrowful",
        definition: "Feeling or expressing deep sadness or grief, often with a heavy-hearted or mournful tone."
      },
      {
        term: "Tense",
        definition: "Experiencing nervous strain or fear, often physically or emotionally rigid due to stress."
      },
      {
        term: "Unhappy",
        definition: "Feeling or displaying a lack of happiness, often due to dissatisfaction or negative circumstances."
      },
      { term: "Upset", definition: "Feeling unhappy or unsettled, often due to an unexpected or disappointing event." },
      {
        term: "Vexed",
        definition: "Feeling annoyed or frustrated, often due to a perplexing or irritating situation."
      },
      { term: "Worried", definition: "Experiencing concern or anxiety about potential problems or uncertain outcomes." }
    ]
  },
  {
    category: "Negative Adjectives - More Complex",
    terms: [
      {
        term: "Alienated",
        definition: "Feeling estranged or disconnected from others, often resulting in loneliness or isolation."
      },
      {
        term: "Apathetic",
        definition: "Lacking interest, enthusiasm, or concern, often appearing indifferent to events or emotions."
      },
      {
        term: "Ashamed",
        definition:
          "Feeling deep embarrassment or guilt due to one's actions, traits, or associations, often with a sense of disgrace."
      },
      {
        term: "Bitter",
        definition: "Feeling intense resentment or anger, often due to perceived unfair treatment or betrayal."
      },
      {
        term: "Contemptuous",
        definition: "Expressing scorn or disdain, often looking down on others with a sense of superiority."
      },
      {
        term: "Cynical",
        definition:
          "Distrusting others' motives, believing people act out of self-interest, often with a sarcastic tone."
      },
      { term: "Dejected", definition: "Feeling low-spirited or disheartened, often due to disappointment or failure." },
      {
        term: "Disappointed",
        definition: "Feeling sadness or dissatisfaction when expectations or hopes are not met by people or events."
      },
      {
        term: "Disgusted",
        definition: "Experiencing strong revulsion or aversion, often due to something morally or physically repulsive."
      },
      {
        term: "Disheartened",
        definition: "Having lost confidence, hope, or enthusiasm, often feeling discouraged by setbacks."
      },
      {
        term: "Dismayed",
        definition: "Feeling shock, distress, or discouragement, often due to an unexpected or upsetting event."
      },
      {
        term: "Despondent",
        definition: "Experiencing a profound loss of hope or courage, often sinking into deep sadness."
      },
      {
        term: "Embarrassed",
        definition: "Feeling self-conscious or awkward, often due to a social blunder or exposure of flaws."
      },
      {
        term: "Envious",
        definition:
          "Feeling resentful longing for another's possessions, qualities, or achievements, often with bitterness."
      },
      {
        term: "Frustrated",
        definition: "Feeling intense annoyance or exasperation due to inability to achieve a goal or resolve a problem."
      },
      {
        term: "Guilty",
        definition: "Feeling remorse or responsibility for having done something wrong, often accompanied by regret."
      },
      {
        term: "Humiliated",
        definition: "Feeling deeply ashamed or foolish, often due to public ridicule or degradation."
      },
      {
        term: "Indignant",
        definition: "Feeling anger or scorn due to perceived injustice, unfair treatment, or insult."
      },
      {
        term: "Isolated",
        definition: "Feeling or being physically or emotionally separated from others, often leading to loneliness."
      },
      {
        term: "Jealous",
        definition: "Feeling envy or resentment toward someone due to their advantages, achievements, or possessions."
      },
      {
        term: "Lonely",
        definition: "Feeling sadness due to a lack of companionship or connection, often craving social interaction."
      },
      {
        term: "Morose",
        definition: "Exhibiting a sullen, gloomy, or ill-tempered mood, often withdrawing from social engagement."
      },
      {
        term: "Regretful",
        definition:
          "Feeling sorrow or remorse for actions, decisions, or missed opportunities, often with a wish to undo them."
      },
      {
        term: "Repulsed",
        definition: "Feeling intense disgust or aversion, often recoiling from something offensive or repugnant."
      },
      {
        term: "Resentful",
        definition:
          "Feeling bitterness or indignation due to unfair treatment or perceived slights, often harboring grudges."
      },
      {
        term: "Skeptical",
        definition:
          "Questioning or doubting the truth or reliability of something, often with a cautious or critical attitude."
      }
    ]
  },
  {
    category: "Subtle or Mixed Adjectives",
    terms: [
      {
        term: "Ambivalent",
        definition:
          "Experiencing conflicting or mixed feelings about something, often torn between opposing emotions or opinions."
      },
      {
        term: "Apprehensive",
        definition: "Feeling anxious or fearful about a potential negative outcome, often with hesitation or unease."
      },
      {
        term: "Awkward",
        definition:
          "Causing or feeling discomfort or embarrassment, often due to social clumsiness or difficult situations."
      },
      {
        term: "Bewildered",
        definition:
          "Feeling completely confused or disoriented, often struggling to make sense of a situation or information."
      },
      {
        term: "Bittersweet",
        definition:
          "Evoking a mix of pleasure and sadness, often tied to experiences that are joyful yet tinged with loss or regret."
      },
      {
        term: "Contemplative",
        definition:
          "Engaged in deep, introspective thought, often reflecting on complex or profound matters with focus."
      },
      {
        term: "Defensive",
        definition: "Overly sensitive to criticism or challenge, often reacting with protectiveness or justification."
      },
      {
        term: "Desperate",
        definition:
          "Feeling or showing a hopeless sense of urgency, often acting recklessly to resolve an overwhelming situation."
      },
      {
        term: "Devastated",
        definition: "Experiencing overwhelming shock, grief, or despair, often due to a catastrophic loss or event."
      },
      {
        term: "Disconcerted",
        definition: "Feeling unsettled or mildly disturbed, often due to an unexpected or confusing situation."
      },
      {
        term: "Hesitant",
        definition: "Acting or speaking with reluctance or uncertainty, often due to doubt or fear of consequences."
      },
      {
        term: "Horrified",
        definition:
          "Filled with intense shock, fear, or disgust, often in response to something appalling or terrifying."
      },
      {
        term: "Melancholy",
        definition: "Experiencing a deep, pensive sadness, often without a clear cause, tinged with reflective longing."
      },
      {
        term: "Perplexed",
        definition:
          "Feeling completely puzzled or baffled, often struggling to understand a complex or unclear situation."
      },
      {
        term: "Puzzled",
        definition: "Experiencing mild confusion or uncertainty, often trying to solve or understand something unclear."
      },
      {
        term: "Raging",
        definition:
          "Expressing uncontrollable, intense anger, often with explosive or overwhelming emotional outbursts."
      },
      {
        term: "Reflective",
        definition: "Engaged in thoughtful contemplation, often considering past experiences or deeper meanings."
      },
      {
        term: "Surprised",
        definition: "Feeling sudden astonishment or wonder due to an unexpected event, often with a mix of emotions."
      },
      {
        term: "Terrified",
        definition: "Experiencing extreme fear or dread, often paralyzed or overwhelmed by a perceived threat."
      },
      {
        term: "Uncomfortable",
        definition:
          "Feeling physical or emotional unease, often due to awkwardness, tension, or unfavorable conditions."
      },
      {
        term: "Vulnerable",
        definition: "Feeling exposed to emotional or physical harm, often lacking protection or security."
      },
      {
        term: "Wary",
        definition: "Feeling cautious or suspicious, often alert to potential dangers or risks in a situation."
      }
    ]
  },
  {
    category: "Neutral Adjectives",
    terms: [
      {
        term: "Abstract",
        definition:
          "Relating to ideas or concepts rather than physical objects, often requiring intellectual interpretation."
      },
      {
        term: "Adaptable",
        definition:
          "Capable of adjusting to new conditions or changes, often demonstrating flexibility in various situations."
      },
      {
        term: "Alert",
        definition: "Being fully aware and attentive, often quick to notice or respond to changes or potential issues."
      },
      {
        term: "Analytical",
        definition:
          "Inclined to examine things carefully and methodically, often breaking down complex information into parts."
      },
      {
        term: "Balanced",
        definition: "Maintaining equilibrium or fairness, often showing stability in judgment or perspective."
      },
      {
        term: "Cautious",
        definition: "Acting with care to avoid risks or mistakes, often proceeding with deliberation and foresight."
      },
      {
        term: "Complex",
        definition: "Consisting of many interconnected parts, often intricate or difficult to understand fully."
      },
      {
        term: "Composed",
        definition: "Maintaining a calm and controlled demeanor, often in the face of stress or challenge."
      },
      {
        term: "Concise",
        definition: "Expressing much in few words, often clear and to the point without unnecessary elaboration."
      },
      {
        term: "Consistent",
        definition: "Acting or performing in the same way over time, often reliable and predictable in behavior."
      },
      {
        term: "Conventional",
        definition:
          "Following established customs or norms, often adhering to traditional or widely accepted practices."
      },
      {
        term: "Creative",
        definition:
          "Having the ability to produce original ideas or solutions, often marked by imagination and innovation."
      },
      {
        term: "Curious",
        definition: "Eager to learn or know more, often driven by a desire to explore or understand new information."
      },
      {
        term: "Deliberate",
        definition: "Done with careful consideration or intention, often slow and purposeful in action or decision."
      },
      {
        term: "Detached",
        definition: "Remaining emotionally uninvolved or objective, often observing situations without personal bias."
      },
      {
        term: "Discreet",
        definition: "Being careful or reserved in speech or actions, often to avoid causing offense or attention."
      },
      {
        term: "Diverse",
        definition: "Showing a variety of forms or types, often encompassing a range of differences or characteristics."
      },
      {
        term: "Dynamic",
        definition: "Characterized by constant change or activity, often energetic and forceful in nature."
      },
      {
        term: "Efficient",
        definition:
          "Achieving maximum productivity with minimal wasted time or effort, often streamlined and effective."
      },
      {
        term: "Flexible",
        definition: "Capable of bending or adapting easily, often open to change or new approaches."
      },
      {
        term: "Focused",
        definition:
          "Concentrating attention or effort on a specific task or goal, often with clarity and determination."
      },
      {
        term: "Impartial",
        definition: "Treating all sides equally without favoritism, often maintaining fairness and objectivity."
      },
      {
        term: "Independent",
        definition: "Acting or thinking freely, often without reliance on others for support or guidance."
      },
      {
        term: "Inquisitive",
        definition: "Showing a strong desire to investigate or learn, often asking questions to gain understanding."
      },
      {
        term: "Introspective",
        definition: "Examining one's own thoughts or feelings, often engaging in deep self-reflection."
      },
      {
        term: "Logical",
        definition: "Based on clear reasoning or sound judgment, often following a rational and systematic approach."
      },
      {
        term: "Methodical",
        definition: "Proceeding in an orderly and systematic manner, often with careful planning and organization."
      },
      {
        term: "Meticulous",
        definition: "Showing great attention to detail, often thorough and precise in tasks or observations."
      },
      {
        term: "Moderate",
        definition: "Avoiding extremes, often maintaining a reasonable or restrained approach in actions or opinions."
      },
      {
        term: "Neutral",
        definition: "Not favoring one side over another, often remaining unbiased or without strong opinion."
      },
      {
        term: "Objective",
        definition: "Based on facts rather than feelings, often uninfluenced by personal emotions or biases."
      },
      {
        term: "Observant",
        definition: "Quick to notice or perceive things, often paying close attention to details or surroundings."
      },
      {
        term: "Orderly",
        definition: "Arranged or conducted in a neat and systematic way, often promoting clarity and efficiency."
      },
      {
        term: "Organized",
        definition: "Having a structured and systematic approach, often arranging things or tasks in a clear order."
      },
      {
        term: "Patient",
        definition: "Able to endure delays or difficulties calmly, often without frustration or complaint."
      },
      {
        term: "Precise",
        definition: "Being exact and accurate in detail, often careful to avoid errors or ambiguity."
      },
      {
        term: "Rational",
        definition: "Based on reason or logic, often making decisions grounded in clear and sensible thinking."
      },
      {
        term: "Refined",
        definition: "Developed or improved to a high degree of polish, often elegant or sophisticated in manner."
      },
      {
        term: "Reserved",
        definition: "Tending to keep thoughts or feelings private, often appearing restrained or formal."
      },
      {
        term: "Resourceful",
        definition: "Skilled at finding ways to solve problems, often using available means creatively."
      },
      {
        term: "Stable",
        definition: "Not likely to change or fail, often providing a sense of reliability or consistency."
      },
      { term: "Steady", definition: "Firmly fixed or constant, often maintaining a calm and even pace or progress." },
      {
        term: "Strategic",
        definition: "Planned or coordinated carefully, often with a focus on achieving long-term goals."
      },
      {
        term: "Subtle",
        definition: "Delicate or precise, often requiring careful attention to notice or understand fully."
      },
      {
        term: "Systematic",
        definition: "Done according to a fixed plan or system, often methodical and well-organized."
      },
      {
        term: "Tactful",
        definition: "Showing sensitivity in dealing with others, often avoiding offense through careful wording."
      },
      {
        term: "Thorough",
        definition: "Performed with great care and completeness, often leaving no detail overlooked."
      },
      { term: "Unassuming", definition: "Not drawing attention to oneself, often modest or lacking in pretension." },
      {
        term: "Versatile",
        definition: "Capable of adapting to many different functions or activities, often multi-skilled."
      },
      {
        term: "Watchful",
        definition: "Carefully observing or monitoring, often alert to potential changes or dangers."
      }
    ]
  },
  {
    category: "Conversational Tone Adjectives",
    terms: [
      {
        term: "Abrasive",
        definition:
          "Harsh and rude in manner, often causing discomfort or offense with a grating or confrontational tone."
      },
      {
        term: "Affable",
        definition:
          "Warm, friendly, and easy to talk to, often creating a pleasant and approachable conversational atmosphere."
      },
      {
        term: "Aggressive",
        definition:
          "Forceful and confrontational, often intimidating or domineering, creating a highly charged and contentious conversational tone."
      },
      {
        term: "Aloof",
        definition:
          "Emotionally distant or uninvolved, often appearing cold or indifferent, creating a detached and unapproachable conversational tone."
      },
      {
        term: "Amicable",
        definition:
          "Conducted in a friendly and cooperative manner, often fostering mutual respect and understanding without conflict."
      },
      {
        term: "Animated",
        definition:
          "Full of life, enthusiasm, and spirited energy, often making the conversation lively, engaging, and dynamic."
      },
      {
        term: "Antagonistic",
        definition:
          "Marked by hostility or opposition, often involving confrontational or aggressive exchanges that create tension."
      },
      {
        term: "Arrogant",
        definition:
          "Displaying an exaggerated sense of superiority, often dismissive or belittling, creating an unpleasant tone."
      },
      {
        term: "Authoritative",
        definition:
          "Commanding respect or attention, often firm and knowledgeable, creating a tone of expertise and control in conversation."
      },
      {
        term: "Belligerent",
        definition:
          "Hostile and eager to argue, often aggressive or combative, creating a confrontational and antagonistic conversational tone."
      },
      {
        term: "Bitter",
        definition:
          "Expressing resentment or anger, often due to perceived unfairness, creating a sharp and hostile conversational tone."
      },
      {
        term: "Blunt",
        definition:
          "Speaking directly and plainly, often without tact, potentially causing offense with a straightforward tone."
      },
      {
        term: "Candid",
        definition:
          "Speaking openly and honestly, often straightforward without pretense, fostering a transparent and direct conversational tone."
      },
      {
        term: "Casual",
        definition:
          "Relaxed and informal in manner, often conversational and unpretentious, creating a laid-back and easygoing tone."
      },
      {
        term: "Cautious",
        definition:
          "Proceeding with care to avoid risks or misunderstandings, often deliberate and reserved in conversational tone."
      },
      {
        term: "Cerebral",
        definition:
          "Intellectual and analytical, often focused on complex ideas, creating a thoughtful and academic conversational tone."
      },
      {
        term: "Charming",
        definition:
          "Engaging and delightful in manner, often with warmth or wit, creating an appealing and captivating conversational tone."
      },
      {
        term: "Cheerful",
        definition:
          "Displaying noticeable happiness and optimism, often spreading positivity and warmth in the conversation."
      },
      {
        term: "Chilly",
        definition:
          "Lacking warmth or friendliness, often distant or aloof, creating a cold and unwelcoming conversational tone."
      },
      {
        term: "Conciliatory",
        definition:
          "Aiming to resolve conflict or soothe, often accommodating, creating a peaceful and reconciliatory conversational tone."
      },
      {
        term: "Condescending",
        definition:
          "Displaying a superior or patronizing attitude, often making others feel belittled or undervalued during the exchange."
      },
      {
        term: "Confident",
        definition:
          "Possessing a strong sense of self-assurance, often expressed with clear, assertive, and convincing speech."
      },
      {
        term: "Confiding",
        definition:
          "Sharing thoughts openly and trustingly, often intimate, creating a warm and personal conversational tone."
      },
      {
        term: "Confrontational",
        definition:
          "Directly challenging or opposing, often bold or aggressive, creating a tense and combative conversational tone."
      },
      {
        term: "Contemplative",
        definition:
          "Engaged in deep, introspective thought, often reflective and measured, fostering a thoughtful conversational pace."
      },
      {
        term: "Convivial",
        definition:
          "Cheerful and sociable, often festive or warm, creating a lively and welcoming conversational atmosphere."
      },
      {
        term: "Cooperative",
        definition:
          "Willing to work together harmoniously, often collaborative and open, fostering a productive and amicable conversational tone."
      },
      {
        term: "Cordial",
        definition:
          "Warm and sincere, often polite and friendly, creating a welcoming and pleasant conversational atmosphere."
      },
      {
        term: "Critical",
        definition:
          "Expressing disapproval or fault-finding, often analytical but harsh, creating a judgmental or confrontational conversational tone."
      },
      {
        term: "Curt",
        definition: "Abrupt and brief in speech, often perceived as rude or dismissive, lacking warmth or elaboration."
      },
      {
        term: "Cynical",
        definition: "Distrusting others' motives, often sarcastic or skeptical, creating a tone of doubt or mockery."
      },
      {
        term: "Defensive",
        definition:
          "Overly sensitive to criticism, often reacting with protectiveness or justification, creating a guarded tone."
      },
      {
        term: "Detached",
        definition:
          "Remaining emotionally uninvolved or objective, often observing conversations without personal bias or attachment."
      },
      {
        term: "Diplomatic",
        definition:
          "Handling conversations with tact and sensitivity, often navigating conflicts with careful and neutral wording."
      },
      {
        term: "Disdainful",
        definition:
          "Expressing scorn or contempt, often superior or dismissive, creating a belittling and haughty conversational tone."
      },
      {
        term: "Dismissive",
        definition:
          "Showing a lack of interest or respect, often brushing off others' points with a cold or indifferent tone."
      },
      {
        term: "Earnest",
        definition:
          "Showing sincere and serious intent, often heartfelt and genuine, fostering trust in the conversation."
      },
      {
        term: "Eloquent",
        definition:
          "Expressing ideas fluently and persuasively, often with clarity and grace, creating an articulate and compelling conversational tone."
      },
      {
        term: "Empathetic",
        definition:
          "Demonstrating deep understanding and sharing of others' emotions, often fostering connection and compassion."
      },
      {
        term: "Encouraging",
        definition:
          "Offering support or motivation, often uplifting, creating an optimistic and empowering conversational tone."
      },
      {
        term: "Engaging",
        definition:
          "Captivating and interesting, often drawing others in with enthusiasm, creating a lively and interactive conversational tone."
      },
      {
        term: "Evasive",
        definition:
          "Avoiding direct answers or commitment, often vague or elusive, creating an uncertain or slippery tone."
      },
      {
        term: "Factual",
        definition:
          "Focused on objective information, often precise and unemotional, creating a straightforward and informative conversational tone."
      },
      {
        term: "Flippant",
        definition:
          "Treating serious matters lightly, often with inappropriate humor or disrespect, creating a careless tone."
      },
      {
        term: "Formal",
        definition:
          "Adhering to established conventions, often polite, structured, and professional, avoiding casual elements."
      },
      {
        term: "Friendly",
        definition:
          "Warm, approachable, and kind in manner, often creating a comfortable and inviting conversational environment."
      },
      {
        term: "Frivolous",
        definition:
          "Lacking seriousness or depth, often playful or trivial, creating a light but sometimes inappropriate tone."
      },
      {
        term: "Genuine",
        definition: "Honest and authentic in expression, often sincere, fostering a sense of trust and relatability."
      },
      {
        term: "Guarded",
        definition:
          "Cautious and reserved in sharing thoughts, often protective, creating a restrained and careful conversational tone."
      },
      {
        term: "Hesitant",
        definition: "Acting or speaking with reluctance or uncertainty, often due to doubt, creating a tentative tone."
      },
      {
        term: "Hostile",
        definition:
          "Marked by intense anger or aggression, often confrontational, creating a tense and unfriendly conversational environment."
      },
      {
        term: "Humorous",
        definition:
          "Infusing wit or amusement into the conversation, often lightening the mood with clever or funny remarks."
      },
      {
        term: "Impassioned",
        definition:
          "Filled with intense emotion or conviction, often fervent, creating a powerful and emotionally charged conversational tone."
      },
      {
        term: "Incisive",
        definition:
          "Sharp and penetrating in insight, often cutting through complexity, creating a precise and thought-provoking conversational tone."
      },
      {
        term: "Inflammatory",
        definition:
          "Intentionally provoking anger or controversy, often incendiary, creating a heated and divisive conversational tone."
      },
      {
        term: "Informal",
        definition:
          "Relaxed and free from strict conventions, often friendly and colloquial, creating a comfortable and approachable conversational tone."
      },
      {
        term: "Inquisitive",
        definition: "Showing a strong desire to investigate or learn, often asking questions to deepen understanding."
      },
      {
        term: "Inspiring",
        definition:
          "Motivating and uplifting others, often with enthusiasm or vision, creating an encouraging and aspirational conversational tone."
      },
      {
        term: "Intimate",
        definition:
          "Warm and personal, often sharing deep or private thoughts, creating a close and trusting conversational tone."
      },
      {
        term: "Ironic",
        definition: "Using words to convey the opposite of their literal meaning, often with a subtle or mocking tone."
      },
      {
        term: "Jovial",
        definition:
          "Full of hearty cheer and good humor, often creating a festive and uplifting conversational atmosphere."
      },
      {
        term: "Lighthearted",
        definition:
          "Cheerful and carefree, often avoiding heavy topics, creating a relaxed and enjoyable conversational tone."
      },
      {
        term: "Mocking",
        definition:
          "Ridiculing or teasing with contempt, often sarcastic or derisive, creating a belittling and provocative conversational tone."
      },
      {
        term: "Monotone",
        definition:
          "Lacking variation in pitch or expression, often flat or unemotional, creating a dull conversational tone."
      },
      {
        term: "Nonchalant",
        definition:
          "Casually unconcerned or indifferent, often relaxed, creating a detached and carefree conversational tone."
      },
      {
        term: "Objective",
        definition:
          "Based on facts rather than feelings, often uninfluenced by emotions, maintaining a neutral conversational tone."
      },
      {
        term: "Patronizing",
        definition:
          "Speaking as if to someone less knowledgeable, often with a superior tone, creating irritation or resentment."
      },
      {
        term: "Persuasive",
        definition:
          "Aiming to convince others with compelling arguments, often confident and articulate in conversational style."
      },
      {
        term: "Playful",
        definition: "Fond of lighthearted fun or teasing, often bringing joy and spontaneity to the conversation."
      },
      {
        term: "Pleading",
        definition:
          "Expressing earnest or desperate requests, often emotional, creating a tone of urgency or supplication in conversation."
      },
      {
        term: "Polite",
        definition: "Showing courteous and respectful manners, often formal or considerate, maintaining a civil tone."
      },
      {
        term: "Provocative",
        definition:
          "Intentionally stimulating strong reactions or debate, often bold, creating a challenging and thought-provoking conversational tone."
      },
      {
        term: "Quizzical",
        definition:
          "Expressing mild confusion or curiosity, often with a questioning tone, creating a puzzled or inquisitive conversational mood."
      },
      {
        term: "Reassuring",
        definition:
          "Offering comfort or confidence, often calming fears, creating a supportive and soothing conversational tone."
      },
      {
        term: "Respectful",
        definition:
          "Showing courtesy and regard for others, often polite, creating a considerate and dignified conversational tone."
      },
      {
        term: "Reticent",
        definition:
          "Reserved or reluctant to speak freely, often quiet, creating a restrained and cautious conversational tone."
      },
      {
        term: "Sarcastic",
        definition:
          "Using irony to mock or convey contempt, often sharp or biting, creating a mocking conversational tone."
      },
      {
        term: "Sincere",
        definition:
          "Genuine and honest in expression, often heartfelt, fostering trust and authenticity in the conversation."
      },
      {
        term: "Skeptical",
        definition:
          "Questioning or doubting the truth of statements, often cautious or critical, creating a probing tone."
      },
      {
        term: "Snide",
        definition:
          "Slyly derogatory or mocking, often indirect, creating a subtle but cutting and contemptuous conversational tone."
      },
      {
        term: "Solemn",
        definition:
          "Marked by seriousness or gravity, often formal and restrained, creating a dignified conversational tone."
      },
      {
        term: "Soothing",
        definition:
          "Calming and comforting, often gentle or reassuring, creating a peaceful and relaxing conversational tone."
      },
      {
        term: "Strained",
        definition:
          "Marked by tension or discomfort, often forced or awkward, creating an uneasy and constrained conversational tone."
      },
      {
        term: "Supportive",
        definition:
          "Providing encouragement or assistance, often empathetic, creating a nurturing and uplifting conversational tone."
      },
      {
        term: "Sympathetic",
        definition:
          "Showing concern and understanding for another's feelings, often compassionate, fostering emotional connection."
      },
      {
        term: "Tactful",
        definition:
          "Showing sensitivity in communication, often avoiding offense through careful and considerate wording."
      },
      {
        term: "Teasing",
        definition:
          "Playfully provoking or joking, often lighthearted but potentially sharp, creating a mischievous or ambiguous conversational tone."
      },
      {
        term: "Tense",
        definition:
          "Experiencing nervous strain or fear, often physically or emotionally rigid, creating an uneasy conversational tone."
      },
      {
        term: "Thoughtful",
        definition:
          "Demonstrating careful consideration or kindness, often attentive to others' needs, fostering a caring tone."
      },
      {
        term: "Witty",
        definition:
          "Displaying quick and clever humor, often with sharp or insightful remarks, enhancing conversational charm."
      }
    ]
  }
];
let selectedTerms = [];

document.addEventListener("DOMContentLoaded", () => {
  selectedTerms = [];

  const wordList = document.getElementById("word-list");
  wordList.innerHTML = ""; // Clear any existing content

  wordData.forEach((category, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";
    accordionItem.innerHTML = `
      <div class="accordion-header ${index === 0 ? "active" : ""}" data-index="${index}">
        ${category.category}
      </div>
      <div class="accordion-content ${index === 0 ? "open" : ""}">
        ${category.terms
          .map(
            (term) => `
          <div class="card" data-term="${term.term}">
            <div class="card-body">
              <h5 class="card-title">${term.term}</h5>
              <p class="card-text">${term.definition}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    wordList.appendChild(accordionItem);
  });

  // Add click event listeners for accordion headers
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const index = header.getAttribute("data-index");
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains("open");

      // Close all other accordion items
      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.classList.remove("open");
        c.previousElementSibling.classList.remove("active");
      });

      // Toggle the clicked item
      if (!isOpen) {
        content.classList.add("open");
        header.classList.add("active");
      }
    });
  });
  
  // Function to copy text to clipboard
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  // Add click event listeners for cards to copy term to clipboard
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const term = card.getAttribute("data-term");
      const formattedTerm = `(${term}) `;
      selectedTerms.push(formattedTerm);

      copyToClipboard(selectedTerms.join(""));

      // Provide user feedback
      const feedback = document.createElement("div");
      feedback.textContent = selectedTerms.join("");
      feedback.classList.add("copy-feedback"); // Add a class for styling
      card.appendChild(feedback);

      // Remove the feedback message after a short delay
      setTimeout(() => {
        feedback.remove();
      }, 2500); // 1.5 seconds
    });
    card.addEventListener("contextmenu", async (event) => {
      event.preventDefault(); // Prevent the default context menu
      console.log("Right-click detected at:", new Date().toISOString());

      selectedTerms = [];

      copyToClipboard("(normal) ");

      // Provide user feedback
      const feedback = document.createElement("div");
      feedback.textContent = "(normal)";
      feedback.classList.add("copy-feedback"); // Add a class for styling
      card.appendChild(feedback);

      // Remove the feedback message after a short delay
      setTimeout(() => {
        feedback.remove();
      }, 2500); // 1.5 seconds
    });
  });
});
