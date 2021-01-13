class AddPasswordDigestToStudent < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :password_digest, :string
  end
end
