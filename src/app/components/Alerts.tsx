import { ArrowLeft, AlertTriangle, Camera, Zap, Bell, Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface AlertsProps {
  onBack: () => void;
}

export function Alerts({ onBack }: AlertsProps) {
  const alerts = [
    {
      id: 1,
      type: 'motion',
      title: 'Motion Detected near Crop Zone 2',
      time: '10:35 AM',
      date: 'Today',
      severity: 'high',
      icon: Eye
    },
    {
      id: 2,
      type: 'camera',
      title: '📷 New Image Captured – 10:35 AM',
      time: '10:35 AM',
      date: 'Today',
      severity: 'medium',
      icon: Camera
    },
    {
      id: 3,
      type: 'power',
      title: 'Fence Power Drop Detected',
      time: '09:15 AM',
      date: 'Today',
      severity: 'high',
      icon: Zap
    },
    {
      id: 4,
      type: 'motion',
      title: 'Motion Detected near Crop Zone 1',
      time: '08:22 AM',
      date: 'Today',
      severity: 'high',
      icon: Eye
    },
    {
      id: 5,
      type: 'camera',
      title: '📷 New Image Captured – 08:22 AM',
      time: '08:22 AM',
      date: 'Today',
      severity: 'medium',
      icon: Camera
    },
    {
      id: 6,
      type: 'motion',
      title: 'Motion Detected near Crop Zone 3',
      time: '06:15 AM',
      date: 'Today',
      severity: 'medium',
      icon: Eye
    },
    {
      id: 7,
      type: 'system',
      title: 'All Sensors Online',
      time: '12:00 AM',
      date: 'Today',
      severity: 'low',
      icon: Bell
    },
    {
      id: 8,
      type: 'motion',
      title: 'Motion Detected near Crop Zone 2',
      time: '11:48 PM',
      date: 'Yesterday',
      severity: 'high',
      icon: Eye
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'medium':
        return 'bg-orange-100 border-orange-300 text-orange-800';
      default:
        return 'bg-blue-100 border-blue-300 text-blue-800';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-foreground">Recent Alerts</h1>
          <p className="text-muted-foreground">Monitor all system notifications</p>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card
                key={alert.id}
                className={`p-6 border-2 ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${getSeverityBadgeColor(alert.severity)} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{alert.title}</h3>
                    <p className="text-muted-foreground">
                      {alert.date} at {alert.time}
                    </p>
                  </div>
                  <Badge className={getSeverityBadgeColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
