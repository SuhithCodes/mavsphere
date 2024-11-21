import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Request Body:', body);

    const {
      title,
      company,
      website,
      location,
      type,
      salaryRange,
      datePosted,
      experienceLevel,
      industry,
      skillsRequired,
      listingType,
    } = body;

    if (!title) {
      console.error('Title is missing!');
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    // Join skills with commas if skillsRequired is an array
    const skillsString = Array.isArray(skillsRequired) ? skillsRequired.join(", ") : skillsRequired;

    const data = {
      title,
      company,
      website,
      location,
      type,
      salaryRange,
      datePosted: new Date(datePosted),
      experienceLevel,
      industry,
      skillsRequired: skillsString, // Now using the joined string
    };

    let listing;
    if (listingType === 'job') {
      listing = await prisma.jobListing.create({ data });
    } else if (listingType === 'internship') {
      listing = await prisma.internshipListing.create({ data });
    } else {
      console.error('Invalid listing type:', listingType);
      return NextResponse.json(
        { error: 'Invalid listing type' },
        { status: 400 }
      );
    }

    console.log('Created Listing:', listing);
    return NextResponse.json(listing);
  } catch (error) {
    console.error('Error creating listing:', error.message); // Log the error message
    console.error(error.stack); // Log the error stack
    return NextResponse.json(
      { error: error.message || 'Error creating listing' },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const [jobs, internships] = await Promise.all([
      prisma.jobListing.findMany({
        orderBy: { datePosted: 'desc' },
      }),
      prisma.internshipListing.findMany({
        orderBy: { datePosted: 'desc' },
      }),
    ]);

    return NextResponse.json({ jobs, internships });
  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json(
      { error: 'Error fetching listings' },
      { status: 500 }
    );
  }
}
