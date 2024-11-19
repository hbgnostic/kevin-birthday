import './index.css';
import '@fontsource/pacifico';
import React, { useState } from 'react';
import { Heart, Book, Code, Smile, Brain } from 'lucide-react';

const BirthdayCard = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const interests = [
    { icon: <Code className="text-blue-500" size={24} />, text: 'Programación' },
    { icon: <Book className="text-green-500" size={24} />, text: 'Novelas culturales' },
    { icon: <Brain className="text-purple-500" size={24} />, text: 'Meditación' },
    { icon: <Smile className="text-yellow-500" size={24} />, text: 'Humor' },
    { icon: <Heart className="text-red-500" size={24} />, text: 'Amor y familia' },
    { icon: <Smile className="text-teal-500" size={24} />, text: 'Grandes amistades' }, // Great Friendships
    { icon: <svg className="text-indigo-500" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c6.627 0 12 5.373 12 12S18.627 24 12 24 0 18.627 0 12 5.373 0 12 0zm-.5 4.5C9.985 4.5 8.5 5.985 8.5 7.5s1.485 3 3.5 3 3.5-1.485 3.5-3-1.485-3-3.5-3zm-1.258 7.442L6.08 17.958C8.523 19.848 10.66 20.862 12.5 21c1.84-.138 3.977-1.152 6.42-3.042l-4.162-6.016c-.477.224-1.003.358-1.568.358s-1.09-.134-1.568-.358z" />
           </svg>, text: 'Viajar' }, // Travel
    { icon: <svg className="text-orange-500" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1C5.929 1 1 5.929 1 12s4.929 11 11 11 11-4.929 11-11S18.071 1 12 1zm0 20.998C6.486 21.998 2 17.512 2 12 2 6.486 6.486 2 12 2c5.514 0 10 4.486 10 10 0 5.512-4.486 10-10 10zM7 7.067l5 2.833 5-2.833-5-2.5-5 2.5zm10 3.4l-4.063 3.867L17 17.5V10.467zm-10 .033v7.033l4.063-3.867L7 10.5z" />
           </svg>, text: 'Fútbol' }, // Soccer
    { icon: <svg className="text-purple-500" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10S6.486 2 12 2zm1.707 11.293a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L10.586 11H8a1 1 0 1 0 0 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3z" />
           </svg>, text: 'Mitos y cuentos' }, // Mythical storytelling
  ];
  
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-pink-200 to-purple-400">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-center mt-8">
          {/* Title Section */}
          <h1 className="text-5xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-pacifico">
            ¡Feliz Cumpleaños, Kevin!
          </h1>
        <p className="text-2xl text-gray-700 mt-4">37 años increíbles 🎉</p>

        {/* Interests Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-8">
          {interests.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              {item.icon}
              <span className="text-gray-700 font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Message Section */}
        <p className="text-xl italic text-gray-600 mt-4">
          "Desde Los Ángeles con amor, para Kevin, mi hijo."
        </p>

        {/* Celebrate Button */}
        <button
          onClick={() => setShowConfetti(!showConfetti)}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-bold shadow-md"
        >
          ¡Celebra! 🎈
        </button>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 4)],
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  animationDuration: `${Math.random() * 2 + 1}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Animations */}
        <style jsx>{`
          @keyframes fall {
            0% {
              transform: translateY(-10px) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
            }
          }
          .animate-fall {
            animation: fall linear infinite;
          }
          .text-gradient {
            font-family: 'Pacifico', cursive;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BirthdayCard;
