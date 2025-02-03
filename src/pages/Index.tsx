import Profile from "@/components/Profile";

const Index = () => {
  const points = [
    "Product leader passionate about user experience",
    "Tech founder building the next big thing",
    "Always learning, always building",
  ];

  return (
    <div className="min-h-screen bg-retro-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <Profile name="Your Name" points={points} />
      </div>
    </div>
  );
};

export default Index;