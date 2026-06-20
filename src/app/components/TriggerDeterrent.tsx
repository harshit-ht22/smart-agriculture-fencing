import { ArrowLeft, Volume2, Zap, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { useState } from 'react';

interface TriggerDeterrentProps {
  onBack: () => void;
}

export function TriggerDeterrent({ onBack }: TriggerDeterrentProps) {
  const [buzzerActive, setBuzzerActive] = useState(false);
  const [laserActive, setLaserActive] = useState(false);
  const [buzzerCooldown, setBuzzerCooldown] = useState(false);
  const [laserCooldown, setLaserCooldown] = useState(false);
  const [detectionRange, setDetectionRange] = useState([75]);

  const handleTriggerBuzzer = () => {
    setBuzzerActive(true);
    setBuzzerCooldown(true);
    
    // Simulate buzzer activation
    setTimeout(() => {
      setBuzzerActive(false);
    }, 5000);

    // Cooldown period
    setTimeout(() => {
      setBuzzerCooldown(false);
    }, 10000);
  };

  const handleTriggerLaser = () => {
    setLaserActive(true);
    setLaserCooldown(true);
    
    // Simulate laser activation
    setTimeout(() => {
      setLaserActive(false);
    }, 5000);

    // Cooldown period
    setTimeout(() => {
      setLaserCooldown(false);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-foreground">Trigger Deterrent</h1>
            <p className="text-muted-foreground">Activate animal deterrent systems</p>
          </div>
        </div>

        {/* Warning Banner */}
        <Card className="p-6 mb-8 bg-yellow-50 border-yellow-300 border-l-4">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-yellow-900 mb-2">Safety Notice</div>
              <p className="text-sm text-yellow-800">
                Use deterrent systems responsibly. Ensure no humans or livestock are in the target area. 
                Each system has a cooldown period of 10 seconds after activation.
              </p>
            </div>
          </div>
        </Card>

        {/* Detection Range Control */}
        <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm border-emerald-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-foreground mb-1">Adjust Detection Range</h2>
              <p className="text-sm text-muted-foreground">
                Set the sensitivity range for motion detection sensors across all zones
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Detection Sensitivity</span>
              <span className="text-foreground px-3 py-1 bg-emerald-100 rounded-lg">
                {detectionRange[0]}%
              </span>
            </div>
            
            <Slider
              value={detectionRange}
              onValueChange={setDetectionRange}
              max={100}
              min={25}
              step={5}
              className="w-full"
            />
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Low (25m)</span>
              <span className="text-muted-foreground">Medium (75m)</span>
              <span className="text-muted-foreground">High (150m)</span>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  <strong>Current Setting:</strong> {
                    detectionRange[0] < 50 
                      ? 'Low sensitivity - Detects only close-range movement (ideal for small areas)'
                      : detectionRange[0] < 80
                      ? 'Medium sensitivity - Balanced detection for most farm zones'
                      : 'High sensitivity - Maximum range detection (may trigger more frequently)'
                  }
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Deterrent Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Buzzer Card */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-cyan-200 hover:shadow-2xl transition-all">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                buzzerActive ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'
              } transition-all`}>
                <Volume2 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-foreground mb-2">Sonic Buzzer</h2>
              <p className="text-muted-foreground">
                High-frequency sound deterrent effective against birds and small animals
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-muted-foreground">Status</span>
                <span className={`flex items-center gap-2 ${buzzerActive ? 'text-red-600' : 'text-emerald-600'}`}>
                  {buzzerActive ? (
                    <>
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      Active
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Ready
                    </>
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-muted-foreground">Coverage</span>
                <span className="text-foreground">50m radius</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-muted-foreground">Duration</span>
                <span className="text-foreground">5 seconds</span>
              </div>
            </div>

            <button
              onClick={handleTriggerBuzzer}
              disabled={buzzerCooldown}
              className={`w-full py-4 rounded-xl text-white transition-all transform hover:scale-105 active:scale-95 ${
                buzzerCooldown 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-cyan-500 hover:bg-cyan-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {buzzerCooldown ? (
                buzzerActive ? 'Buzzer Active...' : 'Cooldown (10s)'
              ) : (
                'Trigger Buzzer'
              )}
            </button>
          </Card>

          {/* Laser Card */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-indigo-200 hover:shadow-2xl transition-all">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                laserActive ? 'bg-red-500 animate-pulse' : 'bg-indigo-500'
              } transition-all`}>
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-foreground mb-2">Laser Deterrent</h2>
              <p className="text-muted-foreground">
                Safe laser light system to scare away larger animals like deer and wild boar
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-muted-foreground">Status</span>
                <span className={`flex items-center gap-2 ${laserActive ? 'text-red-600' : 'text-emerald-600'}`}>
                  {laserActive ? (
                    <>
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      Active
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Ready
                    </>
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-muted-foreground">Range</span>
                <span className="text-foreground">100m max</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-muted-foreground">Duration</span>
                <span className="text-foreground">5 seconds</span>
              </div>
            </div>

            <button
              onClick={handleTriggerLaser}
              disabled={laserCooldown}
              className={`w-full py-4 rounded-xl text-white transition-all transform hover:scale-105 active:scale-95 ${
                laserCooldown 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-500 hover:bg-indigo-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {laserCooldown ? (
                laserActive ? 'Laser Active...' : 'Cooldown (10s)'
              ) : (
                'Trigger Laser'
              )}
            </button>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-gray-200">
          <h2 className="text-foreground mb-4">Recent Deterrent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <Volume2 className="w-5 h-5 text-cyan-500" />
                <div>
                  <div className="text-foreground">Buzzer Activated</div>
                  <div className="text-sm text-muted-foreground">Zone B - North Field</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">2 hours ago</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-foreground">Laser Activated</div>
                  <div className="text-sm text-muted-foreground">Zone A - East Field</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">5 hours ago</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <Volume2 className="w-5 h-5 text-cyan-500" />
                <div>
                  <div className="text-foreground">Buzzer Activated</div>
                  <div className="text-sm text-muted-foreground">Zone C - West Field</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Yesterday</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
