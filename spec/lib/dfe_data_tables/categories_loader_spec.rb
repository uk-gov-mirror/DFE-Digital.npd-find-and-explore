# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'DfEDataTables::CategoriesLoader', type: :model do
  let(:table_path) { 'spec/fixtures/files/categories_table.xlsx' }

  it 'Will perform under a given time' do
    expect {
      DfEDataTables::CategoriesLoader.new(table_path)
    }.to perform_under(5000).ms.sample(10)
  end

  it 'Will upload the categories' do
    DfEDataTables::CategoriesLoader.new(table_path)

    expect(Category.count).to eq(115)
    expect(Concept.count).to eq(179)
    expect(Category.find_each.map(&:root).uniq.map(&:name).sort)
      .to eq(%w[Attainment Demographics])
  end
end
