const wordData = [
  {
    category: "Positive Adjectives - Basic",
    terms: [
      { term: "Happy", definition: "Feeling or showing pleasure or contentment." },
      { term: "Joyful", definition: "Feeling, expressing, or causing great pleasure." },
      { term: "Excited", definition: "Feeling or showing enthusiasm and eagerness." },
      { term: "Cheerful", definition: "Noticeably happy and optimistic." },
      { term: "Content", definition: "Feeling or expressing satisfaction." },
      { term: "Peaceful", definition: "Free from disturbance; tranquil." },
      { term: "Calm", definition: "Not showing or feeling nervousness, anger, or other emotions." },
      { term: "Satisfied", definition: "Pleased because something has fulfilled one's wishes or needs." },
      { term: "Pleased", definition: "Feeling or showing pleasure and satisfaction." },
      { term: "Delighted", definition: "Feeling or showing great pleasure." },
      { term: "Amused", definition: "Finding something funny or entertaining." },
      { term: "Grateful", definition: "Feeling or showing appreciation for kindness received." },
      { term: "Optimistic", definition: "Hopeful and confident about the future." },
      { term: "Hopeful", definition: "Feeling or inspiring optimism about a future event." },
      { term: "Loving", definition: "Feeling or showing love or great care." },
      { term: "Proud", definition: "Feeling deep pleasure or satisfaction at one's own or another's achievements." },
      { term: "Confident", definition: "Feeling self-assured and secure." },
      { term: "Triumphant", definition: "Having won a battle or contest; victorious." },
      { term: "Enthusiastic", definition: "Having or showing intense and eager enjoyment, interest, or approval." },
      { term: "Eager", definition: "Having or showing a keen desire or interest." },
      { term: "Playful", definition: "Fond of games and amusement; lighthearted and fun-loving." },
      { term: "Silly", definition: "Having or showing a lack of common sense or judgment; absurd and foolish." },
      { term: "Blissful", definition: "Extremely happy; full of joy." },
      { term: "Ecstatic", definition: "Feeling or expressing overwhelming happiness or joyful excitement." },
      { term: "Radiant", definition: "Emitting light; shining or glowing brightly (often used metaphorically for happiness)." },
      { term: "Thrilled", definition: "Feeling a sudden wave of keen excitement or pleasure." },
      { term: "Astonished (positively)", definition: "Greatly surprised or impressed; amazed (in a good way)." },
      { term: "Amazed (positively)", definition: "Greatly surprised or filled with wonder (in a good way)." },
      { term: "Inspired", definition: "Filled with the urge or ability to do or feel something creative." },
      { term: "Moved (emotionally)", definition: "Experiencing strong feelings, often of gratitude or tenderness." },
      { term: "Surprised", definition: "Feeling or showing astonishment because of something unexpected." },
      { term: "Curious", definition: "Eager to know or learn something." },
      { term: "Intrigued", definition: "Aroused curiosity or interest." },
      { term: "Pensive", definition: "Engaged in deep or serious thought." },
      { term: "Thoughtful", definition: "Showing consideration for the needs of other people." },
      { term: "Tender", definition: "Showing gentleness and concern or sympathy." },
      { term: "Sympathetic", definition: "Feeling, showing, or expressing sympathy." },
      { term: "Empathetic", definition: "Understanding and sharing the feelings of another." },
      { term: "Nostalgic", definition: "Having a sentimental longing for the past." },
      { term: "Wistful", definition: "Having or showing a feeling of vague or regretful longing." },
      { term: "Overjoyed", definition: "Extremely happy." },
      { term: "Elated", definition: "Ecstatically happy; overjoyed." },
      { term: "Ecstatic", definition: "Feeling or expressing overwhelming happiness or joyful excitement." },
      // New terms
      { term: "Vibrant", definition: "Full of energy and enthusiasm." },
      { term: "Serene", definition: "Calm, peaceful, and untroubled." },
      { term: "Jubilant", definition: "Showing great joy or triumph." },
      { term: "Upbeat", definition: "Cheerful and optimistic in manner." },
      { term: "Gleeful", definition: "Exuberantly or triumphantly joyful." },
      { term: "Buoyant", definition: "Cheerful and optimistic, able to stay afloat." },
      { term: "Exuberant", definition: "Filled with lively energy and excitement." },
      { term: "Zealous", definition: "Showing great enthusiasm or devotion." }
    ]
  },
  {
    category: "Negative Adjectives - Basic",
    terms: [
      { term: "Sad", definition: "Feeling or showing sorrow; unhappy." },
      { term: "Unhappy", definition: "Not happy." },
      { term: "Depressed", definition: "Feeling severely despondent and discouraged." },
      { term: "Mournful", definition: "Feeling, expressing, or inducing sadness, regret, or grief." },
      { term: "Gloomy", definition: "Feeling distressed or pessimistic." },
      { term: "Angry", definition: "Feeling or showing strong displeasure or hostility." },
      { term: "Furious", definition: "Extremely angry." },
      { term: "Irritated", definition: "Feeling or showing slight anger; annoyed." },
      { term: "Frustrated", definition: "Feeling annoyed and upset because of an inability to achieve something." },
      { term: "Annoyed", definition: "Slightly angry; irritated." },
      { term: "Scared", definition: "Feeling fear; frightened." },
      { term: "Afraid", definition: "Feeling fear or apprehension; frightened." },
      { term: "Anxious", definition: "Feeling worried, nervous, or uneasy about something with an uncertain outcome." },
      { term: "Worried", definition: "Feeling or showing anxiety and concern about actual or potential problems." },
      { term: "Nervous", definition: "Feeling or showing agitation and apprehension." },
      // New terms
      { term: "Upset", definition: "Unhappy or disappointed due to an unexpected situation." },
      { term: "Tense", definition: "Nervous or afraid, showing strain." },
      { term: "Grumpy", definition: "Bad-tempered and irritable." },
      { term: "Miserable", definition: "Very unhappy or uncomfortable." },
      { term: "Agitated", definition: "Feeling or appearing troubled or nervous." },
      { term: "Cranky", definition: "Ill-tempered or irritable." }
    ]
  },
  {
    category: "Negative Adjectives - More Complex",
    terms: [
      { term: "Disappointed", definition: "Sad or displeased because someone or something has failed to fulfill one's hopes or expectations." },
      { term: "Frustrated", definition: "Feeling annoyed and upset because of an inability to achieve something." },
      { term: "Jealous", definition: "Feeling or showing envy of someone or their possessions or achievements." },
      { term: "Envious", definition: "Feeling or showing discontented or resentful longing aroused by someone else's possessions, qualities, or luck." },
      { term: "Guilty", definition: "Feeling or showing remorse caused by a feeling of having done something wrong." },
      { term: "Ashamed", definition: "Feeling embarrassed or guilty because of one's actions, characteristics, or associations." },
      { term: "Humiliated", definition: "Feeling ashamed and foolish by being publicly ridiculed or disgraced." },
      { term: "Embarrassed", definition: "Feeling self-conscious, awkward, or ashamed." },
      { term: "Disgusted", definition: "Feeling a strong aversion or revulsion." },
      { term: "Repulsed", definition: "Feeling intense distaste and aversion." },
      { term: "Contemptuous", definition: "Feeling or expressing disdain; scornful." },
      { term: "Bitter", definition: "Feeling or showing anger and disappointment at being treated unfairly." },
      { term: "Resentful", definition: "Feeling or expressing bitterness or indignation at having been treated unfairly." },
      { term: "Lonely", definition: "Sad because one has no friends or company." },
      { term: "Isolated", definition: "Far from other places, buildings, or people; remote. (Often leading to feelings of loneliness)." },
      // New terms
      { term: "Regretful", definition: "Feeling or showing sorrow or remorse for something done or lost." },
      { term: "Skeptical", definition: "Doubting or questioning the truth of something." },
      { term: "Alienated", definition: "Feeling isolated or estranged from others." },
      { term: "Disheartened", definition: "Having lost determination or confidence." },
      { term: "Cynical", definition: "Believing that people are motivated by self-interest; distrustful." },
      { term: "Despondent", definition: "In low spirits from loss of hope or courage." }
    ]
  },
  {
    category: "Subtle or Mixed Adjectives",
    terms: [
      { term: "Surprised", definition: "Feeling or showing astonishment because of something unexpected." },
      { term: "Melancholy", definition: "A feeling of pensive sadness, typically with no obvious cause." },
      { term: "Awkward", definition: "Causing or feeling embarrassment or difficulty." },
      { term: "Uncomfortable", definition: "Causing or feeling unease or awkwardness." },
      { term: "Defensive", definition: "Very anxious to challenge or avoid criticism." },
      { term: "Vulnerable", definition: "Susceptible to physical or emotional harm." },
      { term: "Raging", definition: "Feeling or expressing uncontrollable anger." },
      { term: "Devastated", definition: "Feeling overwhelming shock or grief." },
      { term: "Terrified", definition: "Extremely frightened." },
      { term: "Horrified", definition: "Filled with horror; shocked and scared." },
      { term: "Desperate", definition: "Feeling, showing, or involving a hopeless sense that a situation is so bad as to be impossible to deal with." },
      // New terms
      { term: "Ambivalent", definition: "Having mixed feelings or contradictory ideas about something." },
      { term: "Reflective", definition: "Engaged in deep thought or contemplation." },
      { term: "Perplexed", definition: "Completely baffled or puzzled." },
      { term: "Hesitant", definition: "Slow to act or speak due to uncertainty." },
      { term: "Apprehensive", definition: "Anxious or fearful that something bad will happen." },
      { term: "Bittersweet", definition: "Arousing pleasure tinged with sadness or pain." }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const wordList = document.getElementById('word-list');
  wordList.innerHTML = ''; // Clear any existing content

  wordData.forEach((category, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';
    accordionItem.innerHTML = `
      <div class="accordion-header ${index === 0 ? 'active' : ''}" data-index="${index}">
        ${category.category}
      </div>
      <div class="accordion-content ${index === 0 ? 'open' : ''}">
        ${category.terms.map(term => `
          <div class="card" data-term="${term.term}">
            <div class="card-body">
              <h5 class="card-title">${term.term}</h5>
              <p class="card-text">${term.definition}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    wordList.appendChild(accordionItem);
  });

  // Add click event listeners for accordion headers
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const index = header.getAttribute('data-index');
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');

      // Close all other accordion items
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.classList.remove('open');
        c.previousElementSibling.classList.remove('active');
      });

      // Toggle the clicked item
      if (!isOpen) {
        content.classList.add('open');
        header.classList.add('active');
      }
    });
  });

  // Add click event listeners for cards to copy term to clipboard
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const term = card.getAttribute('data-term');
      const formattedTerm = `(${term}) `;

      // Function to copy text to clipboard
      const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

      copyToClipboard(formattedTerm);

      // Provide user feedback
      const feedback = document.createElement('div');
      feedback.textContent = 'Copied Term to clipboard';
      feedback.classList.add('copy-feedback'); // Add a class for styling
      card.appendChild(feedback);

      // Remove the feedback message after a short delay
      setTimeout(() => {
        feedback.remove();
      }, 1500); // 1.5 seconds
    });
  });
});