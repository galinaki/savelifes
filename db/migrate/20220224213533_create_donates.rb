class CreateDonates < ActiveRecord::Migration[7.0]
  def change
    create_table :donates do |t|
      t.string :name
      t.text :desciption
      t.text :logo_url
      t.text :link
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
