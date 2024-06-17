// components/Balloons.js

export default function Balloons() {
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute w-12 h-12 md:w-16 md:h-24 rounded-full bottom-0 animate-float`} 
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 5}s`, 
              backgroundColor: i % 3 === 0 ? 'red' : i % 3 === 1 ? 'blue' : 'green',
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    );
  }
  