# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root to: redirect('/sign_in')

  get 'sign_in', to: 'site#index'
  get 'sign_up', to: 'site#index'
  get 'user', to: 'site#index'

  namespace :api do
    resources :users, only: %i[index] do
      collection do
        post :refer_user
      end
    end
  end
end
