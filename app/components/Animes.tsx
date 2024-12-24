import Card from './Card';

const animes = [
  {
    title: "JoJo's Bizarre Adventure",
    synopsis:
      'A multi-generational story following the Joestar family and their battles against supernatural foes using unique abilities called Stands.',
    imageUrl: '/placeholder.svg?height=400&width=300',
  },
  {
    title: '91 Days',
    synopsis:
      "Set during the Prohibition era, this anime follows a man's quest for revenge against the mafia family that killed his family.",
    imageUrl: '/placeholder.svg?height=400&width=300',
  },
  {
    title: 'Fullmetal Alchemist: Brotherhood',
    synopsis:
      'Two brothers use alchemy in their quest to restore their bodies after a failed attempt to bring their mother back to life.',
    imageUrl: '/placeholder.svg?height=400&width=300',
  },
  {
    title: 'Vinland Saga',
    synopsis:
      "Set in the Viking Age, the story follows Thorfinn, a young warrior seeking revenge for his father's death while getting caught up in the politics of the time.",
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNzQwODI4Y2YtNjFkNC00NzFiLTljZjItNzQ1ZDJkYzI4OGI3XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
  },
];

export default function Animes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {animes.map((anime) => (
        <Card key={anime.title} {...anime} />
      ))}
    </div>
  );
}
