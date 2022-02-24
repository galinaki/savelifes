class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.text :img_url
      t.integer :population
      t.text :habitats
      t.text :link
      t.text :location
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
