class Course < ApplicationRecord
    belongs_to :instructor
    has_many :course_students
    has_many :students, through: :course_students
    
end
