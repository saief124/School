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

    def authenticate!
       
        unless current_user
            nil
        end
    end
    
end
