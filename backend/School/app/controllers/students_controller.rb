class StudentsController < ApplicationController
    # before_action :authenticate!, only: [:index]
    # before_action :studentauthenticate, only: [:index]

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
                        include: [courses: {only:[:id, :course_name, :content ]} ]
                        
                        ), status: 200
        else
            render :json =>{:msg => "Login First.."}
        end


    end
end
