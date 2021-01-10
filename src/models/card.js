
const SUITS = ["♠","♥", "♦" , "♣"];
const VALUE = ["A","2", "3" , "4","5","6", "7" , "8","9","10", "J" , "Q", "k"];

/*
    This class represent object card.
* */
export default class Card{
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    };
    formCards() {
        return SUITS.flatMap(suit =>{
            return VALUE.map(value => {
                return new Card(suit, value);
            })
        })
    };
}
