// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / state
  const data = {
    items: [
      { id: 0, name: 'Steak Dinner', calories: 1200 },
      { id: 1, name: 'Cookie', calories: 400 },
      { id: 2, name: 'Eggs', calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  //Public controller
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list'
  };

  // Public controller
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item) {
        html += `
            <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });

      // Insert list Items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  };
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    Init: function() {
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

//Initialize App
App.Init();
