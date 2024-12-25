import { motion } from 'framer-motion';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="bg-black bg-opacity-30 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 text-center text-shadow cursive">
          My Top Shows
        </h1>
        <nav className="flex justify-center space-x-6">
          <TabButton
            active={activeTab === 'kdramas'}
            onClick={() => setActiveTab('kdramas')}
          >
            K-Dramas
          </TabButton>
          <TabButton
            active={activeTab === 'animes'}
            onClick={() => setActiveTab('animes')}
          >
            Animes
          </TabButton>
        </nav>
      </div>
    </header>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <motion.button
      className={`px-4 py-2 rounded-full ${
        active ? 'bg-purple-600' : 'bg-gray-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
