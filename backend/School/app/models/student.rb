class Student < ApplicationRecord
    has_many :course_students
    has_many :notes
    has_many :courses, through: :course_students
    has_secure_password
end
