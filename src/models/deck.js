
import Card from './card';
/*
    This class represent object Deck of card.
* */

export default class Deck{
    constructor(cards = new Card().formCards()) {
        this.cards = cards;
    }
    numberOfCards = () => this.cards.length;
    // shuffle cards
    shuffleCards = () => {
        for(let index = this.numberOfCards()-1; index > 0; index--){
            const newIndex = Math.floor(Math.random() * (index+1));
            const  oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[index];
            this.cards[index]= oldValue;
        }
    }
    // return first card
    pop() {
        return this.cards.shift()
    }

}
