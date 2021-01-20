class CourseStudentsController < ApplicationController
    before_action :authenticate!, only: [:create, :destroy]
    def index
        course_students=CourseStudent.all
        render json: course_students.as_json(
            except: [:password_digest, :created_at, :updated_at],
            include: [course: {only: [:course_name, :content]}, student: {only: [:firstname, :lastname]}]
        ), status: 200
    end

    def create
        
        if current_user
        course_id=params["course_id"].to_i
        student_id=params["student_id"].to_i
        course_student=CourseStudent.create(course_id:course_id, student_id: student_id)
        render :json=> course_student, status: 201
        else
            render :json =>{:msg=> "You are not authorized"}
        end
    end

    def destroy
      
        if current_user
        id=params[:id].to_i
        course_student=CourseStudent.find_by(id: id)
        course_student.destroy
        render json: {:msg=>"Student was deleted from the course"}
        else
        render json: {:msg=>"You are not authorized"}
        end
    end
end
