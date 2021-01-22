class CourseStudent < ApplicationRecord
    belongs_to :student
    belongs_to :course

    validates(:course_id, {presence: true})
    validates(:student_id, {presence: true, uniqueness: {scope: :course, message:"already in this course"}})
end
