/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { ChevronsUpDownIcon, ChevronDownIcon, Plus } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const jobListings = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salaryRange: "$120k-$150k",
    datePosted: "2024-10-05",
    experienceLevel: "Mid-level",
    industry: "Tech",
    skillsRequired: ["JavaScript", "React", "Node.js"],
  },
  {
    id: "2",
    title: "Data Analyst",
    company: "Amazon",
    location: "Remote",
    type: "Contract",
    salaryRange: "Competitive",
    datePosted: "2024-10-08",
    experienceLevel: "Entry-level",
    industry: "Finance",
    skillsRequired: ["Python", "SQL", "Data Analysis"],
  },
  // Add more job listings here...
];





const internshipListings = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    type: "Summer Internship",
    salaryRange: "$30/hr",
    datePosted: "2024-10-01",
    experienceLevel: "Student",
    industry: "Tech",
    skillsRequired: ["Java", "C++", "Algorithms"],
  },
  {
    id: "2",
    title: "Marketing Intern",
    company: "Procter & Gamble",
    location: "Cincinnati, OH",
    type: "Fall Internship",
    salaryRange: "$25/hr",
    datePosted: "2024-10-03",
    experienceLevel: "Student",
    industry: "Consumer Goods",
    skillsRequired: ["Social Media", "Content Creation", "Analytics"],
  },
  // Add more internship listings here...
];


  


