class Instructor < ApplicationRecord
    has_many :courses
    validates(:firstname, {presence: true})
    validates(:lastname, {presence: true})
    validates(:email, {presence: true, uniqueness: true})
    has_secure_password
end
