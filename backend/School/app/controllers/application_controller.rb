class ApplicationController < ActionController::API

    def current_user
        token= request.headers['Auth-Key']
        
        begin
            instructor_id=JWT.decode(token, ENV['SUPER_SECRET_KEY'])[0]["instructor_id"]
            @instructor= Instructor.find_by(id: instructor_id)
        rescue
            nil
        end
    end

    def student_user
        token= request.headers['Auth-Key']
        
        begin
            student_id=JWT.decode(token, ENV['SUPER_SECRET_KEY'])[0]["student_id"]
            @student= Student.find_by(id: student_id)
        rescue
            nil
        end
    end

    def authenticate!
       
        unless current_user || student_user
            nil
        end
    end

    # def studentauthenticate
    #     unless student_user
    #         nil
    #     end
    # end

    
end
