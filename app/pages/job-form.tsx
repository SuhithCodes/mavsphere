// components/JobForm.js

import React, { useState } from 'react';
import { Input, Label, Button, Select, Textarea } from '@/components/shadcn';
import { useRouter } from 'next/router'; // Import useRouter if you want to navigate on cancel

const JobForm = () => {
  const router = useRouter(); // Initialize the router for navigation
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    company: '',
    location: '',
    type: '',
    salaryRange: '',
    datePosted: '',
    experienceLevel: '',
    industry: '',
    skillsRequired: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
    // Optionally, reset the form or navigate
  };

  const handleCancel = () => {
    // Optionally reset the form
    setFormData({
      id: '',
      title: '',
      company: '',
      location: '',
      type: '',
      salaryRange: '',
      datePosted: '',
      experienceLevel: '',
      industry: '',
      skillsRequired: '',
    });

    // Optionally navigate back to the previous page or another route
    router.push('/'); // Change this to your desired route
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="id">ID</Label>
        <Input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="type">Type</Label>
        <Select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select job type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="salaryRange">Salary Range</Label>
        <Input
          type="text"
          id="salaryRange"
          name="salaryRange"
          value={formData.salaryRange}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="datePosted">Date Posted</Label>
        <Input
          type="date"
          id="datePosted"
          name="datePosted"
          value={formData.datePosted}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="experienceLevel">Experience Level</Label>
        <Select
          id="experienceLevel"
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          required
        >
          <option value="">Select experience level</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="industry">Industry</Label>
        <Input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="skillsRequired">Skills Required</Label>
        <Textarea
          id="skillsRequired"
          name="skillsRequired"
          value={formData.skillsRequired}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleCancel} variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default JobForm;
