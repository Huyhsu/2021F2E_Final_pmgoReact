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

import {
	feedPokes,
	getPokeById,
	getPokes,

} from "../api";

// FEED JSON TO FIREBASE
export const feedJSONToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_POKES_FEED });
  try {
    await feedPokes();
    dispatch({ type: SUCCESS_POKES_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_POKES_FEED, payload: error });
  }
}

// ADD ITEM TO BAG
export const addBagItem = (dispatch, poke, qty, shiny) => {
  const item = {
    id: poke.id,
    no: poke.no,
    name: poke.name,
    image: poke.image,
    shinyimage: poke.shinyimage,
    qty,
    shiny,
  };
  dispatch({
    type: ADD_BAG_ITEM,
    payload: item,
  });
};

// REMOVE ITEM FROM BAG
export const removeBagItem = (dispatch, poke, shiny) => {
  const removedItem = {
    id: poke.id,
    name: poke.name,
    image: poke.image,
    shinyimage: poke.shinyimage,
    shiny,
  };
  dispatch({
    type: REMOVE_BAG_ITEM,
    payload: removedItem,
  });
};

// SET POKEMON'S DETAIL INFO
export const setPokeDetail = async (dispatch, pokeId, qty) => {
  dispatch({ type: BEGIN_POKES_REQUEST });
  try {
    const poke = await getPokeById(pokeId);
    if (qty === 0)
      dispatch({
        type: SET_POKE_DETAIL,
        payload: { 
          poke,
        },
      });
    else
      dispatch({
        type: SET_POKE_DETAIL,
        payload: {
          poke,
          qty,
        },
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_POKES_REQUEST, payload: error })
  }
};

// SET WHETHER POKEMON IS SHINY OR NOT
export const setPokeShiny = async (dispatch, shiny) => {
  dispatch({
    type: SET_POKE_SHINY,
    payload: shiny,
  });
};

// SET PAGE CONTENT
export const setPage = async (dispatch, url) => {
	let pokes = [];
	dispatch({ type: BEGIN_POKES_REQUEST })
	try {
		pokes = await getPokes(url);
		dispatch({
			type: SET_PAGE_CONTENT,
			payload: pokes,
		});
		dispatch({
    	type: SET_NAVBAR_ACTIVEITEM,
    	payload: url,
  	});
		dispatch({ type: SUCCESS_POKES_REQUEST });
	}catch (error) {
		console.log(error);
		dispatch({ type: FAIL_POKES_REQUEST, payload: error, });
	}
};
