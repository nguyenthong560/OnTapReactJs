const burgerState = {
  burger: { salad: 2, cheese: 2, beef: 1 },
  // Tại sao phãi dùng đối tượng vì khai báo mảng thì sẽ quá dài và rườm rà khi if else
  // [{name: 'salad', amount:1}, { name: 'cheese', amount:1}, {name: 'beef', amount:1}]

  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },

  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREAD_MID": {
      let { propsBurger, amount } = action;

      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;
      // Tinh tong tien
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
