
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down';
  gradient: string;
}

const StatCard = ({ title, value, icon, trend, gradient }: StatCardProps) => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-700 hover:scale-105 group relative overflow-hidden">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} bg-opacity-20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 transition-all duration-500 group-hover:scale-110 ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
            {trend === 'up' ? <ArrowUp className="w-4 h-4 animate-bounce" /> : <ArrowDown className="w-4 h-4 animate-bounce" />}
          </div>
        )}
      </div>
      <div className="relative z-10">
        <h3 className="text-slate-300 text-sm font-medium mb-2 group-hover:text-white transition-colors duration-500">{title}</h3>
        <p className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 animate-pulse`}>
          {value}
        </p>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-20 blur-xl`}></div>
      </div>
    </div>
  );
};

export default StatCard;
