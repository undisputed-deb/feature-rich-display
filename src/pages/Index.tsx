import { useState, useEffect } from 'react';
import { Search, Filter, Star, Globe, Telescope, Clock, Thermometer } from 'lucide-react';
import CelestialCard from '../components/CelestialCard';
import StatCard from '../components/StatCard';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

const Index = () => {
  const [celestialObjects, setCelestialObjects] = useState<CelestialObject[]>([]);
  const [filteredObjects, setFilteredObjects] = useState<CelestialObject[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [loading, setLoading] = useState(true);

  // Mock data matching the reference design
  const mockCelestialData: CelestialObject[] = [
    {
      id: '1',
      name: 'Sirius',
      type: 'Star',
      magnitude: -1.46,
      constellation: 'Canis Major',
      distance: 8.6,
      temperature: 9940,
      icon: '⭐'
    },
    {
      id: '2',
      name: 'Betelgeuse',
      type: 'Star',
      magnitude: 0.42,
      constellation: 'Orion',
      distance: 642.5,
      temperature: 3590,
      icon: '⭐'
    },
    {
      id: '3',
      name: 'Moon',
      type: 'Satellite',
      magnitude: -12.7,
      constellation: 'Variable',
      distance: 0.384,
      temperature: -23,
      phase: 'Waxing Gibbous',
      icon: '🌙'
    },
    {
      id: '4',
      name: 'Jupiter',
      type: 'Planet',
      magnitude: -2.94,
      constellation: 'Pisces',
      distance: 778.5,
      temperature: -108,
      icon: '🪐'
    },
    {
      id: '5',
      name: 'Mars',
      type: 'Planet',
      magnitude: 1.47,
      constellation: 'Gemini',
      distance: 227.9,
      temperature: -65,
      icon: '🪐'
    },
    {
      id: '6',
      name: 'Venus',
      type: 'Planet',
      magnitude: -4.92,
      constellation: 'Leo',
      distance: 108.2,
      temperature: 464,
      icon: '🪐'
    },
    {
      id: '7',
      name: 'Andromeda Galaxy',
      type: 'Galaxy',
      magnitude: 3.44,
      constellation: 'Andromeda',
      distance: 2537000,
      temperature: -263,
      icon: '🌌'
    },
    {
      id: '8',
      name: 'Rigel',
      type: 'Star',
      magnitude: 0.13,
      constellation: 'Orion',
      distance: 860,
      temperature: 12100,
      icon: '⭐'
    },
    {
      id: '9',
      name: 'Saturn',
      type: 'Planet',
      magnitude: 0.46,
      constellation: 'Aquarius',
      distance: 1432,
      temperature: -178,
      icon: '🪐'
    },
    {
      id: '10',
      name: 'Polaris',
      type: 'Star',
      magnitude: 1.98,
      constellation: 'Ursa Minor',
      distance: 433,
      temperature: 6015,
      icon: '⭐'
    },
    {
      id: '11',
      name: 'Vega',
      type: 'Star',
      magnitude: 0.03,
      constellation: 'Lyra',
      distance: 25,
      temperature: 9602,
      icon: '⭐'
    },
    {
      id: '12',
      name: 'Mercury',
      type: 'Planet',
      magnitude: -0.42,
      constellation: 'Virgo',
      distance: 57.9,
      temperature: 167,
      icon: '🪐'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchCelestialData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      setCelestialObjects(mockCelestialData);
      setFilteredObjects(mockCelestialData);
      setLoading(false);
    };

    fetchCelestialData();
  }, []);

  useEffect(() => {
    let filtered = celestialObjects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(obj =>
        obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        obj.constellation.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply type filter
    if (typeFilter !== 'All Types') {
      filtered = filtered.filter(obj => obj.type === typeFilter);
    }

    setFilteredObjects(filtered);
  }, [searchQuery, typeFilter, celestialObjects]);

  // Calculate statistics
  const totalObjects = celestialObjects.length;
  const brightestMagnitude = Math.min(...celestialObjects.map(obj => obj.magnitude));
  const avgDistance = celestialObjects.reduce((sum, obj) => sum + obj.distance, 0) / celestialObjects.length;
  const hottestTemp = Math.max(...celestialObjects.map(obj => obj.temperature));

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: true, 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background Elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-pulse opacity-30 transform hover:scale-125 transition-transform duration-1000">⭐</div>
        <div className="absolute top-40 right-20 text-4xl animate-bounce opacity-20 transform hover:scale-125 transition-transform duration-1000" style={{animationDelay: '1s'}}>🌙</div>
        <div className="absolute bottom-40 left-1/4 text-5xl animate-pulse opacity-25 transform hover:scale-125 transition-transform duration-1000" style={{animationDelay: '2s'}}>🪐</div>
        <div className="absolute top-60 left-2/3 text-3xl animate-bounce opacity-30 transform hover:scale-125 transition-transform duration-1000" style={{animationDelay: '0.5s'}}>✨</div>
        <div className="absolute bottom-20 right-1/3 text-4xl animate-pulse opacity-20 transform hover:scale-125 transition-transform duration-1000" style={{animationDelay: '1.5s'}}>🌌</div>
        
        {/* Additional floating numbers matching your image */}
        <div className="absolute top-32 right-1/4 text-2xl font-bold text-yellow-400/40 animate-float" style={{animationDelay: '0s'}}>12700</div>
        <div className="absolute top-52 left-1/3 text-xl font-bold text-blue-400/40 animate-float" style={{animationDelay: '1s'}}>8642</div>
        <div className="absolute bottom-60 right-1/2 text-lg font-bold text-pink-400/40 animate-float" style={{animationDelay: '2s'}}>-1.46</div>
        <div className="absolute top-80 left-1/5 text-xl font-bold text-green-400/40 animate-float" style={{animationDelay: '1.5s'}}>12</div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 border-b border-purple-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center animate-pulse hover:animate-spin transition-all duration-500">
            <Telescope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">AstroDash</h1>
            <p className="text-purple-200 text-sm">Celestial Object Database</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Clock className="w-5 h-5 text-purple-300" />
          <div className="text-right">
            <div className="text-2xl font-bold text-yellow-300">{currentTime}</div>
            <div className="text-sm text-purple-200">{currentDate}</div>
          </div>
        </div>
      </header>

      {/* Statistics Cards with exact colors from your image */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <StatCard
          title="Total Objects"
          value={totalObjects.toString()}
          icon={<Globe className="w-6 h-6" />}
          trend="up"
          gradient="from-pink-500 via-purple-500 to-indigo-500"
        />
        <StatCard
          title="Brightest Magnitude"
          value={brightestMagnitude.toString()}
          icon={<Star className="w-6 h-6" />}
          gradient="from-yellow-400 via-orange-500 to-red-500"
        />
        <StatCard
          title="Avg Distance (LY)"
          value={Math.round(avgDistance).toLocaleString()}
          icon={<Telescope className="w-6 h-6" />}
          gradient="from-cyan-400 via-blue-500 to-indigo-600"
        />
        <StatCard
          title="Hottest Temp (°C)"
          value={hottestTemp.toLocaleString()}
          icon={<Thermometer className="w-6 h-6" />}
          gradient="from-orange-400 via-red-500 to-pink-600"
        />
      </div>

      {/* Search and Filter */}
      <div className="relative z-10 flex flex-col md:flex-row gap-4 px-6 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search celestial objects..."
            className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-400 backdrop-blur-sm hover:bg-slate-700/50 transition-colors duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 z-10" />
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48 pl-10 bg-slate-800/50 border-slate-600/50 text-white backdrop-blur-sm hover:bg-slate-700/50 transition-colors duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600/50 backdrop-blur-lg">
              <SelectItem value="All Types" className="text-white hover:bg-purple-600/20">All Types</SelectItem>
              <SelectItem value="Star" className="text-white hover:bg-purple-600/20">Star</SelectItem>
              <SelectItem value="Planet" className="text-white hover:bg-purple-600/20">Planet</SelectItem>
              <SelectItem value="Satellite" className="text-white hover:bg-purple-600/20">Satellite</SelectItem>
              <SelectItem value="Galaxy" className="text-white hover:bg-purple-600/20">Galaxy</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="relative z-10 px-6 pb-6">
        <h2 className="text-xl font-semibold mb-4 text-slate-200">
          Celestial Objects ({filteredObjects.length} results)
        </h2>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredObjects.map((object, index) => (
              <div 
                key={object.id} 
                className="animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <CelestialCard object={object} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
