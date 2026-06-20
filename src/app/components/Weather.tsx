import { ArrowLeft, Cloud, CloudRain, Sun, Wind, Droplets, Eye, Thermometer, CloudSnow, CloudDrizzle } from 'lucide-react';
import { Card } from './ui/card';

interface WeatherProps {
  onBack: () => void;
}

export function Weather({ onBack }: WeatherProps) {
  const currentWeather = {
    temp: 28,
    condition: 'Partly Cloudy',
    humidity: 68,
    windSpeed: 12,
    visibility: 8.5,
    feelsLike: 30,
    uvIndex: 6,
    pressure: 1012,
  };

  const hourlyForecast = [
    { time: '9 AM', temp: 26, icon: Sun, condition: 'Sunny' },
    { time: '12 PM', temp: 28, icon: Sun, condition: 'Sunny' },
    { time: '3 PM', temp: 30, icon: Cloud, condition: 'Partly Cloudy' },
    { time: '6 PM', temp: 27, icon: Cloud, condition: 'Cloudy' },
    { time: '9 PM', temp: 24, icon: CloudDrizzle, condition: 'Light Rain' },
  ];

  const weeklyForecast = [
    { day: 'Today', date: 'Nov 3', high: 30, low: 22, icon: Cloud, condition: 'Partly Cloudy', rain: 20 },
    { day: 'Tue', date: 'Nov 4', high: 29, low: 21, icon: CloudRain, condition: 'Rainy', rain: 80 },
    { day: 'Wed', date: 'Nov 5', high: 27, low: 20, icon: CloudRain, condition: 'Heavy Rain', rain: 90 },
    { day: 'Thu', date: 'Nov 6', high: 26, low: 19, icon: CloudDrizzle, condition: 'Light Rain', rain: 60 },
    { day: 'Fri', date: 'Nov 7', high: 28, low: 21, icon: Cloud, condition: 'Cloudy', rain: 30 },
    { day: 'Sat', date: 'Nov 8', high: 30, low: 22, icon: Sun, condition: 'Sunny', rain: 10 },
    { day: 'Sun', date: 'Nov 9', high: 31, low: 23, icon: Sun, condition: 'Sunny', rain: 5 },
  ];

  const farmingAlerts = [
    { title: 'Rain Expected Tomorrow', desc: 'Heavy rainfall predicted. Good for irrigation savings.', type: 'info' },
    { title: 'High UV Index', desc: 'Protect workers during peak hours (12-3 PM)', type: 'warning' },
    { title: 'Favorable Conditions', desc: 'Next 3 days ideal for fertilizer application after rain', type: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-foreground">Weather Forecast</h1>
            <p className="text-muted-foreground">Monday, November 3, 2025</p>
          </div>
        </div>

        {/* Current Weather - Large Card */}
        <Card className="p-8 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Cloud className="w-20 h-20" />
                <div>
                  <div className="text-6xl mb-2">{currentWeather.temp}°C</div>
                  <div className="text-xl opacity-90">{currentWeather.condition}</div>
                  <div className="text-sm opacity-75">Feels like {currentWeather.feelsLike}°C</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8 opacity-80" />
                <div>
                  <div className="text-sm opacity-75">Humidity</div>
                  <div className="text-xl">{currentWeather.humidity}%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="w-8 h-8 opacity-80" />
                <div>
                  <div className="text-sm opacity-75">Wind Speed</div>
                  <div className="text-xl">{currentWeather.windSpeed} km/h</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 opacity-80" />
                <div>
                  <div className="text-sm opacity-75">Visibility</div>
                  <div className="text-xl">{currentWeather.visibility} km</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Thermometer className="w-8 h-8 opacity-80" />
                <div>
                  <div className="text-sm opacity-75">Pressure</div>
                  <div className="text-xl">{currentWeather.pressure} mb</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Hourly Forecast */}
        <div className="mb-6">
          <h2 className="text-foreground mb-4">Today's Hourly Forecast</h2>
          <div className="grid grid-cols-5 gap-4">
            {hourlyForecast.map((hour, index) => {
              const Icon = hour.icon;
              return (
                <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="text-muted-foreground mb-2">{hour.time}</div>
                    <Icon className="w-10 h-10 mx-auto mb-2 text-blue-500" />
                    <div className="text-foreground mb-1">{hour.temp}°C</div>
                    <div className="text-sm text-muted-foreground">{hour.condition}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="mb-6">
          <h2 className="text-foreground mb-4">7-Day Forecast</h2>
          <div className="grid grid-cols-1 gap-3">
            {weeklyForecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="w-20">
                        <div className="text-foreground">{day.day}</div>
                        <div className="text-sm text-muted-foreground">{day.date}</div>
                      </div>
                      <Icon className="w-10 h-10 text-blue-500" />
                      <div className="flex-1">
                        <div className="text-foreground">{day.condition}</div>
                        <div className="text-sm text-muted-foreground">Rain chance: {day.rain}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-foreground">↑ {day.high}°C</div>
                        <div className="text-sm text-muted-foreground">↓ {day.low}°C</div>
                      </div>
                      <div className="w-24 bg-blue-100 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${day.rain}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Farming Alerts */}
        <div>
          <h2 className="text-foreground mb-4">Farm Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {farmingAlerts.map((alert, index) => (
              <Card 
                key={index} 
                className={`p-5 border-l-4 ${
                  alert.type === 'info' ? 'bg-blue-50 border-blue-500' :
                  alert.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                  'bg-green-50 border-green-500'
                }`}
              >
                <div className={`mb-2 ${
                  alert.type === 'info' ? 'text-blue-700' :
                  alert.type === 'warning' ? 'text-orange-700' :
                  'text-green-700'
                }`}>
                  {alert.title}
                </div>
                <div className="text-sm text-muted-foreground">{alert.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
