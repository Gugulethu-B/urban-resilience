import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Leaf, Award, TrendingUp, MapPin, Plus, ArrowRight } from "lucide-react";

const UserDashboard = () => {
  const userStats = [
    { title: "Carbon Footprint", value: "2.3 tons", target: "2.0 tons", progress: 85, icon: Leaf },
    { title: "Eco Points", value: "1,247", change: "+156 this week", progress: 62, icon: Award },
    { title: "Streak Days", value: "23", change: "Personal best!", progress: 77, icon: TrendingUp },
  ];

  const quickActions = [
    { title: "Log Carbon Activity", description: "Track your daily carbon footprint", path: "/carbon-tracker", icon: Leaf },
    { title: "Report Waste", description: "Report waste for recycling points", path: "/waste-gamification", icon: Plus },
    { title: "Check Alerts", description: "View environmental alerts in your area", path: "/flood-alerts", icon: MapPin },
  ];

  const recentAchievements = [
    { title: "Eco Warrior", description: "Completed 20 days of carbon tracking", date: "Today" },
    { title: "Waste Reducer", description: "Reported 10 waste items for recycling", date: "2 days ago" },
    { title: "Green Commuter", description: "Used public transport for a week", date: "1 week ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Track your environmental impact and earn rewards</p>
        </div>

        {/* Personal Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {userStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <Progress value={stat.progress} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {stat.change || `Target: ${stat.target}`}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Take action to improve your environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button key={action.title} variant="outline" asChild className="h-auto p-4">
                      <Link to={action.path} className="flex items-start space-x-3">
                        <Icon className="h-5 w-5 text-primary mt-1" />
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-sm text-muted-foreground">{action.description}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 ml-auto mt-1" />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Your latest environmental milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;