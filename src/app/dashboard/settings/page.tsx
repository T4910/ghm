"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [organizationSettings, setOrganizationSettings] = useState({
    name: "Organization Name",
    description: "A brief description of the organization and its mission.",
    email: "contact@organization.com",
    website: "https://organization.com",
    meetingDay: "Saturday",
    meetingTime: "4:00 PM",
    meetingLocation: "Main Hall",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    attendanceReminders: true,
    eventAnnouncements: true,
    applicationUpdates: true,
  })

  const handleSaveOrganizationSettings = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save to a database
    alert("Organization settings updated successfully!")
  }

  const handleSaveNotificationSettings = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save to a database
    alert("Notification settings updated successfully!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage organization settings and preferences</p>
      </div>

      <Tabs defaultValue="organization">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="organization">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>Configure general organization information</CardDescription>
            </CardHeader>
            <form onSubmit={handleSaveOrganizationSettings}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    value={organizationSettings.name}
                    onChange={(e) => setOrganizationSettings({ ...organizationSettings, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgDescription">Description</Label>
                  <Textarea
                    id="orgDescription"
                    value={organizationSettings.description}
                    onChange={(e) => setOrganizationSettings({ ...organizationSettings, description: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="orgEmail">Contact Email</Label>
                    <Input
                      id="orgEmail"
                      type="email"
                      value={organizationSettings.email}
                      onChange={(e) => setOrganizationSettings({ ...organizationSettings, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orgWebsite">Website</Label>
                    <Input
                      id="orgWebsite"
                      value={organizationSettings.website}
                      onChange={(e) => setOrganizationSettings({ ...organizationSettings, website: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="meetingDay">Meeting Day</Label>
                    <Input
                      id="meetingDay"
                      value={organizationSettings.meetingDay}
                      onChange={(e) => setOrganizationSettings({ ...organizationSettings, meetingDay: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meetingTime">Meeting Time</Label>
                    <Input
                      id="meetingTime"
                      value={organizationSettings.meetingTime}
                      onChange={(e) =>
                        setOrganizationSettings({ ...organizationSettings, meetingTime: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meetingLocation">Meeting Location</Label>
                    <Input
                      id="meetingLocation"
                      value={organizationSettings.meetingLocation}
                      onChange={(e) =>
                        setOrganizationSettings({ ...organizationSettings, meetingLocation: e.target.value })
                      }
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent</CardDescription>
            </CardHeader>
            <form onSubmit={handleSaveNotificationSettings}>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-y-0 rounded-md border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between space-y-0 rounded-md border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="attendanceReminders">Attendance Reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive reminders about upcoming meetings</p>
                  </div>
                  <Switch
                    id="attendanceReminders"
                    checked={notificationSettings.attendanceReminders}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, attendanceReminders: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between space-y-0 rounded-md border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="eventAnnouncements">Event Announcements</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications about new events</p>
                  </div>
                  <Switch
                    id="eventAnnouncements"
                    checked={notificationSettings.eventAnnouncements}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, eventAnnouncements: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between space-y-0 rounded-md border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="applicationUpdates">Application Updates</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications about new member applications</p>
                  </div>
                  <Switch
                    id="applicationUpdates"
                    checked={notificationSettings.applicationUpdates}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, applicationUpdates: checked })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

