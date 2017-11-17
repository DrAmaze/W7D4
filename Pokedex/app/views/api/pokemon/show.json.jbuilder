json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url

json.items do
  json.array! @pokemon.items, partial: 'api/items/item', as: :item
end
