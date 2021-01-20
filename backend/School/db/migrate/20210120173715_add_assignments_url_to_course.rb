class AddAssignmentsUrlToCourse < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :assignment, :string, :default=>''
    add_column :courses, :url, :string, :default=>''
  end
end
