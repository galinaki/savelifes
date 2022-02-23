class User < ApplicationRecord
  has_many :species
  has_many :breeds
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :password, length: { minimum: 7 }
end
