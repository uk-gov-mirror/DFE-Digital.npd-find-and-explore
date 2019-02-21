# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.1'

gem 'pg', '~> 1.0'
gem 'rails', '~> 5.2.2'

# Use Puma as the app server
gem 'puma', '~> 3.11'
gem 'webpacker'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Static pages in Rails
gem 'high_voltage', '~> 3.1'

# I18n for models
gem 'globalize', '~> 5.2'

# Nested tree for categories
gem 'ancestry', '~> 3.0'

# Lightweight admin functionality
gem 'rails_admin', '~> 1.4'
gem 'rails_admin_nestable', '~> 0.3.2'

# Breadcrumb navigation
gem 'loaf', '~> 0.8.1'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails', '~> 2.6'
  gem 'factory_bot_rails', '~> 5.0'
  gem 'faker', '~> 1.9'
  gem 'pry', '~> 0.12.2'
  gem 'rubocop', '~> 0.64.0'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'chromedriver-helper'
  gem 'coveralls', require: false
  gem 'factory_bot', '~> 5.0'
  gem 'rspec-rails', '~> 3.8'
  gem 'selenium-webdriver'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
