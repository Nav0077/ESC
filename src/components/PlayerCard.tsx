import { Player } from '../types';
import { Trophy, Award } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative">
        <img 
          src={player.photoUrl} 
          alt={player.name}
          className="w-full h-64 object-cover"
        />
        {player.specialRole && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
            {player.specialRole === 'Captain' ? <Trophy className="w-4 h-4 mr-1" /> : <Award className="w-4 h-4 mr-1" />}
            {player.specialRole}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{player.name}</h3>
        <p className="text-sm text-blue-600 font-semibold mb-2">{player.role}</p>
        
        {(player.battingStyle || player.bowlingStyle) && (
          <div className="mb-4 text-sm text-gray-600">
            {player.battingStyle && <p>Batting: {player.battingStyle}</p>}
            {player.bowlingStyle && <p>Bowling: {player.bowlingStyle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Matches</p>
            <p className="text-lg font-semibold">{player.stats.matches}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Runs</p>
            <p className="text-lg font-semibold">{player.stats.runs}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Average</p>
            <p className="text-lg font-semibold">{player.stats.average}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Highest</p>
            <p className="text-lg font-semibold">{player.stats.highestScore}</p>
          </div>
          {player.stats.wickets > 0 && (
            <>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Wickets</p>
                <p className="text-lg font-semibold">{player.stats.wickets}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Bowl Avg</p>
                <p className="text-lg font-semibold">{player.stats.bowlingAverage}</p>
              </div>
            </>
          )}
          {player.stats.stumpings && (
            <>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Catches</p>
                <p className="text-lg font-semibold">{player.stats.catches}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Stumpings</p>
                <p className="text-lg font-semibold">{player.stats.stumpings}</p>
              </div>
            </>
          )}
        </div>
        
        <p className="text-gray-700">{player.bio}</p>
      </div>
    </div>
  );
}