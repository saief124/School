class SessionsController < ApplicationController

    def create
        @instructor = Instructor.find_by(email: params[:email])
        if @instructor && @instructor.authenticate(params[:password])
        payload = {instructor_id: @instructor.id}
        token = JWT.encode(payload,ENV['SUPER_SECRET_KEY'],'HS256')
        render :json => {auth_key: token}
        else
            render :json => {msg: "login failed, enter correct credentials"}
        end    
    end        
end