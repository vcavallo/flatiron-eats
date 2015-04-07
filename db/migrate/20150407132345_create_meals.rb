class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.string :name
      t.string :meal_type
      t.datetime :date
      t.integer :host_id
      t.integer :restaurant_id
      t.timestamps null: false
    end
  end
end
