class Course < ApplicationRecord
    belongs_to :instructor
    has_many :course_students
    has_many :students, through: :course_students
    validates(:course_name, {presence: true, uniqueness: true})
    validates(:content, {presence: true, uniqueness: true})
end
