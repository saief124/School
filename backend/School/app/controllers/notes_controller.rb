class NotesController < ApplicationController
    before_action :authenticate!, only: [:create, :index, :destroy]
    def index
        if student_user
            notes=student_user.notes
            render json: notes.as_json(except: [:created_at, :updated_at]), status: 200
        else
            render :json =>{:msg => "Login First.."}
        end
    end

    def create
        if student_user
            @notes=Note.new(student_id:student_user.id, my_assignments: params["my_assignment"], my_course_name:params["my_course_name"])
            if @notes.valid?
                @notes.save
            render json: @notes, status: 201 
            else
                error_msg= @notes.errors.full_messages
                
                render :json=>{:errors=>error_msg}, status: 400
            end

        else
            render :json =>{:msg=> "You are not authorized"}
        end
    end

    def destroy
        if student_user        
        note=Note.find_by(id: params[:id])
        note.destroy
        render json: {:msg=>"Note was deleted"}
        else
        render json: {:msg=>"You are not authorized"}
        end
    end

end
