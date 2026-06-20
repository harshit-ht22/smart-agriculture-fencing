import { ArrowLeft, AlertTriangle, Clock, TrendingUp, Activity } from 'lucide-react';
import { Card } from './ui/card';

interface IntrusionAnalysisProps {
  onBack: () => void;
}

export function IntrusionAnalysis({ onBack }: IntrusionAnalysisProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6">
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
            <h1 className="text-foreground">Intrusion Pattern Analysis</h1>
            <p className="text-muted-foreground">AI-powered insights on farm intrusion patterns and timing</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-muted-foreground">Total Intrusions</div>
                <div className="text-foreground">247 this week</div>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-muted-foreground">Peak Hour</div>
                <div className="text-foreground">6:00 AM</div>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-red-200 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-muted-foreground">Trend</div>
                <div className="text-foreground">+12% from last week</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Analysis Card */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-xl">
          <div className="mb-8">
            <h2 className="text-foreground mb-2">Peak Intrusion Time Slots</h2>
            <p className="text-muted-foreground">Based on 7-day AI analysis of motion detection and camera triggers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Peak Time Card */}
            <Card className="p-6 bg-gradient-to-br from-red-500 to-orange-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-red-100">Peak Activity</span>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                  High Risk
                </div>
              </div>
              <div className="mb-2">5:00 AM - 7:00 AM</div>
              <p className="text-sm text-red-100 mb-4">Early morning intrusions by deer and wild boar seeking crops</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full shadow-lg" style={{ width: '89%' }}></div>
                  </div>
                  <span className="font-medium">89%</span>
                </div>
                <div className="text-sm text-red-100">152 incidents detected</div>
              </div>
            </Card>

            {/* Secondary Peak */}
            <Card className="p-6 bg-gradient-to-br from-orange-400 to-yellow-400 text-white border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-orange-100">Secondary Peak</span>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                  Medium Risk
                </div>
              </div>
              <div className="mb-2">6:30 PM - 8:30 PM</div>
              <p className="text-sm text-orange-100 mb-4">Evening bird flocks and rabbit activity near harvest areas</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full shadow-lg" style={{ width: '64%' }}></div>
                  </div>
                  <span className="font-medium">64%</span>
                </div>
                <div className="text-sm text-orange-100">87 incidents detected</div>
              </div>
            </Card>

            {/* Low Activity */}
            <Card className="p-6 bg-gradient-to-br from-emerald-400 to-teal-400 text-white border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-100">Safe Period</span>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                  Low Risk
                </div>
              </div>
              <div className="mb-2">10:00 AM - 4:00 PM</div>
              <p className="text-sm text-emerald-100 mb-4">Minimal intrusion activity - safest time for farm operations</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full shadow-lg" style={{ width: '18%' }}></div>
                  </div>
                  <span className="font-medium">18%</span>
                </div>
                <div className="text-sm text-emerald-100">8 incidents detected</div>
              </div>
            </Card>
          </div>

          {/* 24-Hour Timeline */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-foreground">24-Hour Activity Timeline</h3>
              <div className="text-sm text-muted-foreground">Hover for details</div>
            </div>
            <div className="relative">
              {/* Timeline bars */}
              <div className="flex items-end justify-between gap-1 h-40 mb-3">
                {[
                  { hour: '12AM', height: 45, count: 12, animals: 'Deer: 7, Rabbits: 5' },
                  { hour: '2AM', height: 52, count: 18, animals: 'Deer: 11, Boar: 4, Rabbits: 3' },
                  { hour: '4AM', height: 78, count: 28, animals: 'Deer: 18, Boar: 8, Rabbits: 2' },
                  { hour: '6AM', height: 95, count: 42, animals: 'Deer: 24, Boar: 15, Rabbits: 3' },
                  { hour: '8AM', height: 62, count: 22, animals: 'Deer: 12, Boar: 6, Birds: 4' },
                  { hour: '10AM', height: 28, count: 6, animals: 'Birds: 4, Rabbits: 2' },
                  { hour: '12PM', height: 22, count: 4, animals: 'Birds: 3, Rabbits: 1' },
                  { hour: '2PM', height: 25, count: 5, animals: 'Birds: 4, Rabbits: 1' },
                  { hour: '4PM', height: 35, count: 8, animals: 'Birds: 5, Rabbits: 3' },
                  { hour: '6PM', height: 72, count: 31, animals: 'Birds: 18, Deer: 9, Rabbits: 4' },
                  { hour: '8PM', height: 58, count: 19, animals: 'Deer: 11, Birds: 6, Rabbits: 2' },
                  { hour: '10PM', height: 42, count: 14, animals: 'Deer: 9, Boar: 3, Rabbits: 2' },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center group relative">
                    <div 
                      className={`w-full rounded-t-lg transition-all cursor-pointer hover:opacity-80 relative ${
                        item.height > 80 
                          ? 'bg-gradient-to-t from-red-500 to-orange-500 shadow-lg shadow-red-500/30' 
                          : item.height > 50 
                          ? 'bg-gradient-to-t from-orange-400 to-yellow-400 shadow-lg shadow-orange-400/30'
                          : 'bg-gradient-to-t from-emerald-400 to-teal-400 shadow-lg shadow-emerald-400/30'
                      }`}
                      style={{ height: `${item.height}%` }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs text-center pt-2">
                        {item.count}
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-max">
                        <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-xl">
                          <div className="mb-1">{item.hour}</div>
                          <div className="mb-1">Total: {item.count} intrusions</div>
                          <div className="text-gray-300">{item.animals}</div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Time labels */}
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>12AM</span>
                <span>2AM</span>
                <span>4AM</span>
                <span>6AM</span>
                <span>8AM</span>
                <span>10AM</span>
                <span>12PM</span>
                <span>2PM</span>
                <span>4PM</span>
                <span>6PM</span>
                <span>8PM</span>
                <span>10PM</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Animal Type Analysis */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
          <h2 className="text-foreground mb-6">Intrusion by Animal Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Deer</span>
                <span className="text-foreground">38%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: '38%' }}></div>
              </div>
              <div className="text-sm text-muted-foreground">94 intrusions</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Wild Boar</span>
                <span className="text-foreground">29%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full" style={{ width: '29%' }}></div>
              </div>
              <div className="text-sm text-muted-foreground">72 intrusions</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Birds</span>
                <span className="text-foreground">21%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '21%' }}></div>
              </div>
              <div className="text-sm text-muted-foreground">52 intrusions</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Rabbits</span>
                <span className="text-foreground">12%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '12%' }}></div>
              </div>
              <div className="text-sm text-muted-foreground">29 intrusions</div>
            </div>
          </div>
        </Card>

        {/* Zone Performance Comparison */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            </div>
            <div className="flex-1">
              <h3 className="text-foreground mb-4">Farm Zone Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Zone A - North Field</span>
                    <span className="text-red-600">High Risk</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Intrusions:</span>
                      <span className="text-foreground">98 this week</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Most Active:</span>
                      <span className="text-foreground">Deer (67%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Zone B - East Field</span>
                    <span className="text-orange-600">Medium Risk</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Intrusions:</span>
                      <span className="text-foreground">64 this week</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Most Active:</span>
                      <span className="text-foreground">Wild Boar (51%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" style={{ width: '53%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Zone C - South Field</span>
                    <span className="text-emerald-600">Low Risk</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Intrusions:</span>
                      <span className="text-foreground">42 this week</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Most Active:</span>
                      <span className="text-foreground">Birds (58%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Zone D - West Field</span>
                    <span className="text-emerald-600">Low Risk</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Intrusions:</span>
                      <span className="text-foreground">43 this week</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Most Active:</span>
                      <span className="text-foreground">Rabbits (62%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '36%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
