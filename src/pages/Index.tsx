import Profile from "@/components/Profile";

const Index = () => {
  const points = [
    <>Co-founder, product & ops @ <a href="https://synergi.so" className="text-retro-text hover:text-retro-accent">Synergi</a></>,
    "Finnish guy in my late 20s loving all things products and sports",
    "Always learning, always building ;)",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0B1026]">
      {/* Aurora layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-teal-300 to-purple-500 blur-3xl animate-aurora"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-emerald-300 to-violet-500 blur-3xl animate-aurora delay-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <Profile name="Harri Iisakka" points={points} />
        </div>
      </div>
    </div>
  );
};

export default Index;