# Creating User Authentication App with Rails and React

## Requirements

- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Node.js](http://nodejs.org/)

## System Dependencies
- Ruby ruby-3.0.1
- Postresql 13.0
- Rails 7.0.1

There are instructions for installing both Ruby and Node at the beginning of the tutorial.

## Add Devise-token-auth gem

Simple, multi-client and secure token-based authentication for Rails.

```
gem 'devise_token_auth'
```
Configure the Devise Token Auth

```
rails g devise_token_auth:install User auth
```

## Configure Rack Middleware

As this is an API Only application, we have to handle ajax requests. So for that, we have to Rack Middleware for handling Cross-Origin Resource Sharing (CORS)

To do that, Just uncomment the

```
gem 'rack-cors'
```

line from your generated Gemfile. And uncomment the contents of `config/initialzers/cors.rb` the following lines to application.rb, adding an expose option in the process:

```rb
# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource(
     '*',
     headers: :any,
     expose: ["Authorization"],
     methods: [:get, :patch, :put, :delete, :post, :options, :show]
    )
  end
end
```

## Development Setup

- Clone repo
	- git clone git@github.com:vaibhavd350/DirectShifts-Task.git
- Run `bundle install`
- Run `npm install`
- Run `rake db:create`, `rake db:migrate`, then `rake db:seed`

## Running

- Start the Rails server and esbuild with one command `./bin/dev`
- Hit http://localhost:3000/

## Postman collection

- https://www.getpostman.com/collections/4fc73396f3e8c4ab990b


