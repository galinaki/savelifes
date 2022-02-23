class AddColumnWithUserId < ActiveRecord::Migration[7.0]
  def change
    add_reference :species, :user, foreign_key: true
    add_reference :breeds, :user, foreign_key: true
  end
end
