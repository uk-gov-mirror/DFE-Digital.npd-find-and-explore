# frozen_string_literal: true

# A Data Element represents a column of data in a database
class DataElement < ApplicationRecord
  belongs_to :concept, inverse_of: :data_elements

  translates :description
end
