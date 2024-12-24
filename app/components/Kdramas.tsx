import Card from './Card';

const kdramas = [
  {
    title: 'Mouse',
    synopsis:
      'A suspenseful thriller that follows the hunt for a psychopathic serial killer. It explores the nature vs. nurture debate and questions whether psychopaths are born or made.',
    imageUrl: '/placeholder.svg?height=400&width=300',
  },
  {
    title: 'Moon Lovers: Scarlet Heart Ryeo',
    synopsis:
      'A modern woman travels back in time to the Goryeo Dynasty. She becomes involved in palace politics and falls in love with a prince, changing the course of history.',
    imageUrl: '/placeholder.svg?height=400&width=300',
  },
  {
    title: 'Soundtrack #1',
    synopsis:
      'A musical romance that follows two long-time friends and music lovers. As they collaborate on a project, they begin to see each other in a new light.',
    imageUrl: '/placeholder.svg?height=400&width=300',
  },
  {
    title: 'Flower of Evil',
    synopsis:
      'A man hides his dark past and pretends to be the perfect husband. His detective wife begins to suspect him when she investigates a series of unexplained murders.',
    imageUrl: 'https://i.mydramalist.com/k4wAOf.jpg',
  },
];

export default function Kdramas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {kdramas.map((drama) => (
        <Card key={drama.title} {...drama} />
      ))}
    </div>
  );
}
