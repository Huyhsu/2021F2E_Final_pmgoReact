import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import pokes from "../json/pokes.json";
import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_BAG_ITEM,
  REMOVE_BAG_ITEM,
  SET_POKE_DETAIL,
  SET_POKE_SHINY,
  BEGIN_POKES_FEED,
  SUCCESS_POKES_FEED,
  FAIL_POKES_FEED,
  BEGIN_POKES_REQUEST,
  SUCCESS_POKES_REQUEST,
  FAIL_POKES_REQUEST,
} from "../utils/constants";

export const StoreContext = createContext();
let bagItems = localStorage.getItem("bagItems")
  ? JSON.parse(localStorage.getItem("bagItems"))
  : [];

let sortBagItems = localStorage.getItem("sortBagItems")
  ? JSON.parse(localStorage.getItem("sortBagItems"))
  : [];

const initialState = {
  page: {
    pokes: [],
  },
  navBar: {
    activeItem: "/",
  },
  pokeDetail: {
    poke: {},
    qty: 1,
  },
  pokeIsShiny: {
    shiny: "notshiny",
  },
  bagItems,
  sortBagItems,
	// 
	feedProducts: {
    loading: false,
    error: null,
  },
  requestProducts: {
    loading: false,
    error: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: {
          pokes: action.payload,
        },
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    // ??????????????????????????????why ...state.pokeDetail , ...action~
    case SET_POKE_DETAIL:
      return {
        ...state,
        pokeDetail: {...state.pokeDetail, ...action.payload,}
      };
    case SET_POKE_SHINY:
      return {
        ...state,
        pokeIsShiny: {
          shiny: action.payload,
        },
      };
    case ADD_BAG_ITEM:
      const item = action.payload;
      // const poke = state.bagItems.find((x) => x.id === item.id);
      // if (poke) {
      // 	bagItems = state.bagItems.map((x) =>
      // 		x.id === poke.id ? item : x
      // 	);
      // 	return { ...state, bagItems };
      // }
      for (var i = 1; i <= item.qty; i++) {
        bagItems = [...state.bagItems, item];
      }
      // bagItems = [...state.bagItems, item];
      return { ...state, bagItems };
    case REMOVE_BAG_ITEM:
      const removedItem = action.payload;
      const poke = state.bagItems.find(
        (x) => x.id === removedItem.id && x.shiny === removedItem.shiny
      );
      // const removedItemIndex = state.bagItems.indexOf((x) => x.id === removedItem.id  && x.shiny === removedItem.shiny);
      const removedItemIndex = state.bagItems.indexOf(poke);
      const newBagItems = state.bagItems.splice(removedItemIndex, 1);
      // bagItems = state.bagItems.filter((x) => x.id !== action.payload);
      return { ...state, newBagItems };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
