Routes:


Enums = {
  TOY: "TOY",
  FOOD: "FOOD"
}

  *inventory
    -array of objects you own
    intentory = [

    ]
  *shop
    -array of objects

    $rootScope.shop {
      items: [
        {
          type: "TOY",
          increase: 10,
          price: 10,
          image: 'beachball.jpeg'
          name: 'Beach Ball'
        },
        {
          type: "FOOD",
          increase: 10,
          price: 10,
          image: 'tuna.jpeg'
          name: 'Tuna'
        }
      ]
    }
  *stats
    -money (from clicking / interacting)
    -hunger (slowly degenerate on setInterval) if 0 == dead
    -happiness (slowly degenerate on setInterval) if 0 == dead

    kitty.onClick(function() {
      selectedItem = $rootScope.inventory.currentItem;

      switch(selectedItem.type) {
        case $rootScope.Enums.TOY:
          increase happiness
          animation function here
          break;
        case Enums.FOOD:
          break;
      }
    })
