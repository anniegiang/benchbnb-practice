class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    render :index
  end

  def bench_params
    params.require(:bench).permit(
      :lat,
      :long,
      :description,
    )
  end

end
