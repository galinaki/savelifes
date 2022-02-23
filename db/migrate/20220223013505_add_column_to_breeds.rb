class AddColumnToBreeds < ActiveRecord::Migration[7.0]
  def change
    add_column :species, :link, :string
    add_column :breeds, :link, :string
  end
end
