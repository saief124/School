class StudentsController < ApplicationController
    def index
        students = Student.all
        render json: students.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: {course_students: {only: [:course_id, :student_id]}}
            
            ), status: 200
    end
end
