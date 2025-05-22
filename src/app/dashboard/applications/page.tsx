"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, Eye, Mail } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function ApplicationsPage() {
  const [selectedApplication, setSelectedApplication] = useState<any>(null)
  const [examQuestions, setExamQuestions] = useState([
    { id: 1, question: "What is the mission of our organization?" },
    { id: 2, question: "How do you plan to contribute to the growth of the organization?" },
    { id: 3, question: "What skills or talents can you bring to your preferred subunit?" },
    { id: 4, question: "How did you hear about our organization?" },
    { id: 5, question: "Are you willing to commit to regular meetings and activities?" },
  ])
  const [newQuestion, setNewQuestion] = useState("")

  // Mock applications data - in a real app, this would come from a database
  const pendingApplications = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      level: "200",
      department: "Computer Science",
      subunit: "Technical",
      date: "March 15, 2025",
      status: "pending",
      examInvited: false,
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@example.com",
      level: "300",
      department: "Electrical Engineering",
      subunit: "Editorial",
      date: "March 14, 2025",
      status: "pending",
      examInvited: true,
    },
    {
      id: 3,
      name: "Samuel Lee",
      email: "samuel.l@example.com",
      level: "100",
      department: "Physics",
      subunit: "Publicity",
      date: "March 12, 2025",
      status: "pending",
      examInvited: false,
    },
  ]

  const processedApplications = [
    {
      id: 4,
      name: "Jessica Williams",
      email: "jessica.w@example.com",
      level: "400",
      department: "Mathematics",
      subunit: "Technical",
      date: "March 10, 2025",
      status: "approved",
      examScore: 82,
      examInvited: true,
    },
    {
      id: 5,
      name: "Daniel Brown",
      email: "daniel.b@example.com",
      level: "200",
      department: "Chemistry",
      subunit: "Welfare",
      date: "March 8, 2025",
      status: "rejected",
      examScore: 45,
      examInvited: true,
    },
    {
      id: 6,
      name: "Olivia Martinez",
      email: "olivia.m@example.com",
      level: "300",
      department: "Biology",
      subunit: "Editorial",
      date: "March 5, 2025",
      status: "approved",
      examScore: 76,
      examInvited: true,
    },
  ]

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setExamQuestions([...examQuestions, { id: examQuestions.length + 1, question: newQuestion }])
      setNewQuestion("")
    }
  }

  const handleRemoveQuestion = (id: number) => {
    setExamQuestions(examQuestions.filter((q) => q.id !== id))
  }

  const viewApplication = (application: any) => {
    setSelectedApplication(application)
  }

  const toggleExamInvitation = (applicationId: number) => {
    // In a real app, this would update the database
    // For demo purposes, we'll just show an alert
    alert(
      `Exam invitation ${pendingApplications.find((a) => a.id === applicationId)?.examInvited ? "revoked" : "sent"} for application #${applicationId}`,
    )
  }

  const sendExamInvitation = () => {
    if (selectedApplication) {
      alert(`Exam invitation sent to ${selectedApplication.name} at ${selectedApplication.email}`)
      setSelectedApplication(null)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
        <p className="text-muted-foreground">Manage new member applications and entrance exams</p>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending Applications</TabsTrigger>
          <TabsTrigger value="processed">Processed Applications</TabsTrigger>
          <TabsTrigger value="exam">Entrance Exam</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Applications</CardTitle>
              <CardDescription>Applications awaiting review: {pendingApplications.length}</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Preferred Subunit</TableHead>
                    <TableHead>Date Applied</TableHead>
                    <TableHead>Exam Invited</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.name}</TableCell>
                      <TableCell>{application.email}</TableCell>
                      <TableCell>{application.level} Level</TableCell>
                      <TableCell>{application.department}</TableCell>
                      <TableCell>{application.subunit}</TableCell>
                      <TableCell>{application.date}</TableCell>
                      <TableCell>
                        <Switch
                          checked={application.examInvited}
                          onCheckedChange={() => toggleExamInvitation(application.id)}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => viewApplication(application)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" disabled={application.examInvited}>
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processed">
          <Card>
            <CardHeader>
              <CardTitle>Processed Applications</CardTitle>
              <CardDescription>Applications that have been reviewed: {processedApplications.length}</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Preferred Subunit</TableHead>
                    <TableHead>Exam Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processedApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.name}</TableCell>
                      <TableCell>{application.email}</TableCell>
                      <TableCell>{application.level} Level</TableCell>
                      <TableCell>{application.department}</TableCell>
                      <TableCell>{application.subunit}</TableCell>
                      <TableCell>{application.examScore}%</TableCell>
                      <TableCell>
                        {application.status === "approved" ? (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            <CheckCircle className="mr-1 h-3 w-3" /> Approved
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="mr-1 h-3 w-3" /> Rejected
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => viewApplication(application)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exam">
          <Card>
            <CardHeader>
              <CardTitle>Entrance Examination</CardTitle>
              <CardDescription>Configure questions for the entrance exam</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="newQuestion">Add New Question</Label>
                    <Input
                      id="newQuestion"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      placeholder="Enter a new question for the entrance exam"
                    />
                  </div>
                  <Button onClick={handleAddQuestion}>Add Question</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Current Questions</h3>
                  {examQuestions.map((q) => (
                    <div key={q.id} className="flex items-center justify-between rounded-lg border p-4">
                      <span>{q.question}</span>
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveQuestion(q.id)}>
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedApplication && (
        <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
              <DialogDescription>Review the application from {selectedApplication.name}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Personal Information</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span>{selectedApplication.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span>{selectedApplication.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Level:</span>
                      <span>{selectedApplication.level} Level</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department:</span>
                      <span>{selectedApplication.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Preferred Subunit:</span>
                      <span>{selectedApplication.subunit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date Applied:</span>
                      <span>{selectedApplication.date}</span>
                    </div>
                    {selectedApplication.examScore !== undefined && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Exam Score:</span>
                        <span className="font-medium">{selectedApplication.examScore}%</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Application Letter</h3>
                  <p className="mt-2 rounded-md border p-3 text-sm">
                    I am writing to express my interest in joining your esteemed organization. As a student passionate
                    about [specific interest], I believe I can contribute significantly to the{" "}
                    {selectedApplication.subunit} subunit. I have experience in [relevant skills] and I am eager to
                    learn and grow with your organization.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium">Entrance Exam Status</h3>
                <div className="mt-2 rounded-md border p-4">
                  {selectedApplication.examInvited ? (
                    selectedApplication.examScore !== undefined ? (
                      <div>
                        <p className="font-medium">Exam Completed</p>
                        <p className="text-sm text-muted-foreground">
                          This applicant has completed the entrance examination with a score of{" "}
                          {selectedApplication.examScore}%.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium">Exam Invitation Sent</p>
                        <p className="text-sm text-muted-foreground">
                          This applicant has been invited to take the entrance examination.
                        </p>
                      </div>
                    )
                  ) : (
                    <div>
                      <p className="font-medium">Not Yet Invited</p>
                      <p className="text-sm text-muted-foreground">
                        This applicant has not yet been invited to take the entrance examination.
                      </p>
                      <Button className="mt-2" size="sm" onClick={sendExamInvitation}>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Exam Invitation
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <DialogFooter className="flex space-x-2 sm:justify-end">
              {selectedApplication.status === "pending" && (
                <>
                  <Button variant="destructive" onClick={() => setSelectedApplication(null)}>
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button onClick={() => setSelectedApplication(null)}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                </>
              )}
              {selectedApplication.status !== "pending" && (
                <Button onClick={() => setSelectedApplication(null)}>Close</Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

