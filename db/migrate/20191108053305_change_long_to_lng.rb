class ChangeLongToLng < ActiveRecord::Migration[5.2]
  def change
    rename_column :benches, :long, :lng
  end
end
