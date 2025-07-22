import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Satellite, MapPin, AlertTriangle, TrendingUp, Eye } from "lucide-react";

const HeatDetection = () => {
  const heatZones = [
    { id: 1, name: "Downtown Core", temperature: 34.2, status: "High", risk: "High" },
    { id: 2, name: "Industrial District", temperature: 32.8, status: "Moderate", risk: "Medium" },
    { id: 3, name: "Residential North", temperature: 29.1, status: "Normal", risk: "Low" },
    { id: 4, name: "Park Area", temperature: 26.5, status: "Cool", risk: "Low" },
    { id: 5, name: "Commercial South", temperature: 31.7, status: "Moderate", risk: "Medium" },
  ];

  const satelliteData = [
    { date: "2024-01-15", coverage: "95%", quality: "Excellent" },
    { date: "2024-01-12", coverage: "88%", quality: "Good" },
    { date: "2024-01-09", coverage: "92%", quality: "Excellent" },
    { date: "2024-01-06", coverage: "85%", quality: "Good" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "High": return "bg-red-500";
      case "Moderate": return "bg-orange-500";
      case "Normal": return "bg-green-500";
      case "Cool": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-xl">
              <Thermometer className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Heat Detection System</h1>
              <p className="text-muted-foreground">Monitor urban heat islands using Sentinel-2 satellite data</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Temperature</p>
                    <p className="text-2xl font-bold text-foreground">30.9°C</p>
                  </div>
                  <Thermometer className="h-8 w-8 text-orange-500" />
                </div>
                <Badge variant="secondary" className="mt-2">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +1.2°C vs last week
                </Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Heat Zones</p>
                    <p className="text-2xl font-bold text-foreground">15</p>
                  </div>
                  <MapPin className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">3 high risk zones</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Satellite Coverage</p>
                    <p className="text-2xl font-bold text-foreground">95%</p>
                  </div>
                  <Satellite className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Last update: 2 hours ago</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Alerts</p>
                    <p className="text-2xl font-bold text-foreground">3</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">2 high temperature alerts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Heat Zones */}
            <Card>
              <CardHeader>
                <CardTitle>Heat Zone Monitor</CardTitle>
                <CardDescription>Real-time temperature monitoring across city zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {heatZones.map((zone) => (
                    <div key={zone.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(zone.status)}`} />
                        <div>
                          <p className="font-medium">{zone.name}</p>
                          <p className="text-sm text-muted-foreground">{zone.temperature}°C</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={getRiskBadge(zone.risk) as any} className="mb-1">
                          {zone.risk} Risk
                        </Badge>
                        <p className="text-xs text-muted-foreground">{zone.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  View Heat Map
                </Button>
              </CardContent>
            </Card>

            {/* Satellite Data */}
            <Card>
              <CardHeader>
                <CardTitle>Sentinel-2 Data</CardTitle>
                <CardDescription>Latest satellite imagery and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {satelliteData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{data.date}</p>
                        <p className="text-sm text-muted-foreground">Coverage: {data.coverage}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={data.quality === "Excellent" ? "default" : "secondary"}>
                          {data.quality}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Satellite className="h-4 w-4 mr-2" />
                  Access Raw Data
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Analysis & Insights */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Heat Island Analysis</CardTitle>
              <CardDescription>Insights and recommendations based on current data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Findings</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500">•</span>
                      <span>Downtown core shows 3.5°C higher temperatures than green spaces</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500">•</span>
                      <span>Industrial areas contribute to localized heat buildup</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500">•</span>
                      <span>Park areas effectively reduce ambient temperature</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Recommendations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Increase green roof installations in downtown area</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Plant more trees along major commercial streets</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Implement cool pavement technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HeatDetection;