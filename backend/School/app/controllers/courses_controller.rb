class CoursesController < ApplicationController

    before_action :authenticate!, only: [:index, :create]
    def index
        if current_user
        # courses=Instructor.first.courses
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
            
            course_name=params["course_name"]
            content=params["content"]
            course= Course.create(course_name:course_name, content:content, instructor_id: current_user.id)
            render json: course, status: 201 
        else
            render :json =>{:msg=> "You are not authorized"}
        end
    end

    def destroy
        if current_user
        id=params[:id].to_i
        course=Course.find_by(id: id)
        course.destroy
        render json: {:msg=>"Course was deleted"}
        else
        render json: {:msg=>"You are not authorized"}
        end
    end

    def update
    
        if current_user
            id=params[:id].to_i
            course=Course.find_by(id: id)

            course.update(course_name:params["course_name"], content:params["content"], instructor_id: current_user.id)
            render json: course, status: 201 
        else
            render json: {:msg=>"You are not authorized"}
            
        end
    end
end