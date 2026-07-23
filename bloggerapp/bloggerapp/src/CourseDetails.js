import React from 'react';

const courses = [
  { id: 1, name: 'React Fundamentals', seatsLeft: 5, hidden: false },
  { id: 2, name: 'Spring Boot Microservices', seatsLeft: 0, hidden: false },
  { id: 3, name: 'Legacy jQuery Basics', seatsLeft: 3, hidden: true }
];

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => {
          // Technique 4: preventing a component from rendering by returning null.
          if (course.hidden) {
            return null;
          }

          return (
            <li key={course.id}>
              {course.name}
              {/* Technique 5: short-circuit && operator for conditional rendering */}
              {course.seatsLeft > 0 && <span> — {course.seatsLeft} seats left</span>}
              {course.seatsLeft === 0 && <span style={{ color: 'red' }}> — Full</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseDetails;
