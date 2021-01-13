class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :course_name
      t.string :content
      t.integer :instructor_id
      
      t.timestamps
    end
  end
end
