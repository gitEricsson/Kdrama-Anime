import Card from './Card';

const kdramas = [
  {
    title: 'Mouse',
    synopsis:
      'A suspenseful thriller that follows the hunt for a psychopathic serial killer. The story delves into the psychological aspects of crime, exploring the nature vs. nurture debate and questioning whether psychopaths are born or made. As the investigation unfolds, viewers are taken on a gripping journey filled with unexpected twists and moral dilemmas.',
    imageUrl: '/mouse-lee-seung-gi.jpeg',
    episodes: 20,
    rating: 9.5,
  },
  {
    title: 'Moon Lovers: Scarlet Heart Ryeo',
    synopsis:
      'When a total eclipse of the sun occurs, a 21st-century woman is mysteriously transported back in time to the Goryeo Dynasty of Korea, finding herself in the body of a 16-year-old girl. As she navigates the complexities of palace life, she becomes embroiled in love, rivalry, and political intrigue among the handsome princes, ultimately changing the course of history with her modern perspective.',
    imageUrl: '/moon-lovers.webp',
    episodes: 16,
    rating: 9.2,
  },
  {
    title: 'Soundtrack #1',
    synopsis:
      'The story revolves around the lives of two inseparable friends, Han Seon-woo and Lee Eun-soo, who have shared a deep bond since childhood. Their relationship takes a turn when Seon-woo moves in with Eun-soo to help her write a song, leading them on a musical journey that explores the complexities of one-sided love, friendship, and the challenges of pursuing dreams in the music industry.',
    imageUrl: '/soundtack-1.jpg',
    episodes: 4,
    rating: 8.8,
  },
  {
    title: 'Flower of Evil',
    synopsis:
      'The plot revolves around Cha Ji-won, a dedicated detective who investigates a series of gruesome murders. As she delves deeper into the case, she begins to suspect that her seemingly perfect husband, Baek Hee-sung, may be hiding a dark secret connected to the murders. The drama explores themes of trust, betrayal, and the lengths one will go to protect their loved ones, culminating in a gripping tale of suspense and revelation.',
    imageUrl: '/flower-of-evil.webp',
    episodes: 16,
    rating: 8.8,
  },
  {
    title: 'Alchemy of Souls',
    synopsis:
      'Set in a fictional country, this drama follows the story of a young woman who is trapped in the body of a blind woman due to a magical spell. As she navigates her new life, she encounters a nobleman who is determined to save her and uncover the truth behind the alchemy that binds them. Their journey is filled with adventure, romance, and the exploration of fate and destiny in a world where magic intertwines with reality.',
    imageUrl: '/alchemy-of-souls.webp',
    episodes: 20,
    rating: 8.7,
  },
  {
    title: 'Dali and the Cocky Prince',
    synopsis:
      'This romantic comedy centers around a cocky heir who is used to getting what he wants and a talented art curator who is struggling to keep her family’s art gallery afloat. Their paths cross when they are forced to work together, leading to a series of humorous and heartwarming events as they navigate the art world, confront their personal challenges, and ultimately discover love in unexpected places.',
    imageUrl: '/dali-and-the-cocky-prince.jpg',
    episodes: 16,
    rating: 8.2,
  },
  {
    title: 'Descendants of the Sun',
    synopsis:
      'A love story between a special forces captain and a doctor who are thrown together in a war-torn country. As they face life-and-death situations, their relationship deepens, revealing the challenges of love amidst chaos. The drama beautifully portrays the sacrifices made by those in the military and the emotional struggles of those who care for them, all while delivering thrilling action and heartfelt moments.',
    imageUrl: '/descendants-of-the-sun.png',
    episodes: 16,
    rating: 9.3,
  },
  {
    title: 'Doona!',
    synopsis:
      'A romantic comedy that follows a college student who unexpectedly falls in love with a former idol who is now living a quiet life away from the spotlight. As they navigate their contrasting worlds, they face challenges from their pasts and the pressures of fame, leading to a heartwarming story about love, acceptance, and the importance of being true to oneself.',
    imageUrl: '/doona.png',
    episodes: 12,
    rating: 8.0,
  },
  {
    title: 'Guardian: The Lonely and Great God',
    synopsis:
      'A fantasy romance that tells the story of a goblin who needs a human bride to end his immortal life. He meets a girl who can see ghosts, and together they embark on a journey filled with love, loss, and the search for redemption. The drama beautifully intertwines elements of fantasy with deep emotional storytelling, exploring themes of fate, sacrifice, and the power of love across lifetimes.',
    imageUrl: '/goblin.jpeg',
    episodes: 16,
    rating: 9.6,
  },
  {
    title: 'Happiness',
    synopsis:
      'Set in a high-rise apartment complex during a pandemic, this thriller explores the lives of residents as they confront their fears and the unknown. As a mysterious infection spreads, the characters must navigate their relationships and the moral dilemmas that arise in a society on the brink of collapse. The drama delves into themes of survival, human nature, and the quest for happiness in dire circumstances.',
    imageUrl: '/happiness.webp',
    episodes: 12,
    rating: 8.5,
  },
  {
    title: 'Hotel Del Luna',
    synopsis:
      'A fantasy romance about a hotel that caters to ghosts and its beautiful but cursed owner. As she meets various spirits with unfinished business, she learns about love, loss, and redemption. The drama combines humor, romance, and supernatural elements, creating a captivating story that explores the complexities of human emotions and the afterlife.',
    imageUrl: '/hotel-del-luna.webp',
    episodes: 16,
    rating: 9.1,
  },
  {
    title: 'Hwarang',
    synopsis:
      'Set in the Silla Dynasty, this drama follows a group of young men who become part of an elite group known as Hwarang. As they train to become warriors, they navigate friendship, love, and the challenges of their noble status. The series beautifully portrays the bonds formed through shared experiences and the struggles of youth in a historical context, filled with action and romance.',
    imageUrl: '/hwarang.webp',
    episodes: 20,
    rating: 8.3,
  },
  {
    title: "It's Okay to Not Be Okay",
    synopsis:
      'A romantic drama that follows a caretaker at a psychiatric ward and a children’s book author with antisocial personality disorder. As they confront their emotional struggles, they form a unique bond that helps them heal and understand themselves better. The series tackles mental health issues with sensitivity and depth, showcasing the importance of love and acceptance in overcoming personal challenges.',
    imageUrl: '/its-okay-to-not-be-okay.jpg',
    episodes: 16,
    rating: 8.9,
  },
  {
    title: 'Revenge of Others',
    synopsis:
      'A high school student seeks revenge for her twin brother’s death, uncovering dark secrets and hidden truths within her school. As she navigates the complexities of teenage life and the quest for justice, she learns about friendship, loyalty, and the consequences of revenge. The drama combines elements of mystery and emotional depth, creating a compelling narrative that resonates with viewers.',
    imageUrl: '/revenge-of-others.jpg',
    episodes: 12,
    rating: 8.0,
  },
  {
    title: 'Touch My Heart',
    synopsis:
      'A romantic comedy about a top actress who ends up living with a cold-hearted lawyer. As they navigate their differences and personal struggles, they develop a heartwarming relationship that challenges their perceptions of love and success. The series combines humor and romance, showcasing the transformative power of love in unexpected circumstances.',
    imageUrl: '/touch-my-heart.avif',
    episodes: 16,
    rating: 8.4,
  },
  {
    title: 'Vagabond',
    synopsis:
      'An action thriller that follows a man who uncovers a national corruption scandal while trying to find out the truth behind a plane crash that killed his nephew. As he delves deeper into the conspiracy, he faces danger and betrayal, leading to a gripping narrative filled with suspense and unexpected twists. The drama highlights themes of justice, family, and the fight against corruption.',
    imageUrl: '/vagabond.jpg',
    episodes: 16,
    rating: 8.7,
  },
  {
    title: 'Vincenzo',
    synopsis:
      'A dark comedy about an Italian mafia lawyer who returns to South Korea and seeks justice against a corrupt conglomerate. As he teams up with a quirky lawyer, they navigate the legal system and confront powerful enemies, leading to a thrilling and humorous journey filled with unexpected alliances and clever strategies. The series explores themes of justice, morality, and the complexities of human relationships.',
    imageUrl: '/vincenzo.avif',
    episodes: 20,
    rating: 9.2,
  },
  {
    title: 'Weak Hero Class 1',
    synopsis:
      'A high school drama that follows a group of students who fight against bullies and navigate their lives in a competitive environment. As they confront their fears and insecurities, they learn about friendship, loyalty, and the importance of standing up for what is right. The series combines action and emotional depth, resonating with viewers who have faced similar challenges.',
    imageUrl: '/weak-hero-class-1.avif',
    episodes: 12,
    rating: 8.5,
  },
  {
    title: 'Why Her?',
    synopsis:
      'A legal romance that follows a talented lawyer who fights for justice while dealing with her own personal struggles. As she navigates the complexities of her career and relationships, she confronts the challenges of being a woman in a male-dominated field. The drama explores themes of ambition, love, and the pursuit of justice, creating a compelling narrative that resonates with viewers.',
    imageUrl: '/why-her.jpg',
    episodes: 16,
    rating: 8.1,
  },
  {
    title: 'Crash Landing on You',
    synopsis:
      'A romantic comedy about a South Korean heiress who accidentally paraglides into North Korea and meets a North Korean officer. As they navigate their cultural differences and the challenges of their circumstances, they develop a deep bond that transcends borders. The series beautifully portrays themes of love, sacrifice, and the power of human connection amidst political tensions.',
    imageUrl: '/crash-landing-on-you.jpg',
    episodes: 16,
    rating: 9.6,
  },
  {
    title: 'Perfect Marriage Revenge',
    synopsis:
      'A revenge drama about a woman who seeks to take back her life after being betrayed by her husband. As she navigates the complexities of love and betrayal, she uncovers dark secrets and plots her revenge against those who wronged her. The series explores themes of empowerment, resilience, and the quest for justice, creating a gripping narrative that keeps viewers on the edge of their seats.',
    imageUrl: '/perfect-marriage-revenge.jpg',
    episodes: 12,
    rating: 8.0,
  },
  {
    title: 'Death Game',
    synopsis:
      'A psychological thriller that follows a man who finds himself trapped in a deadly game where he must survive against all odds. As he faces various challenges and confronts his own fears, he learns about the value of life and the consequences of his choices. The series combines suspense and emotional depth, creating a gripping narrative that keeps viewers engaged.',
    imageUrl: '/death-game.jpg',
    episodes: 10,
    rating: 7.8,
  },
  {
    title: 'The K2',
    synopsis:
      'An action-packed drama about a former soldier who becomes a bodyguard for a presidential candidate’s daughter. As he navigates the dangerous world of politics and power, he uncovers dark secrets and confronts his own past. The series combines thrilling action with emotional storytelling, exploring themes of loyalty, love, and redemption.',
    imageUrl: '/the-k2.avif',
    episodes: 16,
    rating: 8.4,
  },
  {
    title: 'Do You Like Brahms?',
    synopsis:
      'A romantic drama that follows classical music students navigating their careers and relationships. As they pursue their dreams, they confront personal struggles and the complexities of love in the competitive world of music. The series beautifully portrays the passion and dedication required to succeed in the arts, creating a heartfelt narrative that resonates with viewers.',
    imageUrl: '/do-you-like-brahms.avif',
    episodes: 16,
    rating: 8.2,
  },
  {
    title: 'City Hunter',
    synopsis:
      'A thrilling action drama about a private detective who seeks revenge for his father’s death while solving cases. As he uncovers the truth behind his father’s murder, he faces danger and betrayal, leading to a gripping narrative filled with suspense and unexpected twists. The series combines action, romance, and emotional depth, creating a compelling story that keeps viewers engaged.',
    imageUrl: '/city-hunter.jpg',
    episodes: 20,
    rating: 8.5,
  },
  {
    title: 'All of Us Are Dead',
    synopsis:
      'A thrilling zombie apocalypse drama that follows a group of high school students who find themselves trapped in their school during a viral outbreak. As they fight for survival against the undead, they must also confront their own fears, relationships, and the moral dilemmas that arise in a desperate situation. The series explores themes of friendship, sacrifice, and the struggle for humanity in the face of overwhelming odds.',
    imageUrl: '/all-of-us-are-dead.avif',
    episodes: 12,
    rating: 8.4,
  },
];

export default function Kdramas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {kdramas.map((drama) => (
        <Card key={drama.title} {...drama} />
      ))}
    </div>
  );
}
