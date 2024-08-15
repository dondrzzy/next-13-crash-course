 'use client';
 import { useState, useEffect } from 'react';
 import Link from 'next/link';
import Courses from './components/Courses';
import Loader from '@/app/loading';
import CourseSearch from './components/CourseSearch';

 export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const courses = await res.json();
      setCourses(courses);
      setLoading(false)
    }

    fetchCourses();
  }, []);

  const searchCourses = async (query) => {
    console.log('query', query);
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    setCourses(courses);
    setLoading(false)
  }

  return (
    <>
      <h1>Welcome to Stack Media</h1>
      <CourseSearch searchCourses={searchCourses} />
      {loading && <Loader />}
      {!loading && <Courses courses={courses} />}
    </>
  );
}
