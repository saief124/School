Rails.application.routes.draw do
  resources :course_students, only: [:index, :create, :destroy]
  resources :courses, only: [:index, :create, :update, :destroy]
  resources :students, only: [:index, :create, :destroy, :update]
  resources :instructors, only: [:index, :create]
  resources :notes, only: [:index, :create, :destroy]
  post '/login', to: 'sessions#create'
  post '/studentlogin', to: 'student_sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
