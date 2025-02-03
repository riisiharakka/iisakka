import Profile from "@/components/Profile";

const Index = () => {
  const points = [
    <>Co-founder, product & ops @ <a href="https://synergi.so" className="text-retro-text hover:text-retro-accent">Synergi</a></>,
    "Finnish guy in my late 20s loving all things products and sports",
    "Always learning, always building ;)",
  ];

  return (
    <div className="min-h-screen bg-retro-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <Profile name="Harri Iisakka" points={points} />
      </div>
    </div>
  );
};

export default Index;