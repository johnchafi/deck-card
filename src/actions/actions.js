import dispatcher from "../dispatcher/dispatcher";

export let startGame = () => {
    dispatcher.dispatch({
        type : "START-GAME"
    });
}
export let shuffleDeck = () => {
    dispatcher.dispatch({
        type : "SHUFFLE"
    });
}
export let playCard = () => {
    dispatcher.dispatch({
        type : "PLAY-CARD"
    });
}
