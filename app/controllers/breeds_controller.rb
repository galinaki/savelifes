class BreedsController < ApplicationController
  before_action :set_breed, only: %i[ show update destroy ]
  before_action :authorize_request, except: [:create, :show, :index]

  # GET /breeds
  def index
    @species = Species.find(params[:species_id])
    @breeds = @species.breeds

    render json: @breeds
  end

  # GET /breeds/1
  def show
    render json: @breed
  end

  def get_all_reviews
    @breeds = Breed.all
    render json: @breeds
  end

  # POST /breeds
  def create
    @breed = Breed.new(breed_params)
    @breed.species_id = params[:species_id]

    if @breed.save
      render json: @breed, status: :created
    else
      render json: @breed.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /breeds/1
  def update
    if @breed.update(breed_params)
      render json: @breed
    else
      render json: @breed.errors, status: :unprocessable_entity
    end
  end

  # DELETE /breeds/1
  def destroy
    @breed.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_breed
      @breed = Breed.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def breed_params
      params.require(:breed).permit(:name, :population, :habitats, :img_url, :species_id, :link)
    end
end
