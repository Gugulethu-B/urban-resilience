import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Thermometer, Droplets, Recycle, Users, TrendingUp, MapPin, Zap } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Carbon Tracker",
      description: "Monitor and analyze CO2 emissions across the city. Track carbon footprint, set reduction goals, and view real-time environmental impact data.",
      icon: Leaf,
      link: "/carbon-tracker",
      gradient: "bg-gradient-to-r from-nature to-primary",
      stats: "2.3% reduction this month"
    },
    {
      title: "Heat Detection System",
      description: "Advanced satellite monitoring system using Sentinel-2 data to detect heat patterns and urban heat islands for better city planning.",
      icon: Thermometer,
      link: "/heat-detection",
      gradient: "bg-gradient-to-r from-orange-400 to-red-500",
      stats: "15 heat zones monitored"
    },
    {
      title: "Flood Alert System",
      description: "Real-time flood monitoring with weather API integration and SMS alerts via Twilio to keep citizens safe and informed.",
      icon: Droplets,
      link: "/flood-alerts",
      gradient: "bg-gradient-to-r from-sky to-water",
      stats: "0 active alerts"
    },
    {
      title: "Waste Gamification",
      description: "AI-powered waste recognition system that gamifies recycling efforts, encouraging sustainable behavior through rewards and challenges.",
      icon: Recycle,
      link: "/waste-gamification",
      gradient: "bg-gradient-to-r from-earth to-nature",
      stats: "1,247 active participants"
    }
  ];

  const quickStats = [
    { label: "Total Users", value: "3,456", icon: Users, change: "+12%" },
    { label: "Carbon Saved", value: "45.2t", icon: Leaf, change: "+8%" },
    { label: "Alerts Sent", value: "234", icon: Zap, change: "+23%" },
    { label: "Cities Connected", value: "12", icon: MapPin, change: "+2%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-mint to-secondary">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-full mb-6 shadow-soft">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Green City Management System</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Building Sustainable
            <span className="text-primary block">Smart Cities</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive environmental monitoring and citizen engagement platform for creating greener, smarter urban environments.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 -mt-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <Badge variant="secondary" className="mt-2">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Core Environmental Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive suite of tools designed to monitor, analyze, and improve urban environmental conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                link={feature.link}
                gradient={feature.gradient}
                stats={feature.stats}
              />
            ))}
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Connected Urban Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated platform connects residents, citizens, city planners, and NGO staff in a collaborative environment for sustainable city development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Multi-User Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Residents, citizens, city planners, and NGO staff all have tailored access to relevant features and data.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Real-time Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Live data processing from multiple sources including satellite imagery, weather APIs, and citizen reports.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Smart Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated notification system keeps everyone informed about environmental changes and emergency situations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
