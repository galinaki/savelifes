class ChandeColumnOnAnimals < ActiveRecord::Migration[7.0]
  def change
    change_column :animals, :latitude, :text
    change_column :animals, :longitude, :text
  end
end
