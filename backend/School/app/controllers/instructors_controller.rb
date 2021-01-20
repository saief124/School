class InstructorsController < ApplicationController
    before_action :authenticate!, only: [:index]
    def index
        if current_user
        
        render json: current_user.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: {courses: {only: [:id, :course_name, :content, :assignment, :url]}}
        ), status: 200
        else
            render :json =>{:msg => "Login First.."}
        end
    end
end
