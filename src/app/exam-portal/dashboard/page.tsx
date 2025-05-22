"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertTriangle } from "lucide-react"

export default function ExamDashboardPage() {
  const router = useRouter()
  const [examTaken, setExamTaken] = useState(false)
  const [examScore, setExamScore] = useState<number | null>(null)

  // Check if the user has completed the exam (would be from localStorage or API in a real app)
  useEffect(() => {
    const storedScore = localStorage.getItem("examScore")
    if (storedScore) {
      setExamTaken(true)
      setExamScore(Number.parseInt(storedScore))
    }
  }, [])

  // Mock applicant data - in a real app, this would come from a database
  const applicant = {
    name: "John Doe",
    email: "john.doe@example.com",
    applicationId: "APP-2025-001",
    level: "300",
    department: "Computer Science",
    subunit: "Technical",
    applicationDate: "March 15, 2025",
    examStatus: examTaken ? "Completed" : "Pending",
  }

  const handleStartExam = () => {
    router.push("/exam-portal/exam")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Organization Portal</span>
          </Link>
          <Button variant="ghost" onClick={() => router.push("/")}>
            Logout
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold">Examination Portal</h1>
            <p className="text-muted-foreground">
              Welcome to the entrance examination portal. Review your details and take the exam when ready.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Applicant Information</CardTitle>
                <CardDescription>Your application details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{applicant.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">{applicant.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application ID:</span>
                    <span className="font-medium">{applicant.applicationId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium">{applicant.level} Level</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Department:</span>
                    <span className="font-medium">{applicant.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Subunit:</span>
                    <span className="font-medium">{applicant.subunit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Date:</span>
                    <span className="font-medium">{applicant.applicationDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Examination Status</CardTitle>
                <CardDescription>Your entrance exam status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  {examTaken ? (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <CheckCircle className="mr-1 h-3 w-3" /> Completed
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-amber-500 text-amber-500">
                      <Clock className="mr-1 h-3 w-3" /> Pending
                    </Badge>
                  )}
                </div>

                {examTaken && examScore !== null && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Your Score:</span>
                      <span className="font-bold text-lg">{examScore}%</span>
                    </div>
                    <div className="rounded-md border p-4">
                      {examScore >= 70 ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Congratulations!</p>
                            <p className="text-sm">You have passed the entrance examination.</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center text-amber-600">
                          <AlertTriangle className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Thank you for taking the exam</p>
                            <p className="text-sm">The organization will review your results and get back to you.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {!examTaken && (
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <h3 className="font-medium mb-2">Examination Instructions:</h3>
                      <ul className="text-sm space-y-1 list-disc pl-4">
                        <li>The exam consists of 50 multiple-choice questions</li>
                        <li>Each question has 5 options with only one correct answer</li>
                        <li>You have 30 minutes to complete the exam</li>
                        <li>Once started, you must complete the exam in one sitting</li>
                        <li>You will be automatically logged out after submission</li>
                      </ul>
                    </div>

                    <Button onClick={handleStartExam} className="w-full">
                      Start Examination
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {examTaken && (
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Thank you for completing the entrance examination. The organization will review your results and
                    application, and will contact you regarding the next steps in the membership process.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={() => router.push("/")}>
                    Return to Homepage
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

