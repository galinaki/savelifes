Rails.application.routes.draw do
  resources :donates
  resources :animals
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
end
