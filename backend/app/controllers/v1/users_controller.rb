module V1
  class UsersController < APIController
    before_action :set_user, only: %i[ show update destroy ]

    # GET /users
    # GET /users.json
    def index
      @users = User.all
    end

    # GET /users/1
    # GET /users/1.json
    def show
    end

    # POST /users
    # POST /users.json
    def create
      @user = User.new(user_params)

      if @user.save
        render :show, status: :created, location: [:v1, @user]
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /users/1
    # PATCH/PUT /users/1.json
    def update
      if @user.update(user_params)
        render :show, status: :ok, location: [:v1, @user]
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # DELETE /users/1
    # DELETE /users/1.json
    def destroy
      @user.destroy!
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def user_params
        params.fetch(:user, {})
          .permit(
            :email,
            :name,
          )
      end
  end
end
