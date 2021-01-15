Rails.application.routes.draw do
  resources :course_students
  resources :assignments
  resources :courses
  resources :students
  resources :instructors
  post '/login', to: 'sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
