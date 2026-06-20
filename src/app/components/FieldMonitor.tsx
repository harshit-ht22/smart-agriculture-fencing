import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FieldMonitorProps {
  onBack: () => void;
}

export function FieldMonitor({ onBack }: FieldMonitorProps) {
  const intrusions = [
    {
      id: 1,
      animal: 'Dog',
      zone: 'Crop Zone 2',
      time: '10:35 AM',
      date: 'Nov 1, 2025',
      image: 'https://images.unsplash.com/photo-1654224999260-ff5ab18a7221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtJTIwZG9nfGVufDF8fHx8MTc2MTk4MzI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      severity: 'medium',
      isNightVision: false
    },
    {
      id: 2,
      animal: 'Herd of Sheep',
      zone: 'Crop Zone 1',
      time: '08:22 AM',
      date: 'Nov 1, 2025',
      image: 'https://images.unsplash.com/photo-1667925735386-b3d53b33d9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzaGVlcCUyMGZhcm18ZW58MXx8fHwxNzYxOTgzMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      severity: 'high',
      isNightVision: false
    },
    {
      id: 3,
      animal: 'Human',
      zone: 'Crop Zone 3',
      time: '02:15 AM',
      date: 'Nov 1, 2025',
      image: 'https://images.unsplash.com/photo-1732807257445-0035664cbabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHZpc2lvbiUyMGNhbWVyYSUyMGZhcm18ZW58MXx8fHwxNzYxOTgzMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      severity: 'high',
      isNightVision: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-foreground">Field Monitor</h1>
          <p className="text-muted-foreground">Captured Intrusions</p>
        </div>

        {/* Intrusion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intrusions.map((intrusion) => (
            <Card key={intrusion.id} className="overflow-hidden bg-white border-emerald-200">
              <div className="relative">
                <ImageWithFallback
                  src={intrusion.image}
                  alt={`${intrusion.animal} intrusion`}
                  className="w-full h-64 object-cover"
                  style={intrusion.isNightVision ? { filter: 'grayscale(100%) brightness(0.7) contrast(1.2)' } : {}}
                />
                <Badge
                  className={`absolute top-4 right-4 ${
                    intrusion.severity === 'high'
                      ? 'bg-red-500'
                      : intrusion.severity === 'medium'
                      ? 'bg-orange-500'
                      : 'bg-yellow-500'
                  }`}
                >
                  {intrusion.severity.toUpperCase()}
                </Badge>
                {intrusion.isNightVision && (
                  <Badge className="absolute top-4 left-4 bg-gray-900 text-green-400">
                    NIGHT VISION
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-foreground mb-2">{intrusion.animal} Detected</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{intrusion.zone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{intrusion.date} at {intrusion.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
