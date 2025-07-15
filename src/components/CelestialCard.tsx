
import { Star, Globe, Satellite, Sparkles } from 'lucide-react';

interface CelestialObject {
  id: string;
  name: string;
  type: 'Star' | 'Planet' | 'Satellite' | 'Galaxy';
  magnitude: number;
  constellation: string;
  distance: number;
  temperature: number;
  phase?: string;
  icon: string;
}

interface CelestialCardProps {
  object: CelestialObject;
}

const CelestialCard = ({ object }: CelestialCardProps) => {
  const getTypeIcon = () => {
    switch (object.type) {
      case 'Star':
        return <Star className="w-5 h-5" />;
      case 'Planet':
        return <Globe className="w-5 h-5" />;
      case 'Satellite':
        return <Satellite className="w-5 h-5" />;
      case 'Galaxy':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getTypeBadgeColor = () => {
    switch (object.type) {
      case 'Star':
        return 'bg-yellow-500/80 text-yellow-100 border border-yellow-400/50';
      case 'Planet':
        return 'bg-purple-500/80 text-purple-100 border border-purple-400/50';
      case 'Satellite':
        return 'bg-gray-500/80 text-gray-100 border border-gray-400/50';
      case 'Galaxy':
        return 'bg-pink-500/80 text-pink-100 border border-pink-400/50';
      default:
        return 'bg-blue-500/80 text-blue-100 border border-blue-400/50';
    }
  };

  return (
    <div className="bg-slate-800/40 backdrop-blur-md border border-purple-400/20 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-500 hover:bg-slate-800/60 hover:scale-[1.02] group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="text-purple-300 group-hover:text-purple-200 transition-colors">
              {getTypeIcon()}
            </div>
            <span className="text-xl font-semibold text-white group-hover:text-purple-100 transition-colors">
              {object.name}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getTypeBadgeColor()}`}>
              {object.type}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-8 text-right">
          <div>
            <div className="text-purple-200 text-sm font-medium">Magnitude</div>
            <div className="font-bold text-white text-lg">{object.magnitude}</div>
          </div>
          <div>
            <div className="text-purple-200 text-sm font-medium">Constellation</div>
            <div className="font-bold text-white text-lg">{object.constellation}</div>
          </div>
          <div>
            <div className="text-purple-200 text-sm font-medium">Distance (LY)</div>
            <div className="font-bold text-white text-lg">{object.distance.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-purple-200 text-sm font-medium">
              {object.phase ? 'Phase' : 'Temperature (°C)'}
            </div>
            <div className="font-bold text-white text-lg">
              {object.phase || object.temperature}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelestialCard;
