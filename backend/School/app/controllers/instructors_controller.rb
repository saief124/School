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

    def create
        @instructor = Instructor.new(instructor_params)
        if @instructor.valid?
            @instructor.save
            payload = {instructor_id:@instructor.id}
            token = JWT.encode(payload, ENV['SUPER_SECRET_KEY'], 'HS256')
            render :json=> {auth_key: token}
        else
            error_msg=@instructor.errors.full_messages
            render :json=>{:errors=>error_msg}, status: 400
        end
            
    end

    private
    def instructor_params
        params.require(:instructor).permit(:firstname, :lastname, :email, :password)
    end
end
