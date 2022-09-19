# frozen_string_literal: true

class Api::UsersController < ApplicationController
	before_action :authenticate_user!

	def refer_user
		user = User.find_by(email: params[:email])
		if user.nil?
			User.invite!(email: params[:email]) if user.nil?
			render json: {message: 'Sent refer email successfully.', success: true}
		else
			render json: {message: 'User already present in system.', success: false}
		end
	end
end