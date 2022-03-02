class AddColumnToAnimals < ActiveRecord::Migration[7.0]
  def change
    add_column :animals, :latitude, :decimal
    add_column :animals, :longitude, :decimal
  end
end
