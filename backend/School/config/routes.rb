Rails.application.routes.draw do
  resources :course_students, only: [:index, :create, :destroy]
  resources :assignments
  resources :courses, only: [:index, :create, :update, :destroy]
  resources :students, only: [:index]
  resources :instructors, only: [:index]
  post '/login', to: 'sessions#create'
  post '/studentlogin', to: 'student_sessions#create'
  # root to: 'courses#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
