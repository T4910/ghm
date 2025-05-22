"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApplyPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("registration")

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveTab("application")
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveTab("exam")
  }

  const handleSubmitExam = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/application-submitted")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Organization Portal</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-2xl font-bold">Membership Application</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="registration">Registration</TabsTrigger>
              <TabsTrigger value="application">Application Letter</TabsTrigger>
              <TabsTrigger value="exam">Entrance Exam</TabsTrigger>
            </TabsList>

            <TabsContent value="registration">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Please provide your details to begin the application process</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmitRegistration}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Level</Label>
                      <Input id="level" placeholder="e.g., 300 Level" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subunit">Preferred Subunit</Label>
                      <Input id="subunit" placeholder="Which subunit would you like to join?" required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Continue to Application Letter
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="application">
              <Card>
                <CardHeader>
                  <CardTitle>Application Letter</CardTitle>
                  <CardDescription>Write a letter explaining why you want to join our organization</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmitApplication}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="applicationLetter">Application Letter</Label>
                      <Textarea
                        id="applicationLetter"
                        placeholder="Explain why you want to join, what you can contribute, and any relevant experience you have..."
                        className="min-h-[200px]"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Continue to Entrance Exam
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="exam">
              <Card>
                <CardHeader>
                  <CardTitle>Entrance Examination</CardTitle>
                  <CardDescription>Please answer all questions to complete your application</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmitExam}>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Question 1</h3>
                        <p className="text-sm text-muted-foreground mb-2">What is the mission of our organization?</p>
                        <Textarea required />
                      </div>

                      <div>
                        <h3 className="font-medium">Question 2</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          How do you plan to contribute to the growth of the organization?
                        </p>
                        <Textarea required />
                      </div>

                      <div>
                        <h3 className="font-medium">Question 3</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          What skills or talents can you bring to your preferred subunit?
                        </p>
                        <Textarea required />
                      </div>

                      <div>
                        <h3 className="font-medium">Question 4</h3>
                        <p className="text-sm text-muted-foreground mb-2">How did you hear about our organization?</p>
                        <Textarea required />
                      </div>

                      <div>
                        <h3 className="font-medium">Question 5</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Are you willing to commit to regular meetings and activities?
                        </p>
                        <Textarea required />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Submit Application
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

