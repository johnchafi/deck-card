import {EventEmitter} from "events";
import Deck from '../Deck';
import dispatcher from "../dispatcher";

class DeckStore extends EventEmitter{
    constructor(deck = new Deck()) {
        super();
        this.deckCard = deck;
        this.card = null;
    }
    startGame(){
        this.getAll();
        this.emit("start");
    }
    playCard(){
        this.card = this.deckCard.pop();
        this.emit("dealOneCard");
    }
    shuffleDeck(){
        this.card = this.deckCard.shuffleCards();
    }
    getAll(){
        return this.deckCard.cards;
    }
    handleActions(action){
        switch (action.type){
            case "START-GAME":{
                this.startGame();
                break;
            }
            case "PLAY-CARD":{
                this.playCard();
                this.startGame();
                break;
            }
            case "SHUFFLE":{
                this.shuffleDeck();
                break;
            }

        }
    }
}
const deckStore = new DeckStore();
dispatcher.register(deckStore.handleActions.bind(deckStore));
export default deckStore;