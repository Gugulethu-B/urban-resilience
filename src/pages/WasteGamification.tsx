import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Recycle, Trophy, Users, Star, Award, Target, TrendingUp, Camera } from "lucide-react";

const WasteGamification = () => {
  const leaderboard = [
    { rank: 1, name: "EcoWarrior2024", points: 2847, items: 156, badge: "Gold" },
    { rank: 2, name: "GreenHero", points: 2103, items: 134, badge: "Silver" },
    { rank: 3, name: "RecycleChamp", points: 1892, items: 98, badge: "Bronze" },
    { rank: 4, name: "EarthGuardian", points: 1654, items: 87, badge: "Bronze" },
    { rank: 5, name: "CleanCityFan", points: 1432, items: 76, badge: "Bronze" },
  ];

  const challenges = [
    { name: "Plastic Free Week", progress: 67, target: 100, reward: "250 points", status: "Active" },
    { name: "Glass Collection", progress: 89, target: 50, reward: "150 points", status: "Complete" },
    { name: "E-Waste Drive", progress: 23, target: 30, reward: "300 points", status: "Active" },
    { name: "Community Clean-up", progress: 45, target: 20, reward: "500 points", status: "Active" },
  ];

  const wasteCategories = [
    { type: "Plastic", recognized: 1247, accuracy: 94, color: "bg-blue-500" },
    { type: "Glass", recognized: 892, accuracy: 97, color: "bg-green-500" },
    { type: "Metal", recognized: 654, accuracy: 91, color: "bg-gray-500" },
    { type: "Paper", recognized: 1103, accuracy: 89, color: "bg-yellow-500" },
    { type: "Organic", recognized: 778, accuracy: 85, color: "bg-orange-500" },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Gold": return "bg-yellow-500";
      case "Silver": return "bg-gray-400";
      case "Bronze": return "bg-orange-600";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-500/10 rounded-xl">
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Waste Gamification</h1>
              <p className="text-muted-foreground">AI-powered waste recognition and recycling rewards</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                  </div>
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <Badge variant="secondary" className="mt-2">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% this week
                </Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Items Scanned</p>
                    <p className="text-2xl font-bold text-foreground">4,674</p>
                  </div>
                  <Camera className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">91% accuracy rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Points Awarded</p>
                    <p className="text-2xl font-bold text-foreground">89,240</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">This month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Challenges Active</p>
                    <p className="text-2xl font-bold text-foreground">8</p>
                  </div>
                  <Trophy className="h-8 w-8 text-purple-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">3 ending soon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle>Community Leaderboard</CardTitle>
                <CardDescription>Top performers in waste recognition and recycling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                          {user.rank}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.items} items scanned</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getBadgeColor(user.badge)}`} />
                          <span className="font-bold">{user.points}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">points</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Active Challenges */}
            <Card>
              <CardHeader>
                <CardTitle>Active Challenges</CardTitle>
                <CardDescription>Complete challenges to earn extra points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{challenge.name}</h4>
                        <Badge variant={challenge.status === 'Complete' ? 'default' : 'secondary'}>
                          {challenge.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{challenge.progress}/{challenge.target}</span>
                        </div>
                        <Progress value={(challenge.progress / challenge.target) * 100} />
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Reward: {challenge.reward}</span>
                          {challenge.status === 'Complete' && (
                            <Award className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Recognition Stats */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>AI Waste Recognition</CardTitle>
              <CardDescription>Machine learning performance by waste category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {wasteCategories.map((category, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">{category.type}</h4>
                    <p className="text-2xl font-bold text-foreground">{category.recognized}</p>
                    <p className="text-sm text-muted-foreground">items recognized</p>
                    <Badge variant="outline" className="mt-2">
                      {category.accuracy}% accuracy
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How Waste Gamification Works</CardTitle>
              <CardDescription>Scan, earn, and make a difference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">1. Scan Waste</h4>
                  <p className="text-sm text-muted-foreground">Use your phone camera to scan recyclable items. Our AI identifies the material type instantly.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">2. Earn Points</h4>
                  <p className="text-sm text-muted-foreground">Get points for proper recycling. Different materials have different point values based on environmental impact.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">3. Win Rewards</h4>
                  <p className="text-sm text-muted-foreground">Redeem points for eco-friendly products, discounts, or donate to environmental causes.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WasteGamification;