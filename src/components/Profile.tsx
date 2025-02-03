import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

interface ProfileProps {
  name: string;
  points: string[];
}

const Profile = ({ name, points }: ProfileProps) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-retro-accent">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-3xl font-bold text-retro-text">{name}</h1>
      
      <ul className="space-y-4 text-center">
        {points.map((point, index) => (
          <li
            key={index}
            className="text-retro-text opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {point}
          </li>
        ))}
      </ul>
      
      <div className="flex space-x-6 mt-8">
        <a href="mailto:your@email.com" className="text-retro-text hover:text-retro-accent transition-colors">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Profile;