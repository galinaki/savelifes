class AddColumnToAnimals < ActiveRecord::Migration[7.0]
  def change
    add_column :animals, :latitude, :text
    add_column :animals, :longitude, :text
  end
end
