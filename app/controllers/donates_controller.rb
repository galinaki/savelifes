class DonatesController < ApplicationController
  before_action :set_donate, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /donates
  def index
    @donates = Donate.all

    render json: @donates
  end

  # GET /donates/1
  def show
    render json: @donate
  end

  # POST /donates
  def create
    @donate = Donate.new(donate_params)
    @donate.user = @current_user

    if @donate.save
      render json: @donate, status: :created, location: @donate
    else
      render json: @donate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /donates/1
  def update
    if @donate.update(donate_params)
      render json: @donate
    else
      render json: @donate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /donates/1
  def destroy
    @donate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donate
      @donate = Donate.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def donate_params
      params.require(:donate).permit(:name, :desciption, :logo_url, :link, :user_id)
    end
end
