"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

export default function AttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Mock attendance data - in a real app, this would come from a database
  const attendanceHistory = [
    { id: 1, date: "March 15, 2025", event: "General Meeting", status: "Present" },
    { id: 2, date: "March 8, 2025", event: "Subunit Meeting", status: "Present" },
    { id: 3, date: "March 1, 2025", event: "Workshop", status: "Absent" },
    { id: 4, date: "February 22, 2025", event: "General Meeting", status: "Present" },
    { id: 5, date: "February 15, 2025", event: "Subunit Meeting", status: "Present" },
    { id: 6, date: "February 8, 2025", event: "General Meeting", status: "Absent" },
    { id: 7, date: "February 1, 2025", event: "Workshop", status: "Present" },
    { id: 8, date: "January 25, 2025", event: "General Meeting", status: "Present" },
  ]

  const attendanceStats = {
    total: 8,
    present: 6,
    absent: 2,
    percentage: 75,
  }

  // Mock upcoming events - in a real app, this would come from a database
  const upcomingEvents = [
    { id: 1, date: "March 22, 2025", event: "General Meeting", time: "4:00 PM", location: "Main Hall" },
    { id: 2, date: "March 29, 2025", event: "Subunit Meeting", time: "2:00 PM", location: "Room 101" },
    { id: 3, date: "April 5, 2025", event: "Workshop", time: "3:00 PM", location: "Computer Lab" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">View your attendance records and upcoming events</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Your attendance statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Overall Attendance</span>
                <span className="font-medium">{attendanceStats.percentage}%</span>
              </div>
              <Progress value={attendanceStats.percentage} />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <span className="text-2xl font-bold">{attendanceStats.total}</span>
                <p className="text-xs text-muted-foreground">Total Events</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-green-500">{attendanceStats.present}</span>
                <p className="text-xs text-muted-foreground">Present</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-red-500">{attendanceStats.absent}</span>
                <p className="text-xs text-muted-foreground">Absent</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>View events by date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">Attendance History</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Attendance History</CardTitle>
              <CardDescription>Your past attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceHistory.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.event}</TableCell>
                      <TableCell>
                        {record.status === "Present" ? (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            <CheckCircle className="mr-1 h-3 w-3" /> Present
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="mr-1 h-3 w-3" /> Absent
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events you need to attend</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.event}</TableCell>
                      <TableCell>{event.time}</TableCell>
                      <TableCell>{event.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

