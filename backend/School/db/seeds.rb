# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ firstname: 'Star Wars' }, { firstname: 'Lord of the Rings' }])
#   Character.create(firstname: 'Luke', movie: movies.first)
Instructor.destroy_all
Student.destroy_all
Course.destroy_all
CourseStudent.destroy_all
# Assignment.destroy_all

instructors = [
    {firstname: 'Bob', lastname: 'Stranton', email: 'bob_stranton@gmail.com', password: '123'},
    {firstname: 'John', lastname: 'Smith', email: 'john_smith@gmail.com', password: 'abc'}
]
instructors.each { |instructor| Instructor.create!(instructor) }
byebug
students = [
    {firstname: 'Bob', lastname: 'Anton', email: 'bob_anton@gmail.com', password: '12345'},
    {firstname: 'Drew', lastname: 'Breeze', email: 'drew_breeze@gmail.com', password: 'abcde'},
    {firstname: 'Bobby', lastname: 'Diaz', email: 'bobby_diaz@gmail.com', password: 'abcdef'}
]
students.each { |student| Student.create!(student) }

courses = [
    {course_name:"Intro to Ruby", content:"Ruby is cool", instructor_id: Instructor.first.id},
    {course_name:"JavaScript", content:"JavaScript is popular", instructor_id: Instructor.second.id}
]
courses.each { |course| Course.create!(course) }

course_students = [
    {course_id: Course.first.id, student_id: Student.first.id},
    {course_id: Course.first.id, student_id: Student.second.id},
    {course_id: Course.first.id, student_id: Student.third.id},
    {course_id: Course.second.id, student_id: Student.third.id}
]
course_students.each { |course_student| CourseStudent.create!(course_student)}

# assignments = [
#     {content:"Ruby homework", grade:"N/A", course_id: Course.first.id},
#     {content:"JavaScript is popular", grade:"N/A", course_id: Course.second.id}
# ]
# assignments.each { |assignment| Assignment.create!(assignment) }