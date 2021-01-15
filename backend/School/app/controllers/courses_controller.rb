class CoursesController < ApplicationController

    before_action :authenticate!, only: [:index]
    def index
        if current_user
            
        courses=current_user.courses
        render json: courses.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: [instructor: {only: [:firstname, :lastname]}, course_students: {only: :student_id}]
        ), status: 200
        else
            render :json =>{:msg => "Login First.."}
        end
    end
end
