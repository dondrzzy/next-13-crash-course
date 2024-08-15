import { NextResponse } from 'next/server';

import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  console.log(searchParams);
  const query = searchParams.get('query');
  console.log('query', query);
  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()))
  return NextResponse.json(filteredCourses)
}
