class StudentSessionsController < ApplicationController

    def create
        @student = Student.find_by(email: params[:email])
        if @student && @student.authenticate(params[:password])
        payload = {student_id: @student.id}
        token = JWT.encode(payload,ENV['SUPER_SECRET_KEY'],'HS256')
        render :json => {student_auth_key: token}
        else
            render :json => {msg: "login failed, enter correct credentials"}
        end    
    end        
end