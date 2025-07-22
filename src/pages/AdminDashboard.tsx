import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Users, Settings, BarChart3, AlertTriangle, Shield, Database } from "lucide-react";

const AdminDashboard = () => {
  const systemStats = [
    { title: "Total Users", value: "1,234", change: "+12%", icon: Users },
    { title: "Active Alerts", value: "23", change: "+5", icon: AlertTriangle },
    { title: "System Health", value: "98.5%", change: "+0.2%", icon: Shield },
    { title: "Data Points", value: "45.2K", change: "+1.8K", icon: Database },
  ];

  const recentActivities = [
    { action: "New flood alert triggered", location: "District 5", time: "2 min ago", severity: "high" },
    { action: "Carbon data updated", location: "City Center", time: "15 min ago", severity: "normal" },
    { action: "User reported waste issue", location: "Park Ave", time: "1 hour ago", severity: "medium" },
    { action: "Heat sensor calibrated", location: "Industrial Zone", time: "2 hours ago", severity: "normal" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage the Green City system</p>
        </div>

        {/* System Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">{stat.change}</span> from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* System Management */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Management
              </CardTitle>
              <CardDescription>Configure and monitor system components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">User Management</div>
                    <div className="text-sm text-muted-foreground">Manage user accounts and permissions</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Sensor Configuration</div>
                    <div className="text-sm text-muted-foreground">Configure environmental sensors</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Alert Settings</div>
                    <div className="text-sm text-muted-foreground">Manage alert thresholds and notifications</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Data Analytics</div>
                    <div className="text-sm text-muted-foreground">View detailed system analytics</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest system events and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.location}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge 
                        variant={
                          activity.severity === "high" ? "destructive" : 
                          activity.severity === "medium" ? "secondary" : "outline"
                        }
                        className="text-xs"
                      >
                        {activity.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
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

export default AdminDashboard;