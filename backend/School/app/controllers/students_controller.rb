class StudentsController < ApplicationController

    def index
       
        if current_user
            students = Student.all
            render json: students.as_json(
                except: [:password_digest, :created_at, :updated_at],
                include: {course_students: {only: [:course_id, :student_id]}}
                
                ), status: 200
        elsif student_user
                    
                    render json: student_user.as_json(
                        except: [:password_digest, :created_at, :updated_at],
                        include: [courses: {only:[:id, :course_name, :content, :assignment, :url ]} ]
                        
                        ), status: 200
        else
            render :json =>{:msg => "Login First.."}
        end


    end

    def create
        
        @student = Student.new(student_params)
        if @student.valid?
            @student.save
            payload = {student_id:@student.id}
            token = JWT.encode(payload, ENV['SUPER_SECRET_KEY'], 'HS256')
            render :json=> {student_auth_key: token}
        else
            error_msg=@student.errors.full_messages
            render :json=>{:errors=>error_msg}, status: 400
        end
    end

    def update
       
    end

    def destroy
       
        if current_user        
        student=Student.find_by(id: params[:id])
        student.destroy
        render json: {:msg=>"Student was deleted"}
        else
        render json: {:msg=>"You are not authorized"}
        end
    end
    
    private
    def student_params
        params.require(:student).permit(:firstname, :lastname, :email, :password)
    end
end
