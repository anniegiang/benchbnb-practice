# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  long        :float            not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :long, presence :true
  
end
