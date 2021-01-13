class AddPasswordDigestToInstructor < ActiveRecord::Migration[6.1]
  def change
    add_column :instructors, :password_digest, :string
  end
end
