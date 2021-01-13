class CoursesController < ApplicationController
    def index
        courses=Course.all
        render json: courses.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: [instructor: {only: [:firstname, :lastname]}, course_students: {only: :student_id}]
        ), status: 200
    end
end
