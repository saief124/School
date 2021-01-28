class Course < ApplicationRecord
    belongs_to :instructor
    has_many :course_students
    has_many :students, through: :course_students
    validates(:course_name, {presence: true, uniqueness: true})
    validates(:url, {presence: {message:"Content needs to be there"}})
end
