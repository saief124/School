Rails.application.routes.draw do
  resources :course_students, only: [:index, :create, :destroy]
  resources :courses, only: [:index, :create, :update, :destroy]
  resources :students, only: [:index, :create, :destroy, :update]
  resources :instructors, only: [:index]
  resources :notes, only: [:index, :create, :destroy]
  post '/login', to: 'sessions#create'
  post '/signup', to: 'instructors#create'
  post '/studentlogin', to: 'student_sessions#create'
  post '/studentsignup', to: 'students#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
