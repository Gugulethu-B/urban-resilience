import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, TrendingDown, TrendingUp, Target, Users, Building, Car, Factory } from "lucide-react";

const CarbonTracker = () => {
  const emissionSources = [
    { name: "Transportation", value: 45, icon: Car, color: "bg-orange-500" },
    { name: "Buildings", value: 30, icon: Building, color: "bg-blue-500" },
    { name: "Industry", value: 20, icon: Factory, color: "bg-purple-500" },
    { name: "Other", value: 5, icon: Users, color: "bg-gray-500" },
  ];

  const monthlyData = [
    { month: "Jan", emissions: 120, target: 115 },
    { month: "Feb", emissions: 118, target: 113 },
    { month: "Mar", emissions: 115, target: 111 },
    { month: "Apr", emissions: 112, target: 109 },
    { month: "May", emissions: 110, target: 107 },
    { month: "Jun", emissions: 108, target: 105 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-mint to-secondary">
        <div className="container mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Carbon Tracker</h1>
              <p className="text-muted-foreground">Monitor and reduce city-wide CO2 emissions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Emissions</p>
                    <p className="text-2xl font-bold text-foreground">108.2t CO2</p>
                  </div>
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mt-2">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  2.3% decrease
                </Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Target</p>
                    <p className="text-2xl font-bold text-foreground">105.0t CO2</p>
                  </div>
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <Progress value={97} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">97% of target achieved</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Goal</p>
                    <p className="text-2xl font-bold text-foreground">1,200t CO2</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <Progress value={54} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">54% progress to annual goal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Emission Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Emission Sources</CardTitle>
                <CardDescription>Breakdown of CO2 emissions by sector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emissionSources.map((source, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${source.color} bg-opacity-10`}>
                        <source.icon className={`h-4 w-4 ${source.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{source.name}</span>
                          <span className="text-sm text-muted-foreground">{source.value}%</span>
                        </div>
                        <Progress value={source.value} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>Emissions vs targets over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">{data.month}</span>
                      <div className="text-right">
                        <div className="text-sm">
                          <span className="text-foreground">{data.emissions}t</span>
                          <span className="text-muted-foreground"> / {data.target}t</span>
                        </div>
                        <div className={`text-xs ${data.emissions <= data.target ? 'text-primary' : 'text-destructive'}`}>
                          {data.emissions <= data.target ? '✓ Target met' : '⚠ Above target'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Reduction Actions</CardTitle>
              <CardDescription>Implement these strategies to reduce carbon emissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <h4 className="font-semibold mb-2">Green Transportation</h4>
                  <p className="text-sm text-muted-foreground mb-3">Promote electric vehicles and public transport</p>
                  <Button size="sm" variant="outline">Learn More</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <h4 className="font-semibold mb-2">Energy Efficiency</h4>
                  <p className="text-sm text-muted-foreground mb-3">Upgrade building systems and renewable energy</p>
                  <Button size="sm" variant="outline">Learn More</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <h4 className="font-semibold mb-2">Industrial Optimization</h4>
                  <p className="text-sm text-muted-foreground mb-3">Implement clean technologies and processes</p>
                  <Button size="sm" variant="outline">Learn More</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CarbonTracker;