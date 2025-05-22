import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, FileText, Users } from "lucide-react";

export default function DashboardPage() {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "John Doe",
    role: "admin", // or "member"
    subunit: "Technical",
    level: "300 Level",
    attendanceRate: "85%",
    lastAttendance: "March 15, 2025",
  };

  const isAdmin = user.role === "admin";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user.name}! Here{"'"}s an overview of your account.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subunit</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.subunit}</div>
            <p className="text-xs text-muted-foreground">
              Your assigned subunit
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Level</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.level}</div>
            <p className="text-xs text-muted-foreground">
              Current academic level
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.attendanceRate}</div>
            <p className="text-xs text-muted-foreground">
              Overall attendance rate
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Last Attendance
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.lastAttendance}</div>
            <p className="text-xs text-muted-foreground">
              Last recorded attendance
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Meeting</CardTitle>
              <CardDescription>March 20, 2025 • 4:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Monthly general meeting for all members. Attendance is
                mandatory.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Subunit Workshop</CardTitle>
              <CardDescription>March 25, 2025 • 2:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Technical subunit workshop on web development. Open to all
                members.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Membership Drive</CardTitle>
              <CardDescription>Posted on March 10, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We are now accepting applications for new members. Please
                encourage interested students to apply.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Executive Committee Elections</CardTitle>
              <CardDescription>Posted on March 5, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Elections for the next executive committee will be held next
                month. Nominations open soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isAdmin && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Admin Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-auto py-4" variant="outline">
              <div className="flex flex-col items-center gap-2">
                <Users className="h-5 w-5" />
                <span>View All Members</span>
              </div>
            </Button>
            <Button className="h-auto py-4" variant="outline">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Upload Attendance</span>
              </div>
            </Button>
            <Button className="h-auto py-4" variant="outline">
              <div className="flex flex-col items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Review Applications</span>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
