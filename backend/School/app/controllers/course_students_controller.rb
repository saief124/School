class CourseStudentsController < ApplicationController
    def index
        course_students=CourseStudent.all
        render json: course_students.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: [course: {only: [:course_name, :content]}, student: {only: [:firstname, :lastname]}]
        ), status: 200
    end
end
