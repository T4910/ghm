"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Download, UserPlus } from "lucide-react"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterSubunit, setFilterSubunit] = useState("all")
  const [filterLevel, setFilterLevel] = useState("all")
  const [filterRole, setFilterRole] = useState("all")

  // Mock members data - in a real app, this would come from a database
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      level: "300",
      subunit: "Technical",
      role: "Member",
      joinDate: "Jan 15, 2023",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      level: "400",
      subunit: "Editorial",
      role: "Exco",
      joinDate: "Feb 10, 2022",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      level: "200",
      subunit: "Technical",
      role: "Member",
      joinDate: "Mar 5, 2024",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      level: "300",
      subunit: "Publicity",
      role: "Exco",
      joinDate: "Nov 20, 2023",
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert.b@example.com",
      level: "500",
      subunit: "Welfare",
      role: "Member",
      joinDate: "Aug 15, 2022",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily.d@example.com",
      level: "200",
      subunit: "Editorial",
      role: "Member",
      joinDate: "Sep 30, 2023",
    },
    {
      id: 7,
      name: "David Wilson",
      email: "david.w@example.com",
      level: "400",
      subunit: "Technical",
      role: "Exco",
      joinDate: "Jul 12, 2022",
    },
    {
      id: 8,
      name: "Lisa Taylor",
      email: "lisa.t@example.com",
      level: "300",
      subunit: "Welfare",
      role: "Member",
      joinDate: "Apr 25, 2023",
    },
  ]

  // Filter members based on search query and filters
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSubunit = filterSubunit === "all" || member.subunit === filterSubunit
    const matchesLevel = filterLevel === "all" || member.level === filterLevel
    const matchesRole = filterRole === "all" || member.role === filterRole

    return matchesSearch && matchesSubunit && matchesLevel && matchesRole
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Members</h1>
        <p className="text-muted-foreground">View and manage organization members</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Members Directory</CardTitle>
          <CardDescription>Total members: {members.length}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
            <div className="flex-1 space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search members..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Select value={filterSubunit} onValueChange={setFilterSubunit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Subunit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subunits</SelectItem>
                    <SelectItem value="Technical">Technical</SelectItem>
                    <SelectItem value="Editorial">Editorial</SelectItem>
                    <SelectItem value="Publicity">Publicity</SelectItem>
                    <SelectItem value="Welfare">Welfare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={filterLevel} onValueChange={setFilterLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="100">100 Level</SelectItem>
                    <SelectItem value="200">200 Level</SelectItem>
                    <SelectItem value="300">300 Level</SelectItem>
                    <SelectItem value="400">400 Level</SelectItem>
                    <SelectItem value="500">500 Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={filterRole} onValueChange={setFilterRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="Member">Members</SelectItem>
                    <SelectItem value="Exco">Excos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Subunit</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.level} Level</TableCell>
                      <TableCell>{member.subunit}</TableCell>
                      <TableCell>
                        {member.role === "Exco" ? <Badge>Exco</Badge> : <Badge variant="outline">Member</Badge>}
                      </TableCell>
                      <TableCell>{member.joinDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No members found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

