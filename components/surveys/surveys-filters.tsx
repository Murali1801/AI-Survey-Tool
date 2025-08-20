import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus } from "lucide-react"
import Link from "next/link"

export function SurveysFilters() {
  return (
    <div className="glassmorphism border-white/20 rounded-xl p-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search surveys..." className="pl-10 bg-background/50 border-white/20" />
          </div>

          {/* Status Filter */}
          <Select>
            <SelectTrigger className="w-[180px] bg-background/50 border-white/20">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Surveys</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>

          {/* Category Filter */}
          <Select>
            <SelectTrigger className="w-[180px] bg-background/50 border-white/20">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="evaluation">Evaluation</SelectItem>
              <SelectItem value="census">Census</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="glassmorphism border-white/20 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
          <Link href="/surveys/create">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              New Survey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