const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        // Must be true or false
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job Title
          <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => <div>{row.getValue("company")}</div>,
  },
  {
    accessorKey: "website",
    header: "Website",
    cell: ({ row }) => <div>{row.getValue("website")}</div>,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <div>{row.getValue("location")}</div>,
  },
  {
    accessorKey: "type",
    header: "Job Type",
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    accessorKey: "salaryRange",
    header: "Salary Range",
    cell: ({ row }) => <div>{row.getValue("salaryRange")}</div>,
  },
  {
    accessorKey: "datePosted",
    header: "Date Posted",
    cell: ({ row }) => <div>{row.getValue("datePosted")}</div>,
  },
  {
    accessorKey: "experienceLevel",
    header: "Experience Level",
    cell: ({ row }) => <div>{row.getValue("experienceLevel")}</div>,
  },
  {
    accessorKey: "industry",
    header: "Industry",
    cell: ({ row }) => <div>{row.getValue("industry")}</div>,
  },
  {
    accessorKey: "skillsRequired",
    header: "Skills Required",
    cell: ({ row }) => <div>{row.getValue("skillsRequired").join(", ")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const job = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
  onClick={() => {
    // Format all columns into a single string
    const jobData = `
      Job ID: ${job.id}
      Job Title: ${job.title}
      Company: ${job.company}
      Location: ${job.location}
      Website: ${job.website}
      Type: ${job.type}
      Salaray Range: ${job.salaryRange}
      Experience Level: ${job.experienceLevel}
      Industry: ${job.industry}
      Skills Required: ${job.skillsRequired}
    `.trim();

    // Write the formatted string to the clipboard
    navigator.clipboard.writeText(jobData).then(() => {
      alert('Job data copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }}
>
  Copy job details
</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
  onClick={() => {
    const url = job.website.startsWith('http') ? job.website : `https://${job.website}`;
    window.open(url, '_blank');
  }}
>
  View job details
</DropdownMenuItem>

            
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];


function DataTable({ data }) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter job titles..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
  {table.getRowModel().rows?.length ? (
    table.getRowModel().rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
  {cell.column.id === "skillsRequired" ? (
    // Check if the value is an array before using .join()
    Array.isArray(cell.getValue()) 
      ? cell.getValue().join(", ") 
      : cell.getValue() // If it's not an array, just return the value directly
  ) : (
    flexRender(cell.column.columnDef.cell, cell.getContext())
  )}
</TableCell>

        ))}
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        
      </div>
    </div>
  );
}

export default function JobBoardComponent() {
  const [listingType, setListingType] = useState("job");
  const [listings, setListings] = useState({ jobs: [], internships: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    company: "",
    website: "",
    location: "",
    type: "",
    salaryRange: "",
    datePosted: "",
    experienceLevel: "",
    industry: "",
    skillsRequired: "",
  });

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await fetch("/api/listings");
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data for submission
    const data = { ...formState, listingType };
    console.log("Form data before submission:", data);

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        fetchListings(); // Refresh listings
        setFormState({
          title: "",
          company: "",
          website: "",
          location: "",
          type: "",
          salaryRange: "",
          datePosted: "",
          experienceLevel: "",
          industry: "",
          skillsRequired: "",
        });
        setIsModalOpen(false);
      } else {
        const errorMessage = await response.json();
        console.error("Error creating listing:", errorMessage);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="w-full mb-8">
            <TabsTrigger value="jobs" className="flex-1 py-3">
              Job Board
            </TabsTrigger>
            <TabsTrigger value="internships" className="flex-1 py-3">
              Internship Board
            </TabsTrigger>
          </TabsList>
          <TabsContent value="jobs">
            <DataTable data={listings.jobs} />
          </TabsContent>
          <TabsContent value="internships">
            <DataTable data={listings.internships} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Create Listing Button and Sheet */}
      <Sheet onOpenChange={setIsModalOpen} open={isModalOpen} >
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-8 right-8 rounded-full shadow-lg"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" /> Create Listing
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create a New Listing</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="space-y-2">
  <div>
    <Label>Listing Type</Label>
    <RadioGroup
      defaultValue="job"
      onValueChange={setListingType}
      className="flex space-x-4 mt-2"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="job" id="job" />
        <Label htmlFor="job">Job Listing</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="internship" id="internship" />
        <Label htmlFor="internship">Internship Listing</Label>
      </div>
    </RadioGroup>
  </div>

  <div>
    <Label htmlFor="title">Title</Label>
    <Input
      id="title"
      name="title"
      placeholder="Enter job title"
      className="mt-1"
      value={formState.title || ""}
      onChange={(e) => setFormState({ ...formState, title: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="company">Company</Label>
    <Input
      id="company"
      name="company"
      placeholder="Enter company name"
      className="mt-1"
      value={formState.company || ""}
      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="website">Website</Label>
    <Input
      id="website"
      name="website"
      placeholder="Enter company website"
      className="mt-1"
      value={formState.website || ""}
      onChange={(e) => setFormState({ ...formState, website: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="location">Location</Label>
    <Input
      id="location"
      name="location"
      placeholder="Enter job location"
      className="mt-1"
      value={formState.location || ""}
      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="type">Type</Label>
    <Select
      onValueChange={(value) => setFormState({ ...formState, type: value })}
      value={formState.type || ""}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Full-time">Full-time</SelectItem>
        <SelectItem value="Part-time">Part-time</SelectItem>
        <SelectItem value="Internship">Internship</SelectItem>
        <SelectItem value="Contract">Contract</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <div>
    <Label htmlFor="salaryRange">Salary Range</Label>
    <Input
      id="salaryRange"
      name="salaryRange"
      placeholder="Enter salary range"
      className="mt-1"
      value={formState.salaryRange || ""}
      onChange={(e) => setFormState({ ...formState, salaryRange: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="datePosted">Date Posted</Label>
    <Input
      id="datePosted"
      type="date"
      className="mt-1"
      value={formState.datePosted || ""}
      onChange={(e) => setFormState({ ...formState, datePosted: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="experienceLevel">Experience Level</Label>
    <Select
      onValueChange={(value) => setFormState({ ...formState, experienceLevel: value })}
      value={formState.experienceLevel || ""}
    >
      <SelectTrigger id="experienceLevel" name="experienceLevel">
        <SelectValue placeholder="Select experience level" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="entry">Entry-level</SelectItem>
        <SelectItem value="mid">Mid-level</SelectItem>
        <SelectItem value="senior">Senior</SelectItem>
        <SelectItem value="executive">Executive</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <div>
    <Label htmlFor="industry">Industry</Label>
    <Input
      id="industry"
      name="industry"
      placeholder="Enter industry"
      className="mt-1"
      value={formState.industry || ""}
      onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
    />
  </div>

  <div>
    <Label htmlFor="skillsRequired">Skills Required</Label>
    <Textarea
  id="skillsRequired"
  name="skillsRequired"
  placeholder="Enter required skills (comma-separated)"
  className="mt-1"
  value={formState.skillsRequired || ""}
  onChange={(e) => {
    // Update skillsRequired as a comma-separated string
    setFormState({
      ...formState,
      skillsRequired: e.target.value, // Store the value as a string
    });
  }}
/>



  </div>

  <div className="flex space-x-4">
    <Button type="submit">Submit</Button>
    <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
      Cancel
    </Button>
  </div>
</form>

        </SheetContent>
      </Sheet>
    </div>
  );
}

