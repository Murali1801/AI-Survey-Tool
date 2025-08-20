'use client'

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, UserPlus } from "lucide-react"
import { AddUserDialog } from "./add-user-dialog"

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Enumerator",
  },
  {
    id: 3,
    name: "Peter Jones",
    email: "peter.jones@example.com",
    role: "Enumerator",
  },
]

export function UsersTable() {
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false)

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsAddUserDialogOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge>{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddUserDialog
        isOpen={isAddUserDialogOpen}
        onClose={() => setIsAddUserDialogOpen(false)}
      />
    </>
  )
}
