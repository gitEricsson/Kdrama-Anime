import Card from './Card';

const animes = [
  {
    title: "JoJo's Bizarre Adventure",
    synopsis:
      'A multi-generational story following the Joestar family and their battles against supernatural foes using unique abilities called Stands.',
    imageUrl: '/jojo.webp',
    episodes: 39,
    rating: 9.2,
  },
  {
    title: '91 Days',
    synopsis:
      'A boy driven by revenge infiltrates the mafia world in hopes of making them pay for slaughtering his family, in his attempt, he has an encounter with one of the sons of the mafia boss and quickly develops a complicated friendship.',
    imageUrl: '/91-days.avif',
    episodes: 12,
    rating: 9.0,
  },
  {
    title: 'Fullmetal Alchemist: Brotherhood',
    synopsis:
      "After a failed alchemy experiment to resurrect their mother, brothers Edward and Alphonse suffer severe consequences: Alphonse loses his body, and Edward sacrifices his arm to bind Alphonse's soul to a suit of armor. They embark on a quest to find the Philosopher's Stone to restore their bodies.",
    imageUrl: '/fullmetal-alchemist.avif',
    episodes: 64,
    rating: 9.5,
  },
  {
    title: 'Vinland Saga',
    synopsis:
      "Set in the Viking Age, the story follows Thorfinn, a young warrior seeking revenge for his father's death while getting caught up in the politics of the time.",
    imageUrl: '/vinland-saga.jpg',
    episodes: 24,
    rating: 9.3,
  },
];

export default function Animes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {animes.map((anime) => (
        <Card key={anime.title} {...anime} />
      ))}
    </div>
  );
}
