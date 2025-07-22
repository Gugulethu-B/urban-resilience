import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Cloud, Phone, MapPin, AlertCircle, CheckCircle, Clock, Smartphone } from "lucide-react";

const FloodAlerts = () => {
  const alertHistory = [
    { id: 1, date: "2024-01-15", type: "Heavy Rain", area: "North District", status: "Resolved", severity: "Medium" },
    { id: 2, date: "2024-01-12", type: "Flash Flood", area: "River Valley", status: "Active", severity: "High" },
    { id: 3, date: "2024-01-08", type: "Storm Warning", area: "Downtown", status: "Resolved", severity: "Low" },
    { id: 4, date: "2024-01-05", type: "High Water", area: "East Side", status: "Resolved", severity: "Medium" },
  ];

  const weatherData = [
    { time: "Now", condition: "Heavy Rain", precipitation: "85%", temp: "18°C" },
    { time: "1h", condition: "Rain", precipitation: "65%", temp: "17°C" },
    { time: "2h", condition: "Cloudy", precipitation: "20%", temp: "16°C" },
    { time: "3h", condition: "Clear", precipitation: "5%", temp: "15°C" },
  ];

  const riskAreas = [
    { name: "River Valley", risk: "High", population: 2340, lastAlert: "2 hours ago" },
    { name: "Low Plains", risk: "Medium", population: 1890, lastAlert: "1 day ago" },
    { name: "Coastal Area", risk: "Medium", population: 3200, lastAlert: "3 days ago" },
    { name: "Hill District", risk: "Low", population: 1560, lastAlert: "1 week ago" },
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "text-red-500";
      case "Medium": return "text-orange-500";
      case "Low": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Flood Alert System</h1>
              <p className="text-muted-foreground">Weather monitoring and SMS alerts via Twilio</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Alerts</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                  All Clear
                </Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Areas</p>
                    <p className="text-2xl font-bold text-foreground">4</p>
                  </div>
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">1 high risk zone</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">SMS Sent Today</p>
                    <p className="text-2xl font-bold text-foreground">234</p>
                  </div>
                  <Phone className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">98.5% delivery rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Rain Probability</p>
                    <p className="text-2xl font-bold text-foreground">85%</p>
                  </div>
                  <Cloud className="h-8 w-8 text-gray-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Heavy rain expected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weather Forecast */}
            <Card>
              <CardHeader>
                <CardTitle>Weather Forecast</CardTitle>
                <CardDescription>Real-time weather data and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Cloud className="h-6 w-6 text-blue-500" />
                        <div>
                          <p className="font-medium">{data.time}</p>
                          <p className="text-sm text-muted-foreground">{data.condition}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{data.temp}</p>
                        <p className="text-sm text-blue-600">{data.precipitation}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Cloud className="h-4 w-4 mr-2" />
                  View Extended Forecast
                </Button>
              </CardContent>
            </Card>

            {/* Risk Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Areas monitored for flood risk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskAreas.map((area, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{area.name}</h4>
                        <Badge variant={getSeverityBadge(area.risk) as any}>
                          {area.risk} Risk
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Population</p>
                          <p className="font-medium">{area.population.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Alert</p>
                          <p className="font-medium">{area.lastAlert}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alert History */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Alert History</CardTitle>
              <CardDescription>Recent flood alerts and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertHistory.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${alert.status === 'Active' ? 'bg-red-100' : 'bg-green-100'}`}>
                        {alert.status === 'Active' ? 
                          <AlertCircle className="h-5 w-5 text-red-600" /> : 
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        }
                      </div>
                      <div>
                        <h4 className="font-medium">{alert.type}</h4>
                        <p className="text-sm text-muted-foreground">{alert.area} • {alert.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={getSeverityBadge(alert.severity) as any}>
                        {alert.severity}
                      </Badge>
                      <Badge variant={alert.status === 'Active' ? 'destructive' : 'outline'}>
                        {alert.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SMS Alert System */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>SMS Alert System</CardTitle>
              <CardDescription>Twilio-powered emergency notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg">
                  <Smartphone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Instant Alerts</h4>
                  <p className="text-sm text-muted-foreground">Immediate SMS notifications for emergency situations</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">High Delivery Rate</h4>
                  <p className="text-sm text-muted-foreground">98.5% successful message delivery via Twilio</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Real-time Updates</h4>
                  <p className="text-sm text-muted-foreground">Continuous monitoring and status updates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FloodAlerts;