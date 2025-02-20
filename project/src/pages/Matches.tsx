import { Trophy, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const matches = [
  {
    id: 1,
    date: '2024-02-20',
    teams: [
      {
        name: 'Elite Social Club',
        score: '180/7',
        overs: '20',
        result: 'Won by 15 runs'
      },
      {
        name: 'Bheri Rockers',
        score: '165/9',
        overs: '20',
        result: ''
      }
    ],
    venue: 'NEpalgunj Stadium',
    manOfTheMatch: 'Yubaraj Basnet',
    bestBowler: 'Nirajan Basnet',
    bestBatsman: 'Sujan Karki',
    imageUrl: 'https://example.com/match1.jpg',
    imageCaption: 'Elite Social Club celebrating their victory'
  },
  {
    id: 2,
    date: '2024-02-18',
    teams: [
      {
        name: 'Elite Social Club',
        score: '195/5',
        overs: '20',
        result: 'Won by 20 runs'
      },
      {
        name: 'Naraynapur Royals',
        score: '175/8',
        overs: '20',
        result: ''
      }
    ],
    venue: 'NAraynapur Stadium',
    manOfTheMatch: 'Suresh Rasaili',
    bestBowler: 'Biraj BK',
    bestBatsman: 'Nav Basnet',
    imageUrl: '/img/memories.jpg',
    imageCaption: 'Elite Social Club players during the match'
  }
];

export function Matches() {
  const [expandedMatch, setExpandedMatch] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const toggleMatch = (id: number) => {
    setExpandedMatch(expandedMatch === id ? null : id);
  };

  const handleImageLoad = (id: number) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-blue-100 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center mb-6">
            <Trophy size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">Match Results</h1>
          </div>
        </div>
      </header>

      {/* Matches List */}
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {matches.map((match) => (
            <div 
              key={match.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                expandedMatch === match.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => toggleMatch(match.id)}
            >
              {/* Match Header */}
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{match.date}</span>
                  <span className="text-gray-600">{match.venue}</span>
                </div>
              </div>

              {/* Teams and Scores */}
              <div className="p-6">
                {match.teams.map((team, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{team.name}</h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{team.score}</p>
                        <p className="text-gray-600">({team.overs} overs)</p>
                      </div>
                    </div>
                    {team.result && (
                      <p className="text-green-600 font-semibold">{team.result}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Match Details */}
              <div className="bg-gray-50 px-6 py-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Man of the Match:</span>
                    <span className="ml-2">{match.manOfTheMatch}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Best Bowler:</span>
                    <span className="ml-2">{match.bestBowler}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Best Batsman:</span>
                    <span className="ml-2">{match.bestBatsman}</span>
                  </div>
                </div>
              </div>

              {/* Scoreboard with Enhanced Image */}
              {expandedMatch === match.id && (
                <div className="animate-fade-in">
                  {/* Match Image with Loading State */}
                  <div className="relative w-full h-64 overflow-hidden group">
                    {!imageLoaded[match.id] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    )}
                    <img 
                      src={match.imageUrl}
                      alt="Match highlight"
                      className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                        imageLoaded[match.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(match.id)}
                      onError={(e) => {
                        e.currentTarget.src = '/fallback-match.jpg';
                      }}
                    />
                    {match.imageCaption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm text-center">
                        {match.imageCaption}
                      </div>
                    )}
                  </div>

                  {/* Scoreboard Content */}
                  <div className="bg-gray-50 p-6 border-t">
                    <h3 className="text-xl font-bold mb-4">Scorecard</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {match.teams.map((team, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="text-lg font-semibold mb-2">{team.name} Innings</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Total Runs</span>
                              <span className="font-medium">{team.score}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Overs</span>
                              <span className="font-medium">{team.overs}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Wickets</span>
                              <span className="font-medium">{team.score.split('/')[1]}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">Match Highlights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Best Batsman</p>
                          <p className="font-medium">{match.bestBatsman}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Best Bowler</p>
                          <p className="font-medium">{match.bestBowler}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Man of the Match</p>
                          <p className="font-medium">{match.manOfTheMatch}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">ELITE SOCIAL CLUB</p>
          <p className="text-gray-400">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
