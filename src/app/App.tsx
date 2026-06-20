import logoImage from 'figma:asset/6b0f64f37749cfee33c5082d8bb808b23b5d675c.png';
import { Eye, Camera, Thermometer, Siren, Bell, Settings as SettingsIcon, Clock, ArrowLeft } from 'lucide-react';
import { Card } from './components/ui/card';
import { useState } from 'react';
import { FieldMonitor } from './components/FieldMonitor';
import { Alerts } from './components/Alerts';
import { Settings } from './components/Settings';
import { Weather } from './components/Weather';
import { TriggerDeterrent } from './components/TriggerDeterrent';
import { IntrusionAnalysis } from './components/IntrusionAnalysis';

type Page = 'dashboard' | 'field-monitor' | 'alerts' | 'settings' | 'weather' | 'trigger-deterrent' | 'intrusion-analysis';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const dashboardButtons = [
    { icon: Eye, label: 'Field Monitor', color: 'bg-emerald-500 hover:bg-emerald-600', page: 'field-monitor' as Page },
    { icon: Camera, label: 'Watch Live Feed', color: 'bg-blue-500 hover:bg-blue-600', page: null },
    { icon: Thermometer, label: 'Weather', color: 'bg-orange-500 hover:bg-orange-600', page: 'weather' as Page },
    { icon: Siren, label: 'Trigger Deterrent', color: 'bg-cyan-500 hover:bg-cyan-600', page: 'trigger-deterrent' as Page },
    { icon: Bell, label: 'Alerts', color: 'bg-red-500 hover:bg-red-600', page: 'alerts' as Page },
    { icon: SettingsIcon, label: 'Settings', color: 'bg-gray-600 hover:bg-gray-700', page: 'settings' as Page },
  ];

  if (currentPage === 'field-monitor') {
    return <FieldMonitor onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'alerts') {
    return <Alerts onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'settings') {
    return <Settings onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'weather') {
    return <Weather onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'trigger-deterrent') {
    return <TriggerDeterrent onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'intrusion-analysis') {
    return <IntrusionAnalysis onBack={() => setCurrentPage('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <img src={logoImage} alt="Agrowatch Logo" className="w-24 h-24" />
            <div>
              <h1 className="text-foreground">Agrowatch Dashboard</h1>
              <p className="text-muted-foreground">Farm Eyes AI Monitoring System</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">Monday, November 3, 2025</p>
            <p className="text-emerald-600">All Systems Active</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200">
            <div className="text-muted-foreground mb-1">Power Status</div>
            <div className="text-foreground">Online</div>
            <div className="text-muted-foreground mt-2">Battery: 78%</div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200">
            <div className="text-muted-foreground mb-1">Sensors Online</div>
            <div className="text-foreground">5</div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200">
            <div className="text-muted-foreground mb-1">Humidity</div>
            <div className="text-foreground">68%</div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200">
            <div className="text-muted-foreground mb-1">Temperature</div>
            <div className="text-foreground">22°C</div>
          </Card>
        </div>

        {/* Main Dashboard Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardButtons.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => item.page && setCurrentPage(item.page)}
                className={`${item.color} text-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 flex flex-col items-center justify-center gap-4 min-h-[200px] group`}
              >
                <div className="bg-white/20 rounded-full p-6 group-hover:bg-white/30 transition-all">
                  <Icon className="w-12 h-12" />
                </div>
                <span className="text-white">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Intrusion Analysis Flash Card */}
        <Card 
          onClick={() => setCurrentPage('intrusion-analysis')}
          className="p-6 mt-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-2xl cursor-pointer transform hover:scale-[1.02] transition-all hover:shadow-purple-500/50"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-white">Peak Intrusion Times - AI Analysis</h2>
              </div>
              <p className="text-purple-100 mb-4">
                Most intrusions detected between 5:00 AM - 7:00 AM (89% of daily activity)
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <div className="text-purple-100">This Week</div>
                  <div className="text-white">247 intrusions</div>
                </div>
                <div>
                  <div className="text-purple-100">Peak Hour</div>
                  <div className="text-white">6:00 AM</div>
                </div>
                <div>
                  <div className="text-purple-100">Trend</div>
                  <div className="text-white">+12%</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="grid grid-cols-3 gap-2">
                  {[45, 78, 95, 62, 28, 35, 72, 58, 42].map((height, i) => (
                    <div key={i} className="w-2 bg-white/20 rounded-full" style={{ height: `${height * 0.5}px` }}></div>
                  ))}
                </div>
              </div>
              <ArrowLeft className="w-6 h-6 text-white rotate-180" />
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-12 text-center text-muted-foreground">
          <p>Powered by Farm Eyes AI Technology</p>
        </div>
      </div>
    </div>
  );
}
