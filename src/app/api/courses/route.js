import { NextResponse } from 'next/server';
import { v4 as uuidV4} from 'uuid';
import courses from '@/app/api/courses/data.json';


export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();
  console.log(title, description, level, link )
  const course = {
    id: uuidV4(),
    title,
    description,
    level,
    link
  }
  console.log('course', course);
  courses.push(course);
  return NextResponse.json(courses);
}
