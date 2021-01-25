class CoursesController < ApplicationController

    before_action :authenticate!, only: [:index, :create, :update, :destroy]
    def index
        if current_user
        courses=current_user.courses
        render json: courses.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: [students: {only: [:id, :firstname, :lastname]}, course_students: {only: [:id, :course_id, :student_id]}]
        ), status: 200
        else
            render :json =>{:msg => "Login First.."}
        end
    end

    def create
        if current_user
            @course=Course.new(course_name:params["course_name"], content:params["content"], assignment:params["assignment"], url:params["url"], instructor_id:current_user.id)
            if @course.valid?
                @course.save
            render json: @course, status: 201 
            else
                # byebug
                error_msg= @course.errors.full_messages
                
                render :json=>{:errors=>error_msg}, status: 400
            end

        else
            render :json =>{:msg=> "You are not authorized"}
        end
    end

    def destroy
        if current_user        
        course=Course.find_by(id: params[:id])
        course.destroy
        render json: {:msg=>"Course was deleted"}
        else
        render json: {:msg=>"You are not authorized"}
        end
    end

    def update
    
        if current_user || student_user           
            course=Course.find_by(id: params[:id])
            course.update(course_params)
            if course.valid?
            render json: course, status: 201 
            else
                error_msg= course.errors.full_messages
                
                render :json=>{:errors=>error_msg}, status: 400
            end
        else
            render json: {:msg=>"You are not authorized"}
            
        end
    end

    private
    def course_params
        params.require(:course).permit(:course_name, :content, :instructor_id, :assignment, :url)
    end
end