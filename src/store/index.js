import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
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
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,

  SET_SORTBAR_ACTIVETYPE,
  BEGIN_SORTBAR_REQUEST,
  SUCCESS_SORTBAR_REQUEST,
  RESET_SORTBAR_ACTIVETYPE,
  SEND_COMMENT,
  SET_COMMENT_LIST,
} from "../utils/constants";

export const StoreContext = createContext();

// let bagItems = localStorage.getItem("bagItems")
//   ? JSON.parse(localStorage.getItem("bagItems"))
//   : [];

let bagItems;
try{
  bagItems = JSON.parse(localStorage.getItem("bagItems"));
  if (!bagItems) bagItems = [];
} catch(e) {
  bagItems = [];
}

// let sortBagItems = localStorage.getItem("sortBagItems")
//   ? JSON.parse(localStorage.getItem("sortBagItems"))
//   : [];

let userInfo;
try {
  userInfo =  JSON.parse(localStorage.getItem("userInfo"));
} catch(e) {
  userInfo = null;
}

const initialState = {
  page: {
    pokes: [],
  },
  navBar: {
    activeItem: "/",
  },
  sortBar: {
    activeTypes: [],
    hiding: false,
  },
  pokeDetail: {
    poke: {},
    qty: 1,
  },
  pokeIsShiny: {
    shiny: "notshiny",
  },
  bag: {
    bagItems,
  },
  // sortBagItems,
  //
  feedPokes: {
    loading: false,
    error: null,
  },
  requestPokes: {
    loading: false,
    error: null,
  },
  userSignIn: {
    loading: false,
    userInfo,
    remember: true,
    error: "",
  },
  userRegister: {
    loading: false,
    userInfo: null,
    error: "",
  },
  commentList: {
    comments: [],
  }
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
    case SET_SORTBAR_ACTIVETYPE:
      return {
        ...state,
        sortBar: {
          activeTypes: action.payload,
        },
      };
    case BEGIN_SORTBAR_REQUEST:
      return {
        ...state,
        sortBar: { ...state.sortBar, hiding: true },
      };
    case SUCCESS_SORTBAR_REQUEST:
      return {
        ...state,
        sortBar: { ...state.sortBar, hiding: false },
      };
    case RESET_SORTBAR_ACTIVETYPE:
      return {
        ...state,
        sortBar: {
          ...state.sortBar,
          activeTypes: action.payload,
        },
      };
    case SET_POKE_DETAIL:
      return {
        ...state,
        pokeDetail: { ...state.pokeDetail, ...action.payload },
      };
    case SET_POKE_SHINY:
      return {
        ...state,
        pokeIsShiny: {
          shiny: action.payload,
        },
      };
    case BEGIN_POKES_REQUEST:
      return {
        ...state,
        requestPokes: { ...state.requestPokes, loading: true },
      };
    case SUCCESS_POKES_REQUEST:
      return {
        ...state,
        requestPokes: { ...state.requestPokes, loading: false },
      };
    case FAIL_POKES_REQUEST:
      return {
        ...state,
        requestPokes: {
          ...state.requestPokes,
          loading: false,
          error: action.payload,
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
      for (let i = 1; i <= item.qty; i++) {
        bagItems.push(item);
        // bagItems = [...state.bagItems, item];
      }
      // bagItems = [...state.bagItems, item];
      // return { ...state, bagItems };
      return { ...state, bag: { ...state.bag, bagItems } };

    case REMOVE_BAG_ITEM:
      const removedItem = action.payload;
      const poke = state.bag.bagItems.find(
        (x) => x.id === removedItem.id && x.shiny === removedItem.shiny
      );
      // const removedItemIndex = state.bagItems.indexOf((x) => x.id === removedItem.id  && x.shiny === removedItem.shiny);
      const removedItemIndex = state.bag.bagItems.indexOf(poke);
      // const newBagItems = state.bag.bagItems.splice(removedItemIndex, 1);
      // bagItems = state.bagItems.filter((x) => x.id !== action.payload);
      state.bag.bagItems.splice(removedItemIndex, 1);
      bagItems = state.bag.bagItems;
      return { ...state, bag: { ...state.bag, bagItems } };
    // FIREBASE LOGIN
    case BEGIN_LOGIN_REQUEST:
      return { ...state, userSignIn: { ...state.userSignIn, loading: true } };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        userSignIn: {
          ...state.userSignIn,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_LOGIN_REQUEST:
      return {
        ...state,
        userSignIn: {
          ...state.userSignIn,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case BEGIN_UPDATE_USERINFO:
      return { ...state, userSignIn: { ...state.userSignIn, loading: true } };
    case SUCCESS_UPDATE_USERINFO:
      return {
        ...state,
        userSignIn: {
          ...state.userSignIn,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_UPDATE_USERINFO:
      return {
        ...state,
        userSignIn: {
          ...state.userSignIn,
          loading: false,
          error: action.payload,
        },
      };
    case LOGOUT_REQUEST:
      bagItems = [];
      return {
        ...state,
        userSignIn: {
          ...state.userSignIn,
          userInfo: null,
        },
      };
    case REMEMBER_LOGIN:
      return {
        ...state,
        userSignIn: {
          ...state.userSignIn,
          remember: action.payload,
        },
      };
    case BEGIN_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: { ...state.userRegister, loading: true },
      };
    case SUCCESS_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
        userSignIn: {
          ...state.userSignIn,
          userInfo: action.payload,
        },
      };
    case FAIL_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };

    // case SEND_COMMENT:
    //   return {
    //     ...state,
    //     userRegister: {
    //       ...state.userRegister,
    //       loading: false,
    //       userInfo: null,
    //       error: action.payload,
    //     },
    //   };
    case SET_COMMENT_LIST:
      return {
        ...state,
        commentList: {
          comments: action.payload,
        },
      };
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
