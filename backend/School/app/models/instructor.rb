class Instructor < ApplicationRecord
    has_many :courses
    
    has_secure_password
end
