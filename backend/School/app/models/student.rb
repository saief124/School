class Student < ApplicationRecord
    has_many :course_students
    has_many :notes
    has_many :courses, through: :course_students
    validates(:firstname, {presence: true})
    validates(:lastname, {presence: true})
    validates(:email, {presence: true, uniqueness: true})
    has_secure_password
end
