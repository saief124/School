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
        course_student=CourseStudent.new(course_id:course_id, student_id: student_id)
            if course_student.valid?
                course_student.save
                render :json=> {:success=>"student added"}, status: 201
            else
                error_msg=course_student.errors.full_messages
                render :json=>{:errors=>error_msg}
            end

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
