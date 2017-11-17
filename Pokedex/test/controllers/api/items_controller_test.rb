require 'test_helper'

class Api::ItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get api_items_update_url
    assert_response :success
  end

end
