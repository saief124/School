class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.references :student, null: false, foreign_key: true
      t.string :my_course_name
      t.string :my_assignments

      t.timestamps
    end
  end
end
