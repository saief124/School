class StudentsController < ApplicationController
    # before_action :authenticate!, only: [:index]
 

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
       
        if current_user
            @student=Student.new(firstname:params["firstname"], lastname:params["lastname"], email:params["email"], password:params["password"])
            if @student.valid?
                @student.save
                render :json=>{:mesg=> "Student created"}, status:201
            else
                error_msg= @student.errors.full_messages
                
                render :json=>{:errors=>error_msg}, status: 400
            end
        else
            render :json =>{:msg=> "You are not authorized"}
        end
    end

    def update
        byebug
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
    
end
