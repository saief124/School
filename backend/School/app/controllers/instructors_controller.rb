class InstructorsController < ApplicationController
    def index
        instructors=Instructor.all
        render json: instructors.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: {courses: {only: [:course_name, :content]}}
        ), status: 200
    end
end
