import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { players } from '../data';

export function PlayingXI() {
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
            <Users size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">Playing XI</h1>
          </div>
        </div>
      </header>

      {/* Players Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={player.photoUrl} 
                  alt={player.name}
                  className="w-full h-80 object-cover"
                />
                {player.specialRole && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                    {player.specialRole}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{player.name}</h2>
                <p className="text-blue-600 font-semibold mb-4">{player.role}</p>
                
                <div className="space-y-4">
                  {/* Playing Style */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Playing Style</h3>
                    {player.battingStyle && (
                      <p className="text-gray-600">Batting: {player.battingStyle}</p>
                    )}
                    {player.bowlingStyle && (
                      <p className="text-gray-600">Bowling: {player.bowlingStyle}</p>
                    )}
                  </div>
                  
                  {/* Career Stats */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Career Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600">Matches</p>
                        <p className="text-xl font-bold">{player.stats.matches}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Runs</p>
                        <p className="text-xl font-bold">{player.stats.runs}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Average</p>
                        <p className="text-xl font-bold">{player.stats.average}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Highest Score</p>
                        <p className="text-xl font-bold">{player.stats.highestScore}</p>
                      </div>
                      {player.stats.wickets > 0 && (
                        <>
                          <div>
                            <p className="text-gray-600">Wickets</p>
                            <p className="text-xl font-bold">{player.stats.wickets}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Bowling Average</p>
                            <p className="text-xl font-bold">{player.stats.bowlingAverage}</p>
                          </div>
                        </>
                      )}
                      {player.stats.stumpings && (
                        <>
                          <div>
                            <p className="text-gray-600">Catches</p>
                            <p className="text-xl font-bold">{player.stats.catches}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Stumpings</p>
                            <p className="text-xl font-bold">{player.stats.stumpings}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Player Bio</h3>
                    <p className="text-gray-600">{player.bio}</p>
                  </div>
                </div>
              </div>
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