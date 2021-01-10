
import Card from './Card';


export default class Deck{
    constructor(cards = new Card().formCards()) {
        this.cards = cards;
    }
    numberOfCards = () => this.cards.length;

    shuffleCards = () => {
        for(let index = this.numberOfCards()-1; index > 0; index--){
            const newIndex = Math.floor(Math.random() * (index+1));
            const  oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[index];
            this.cards[index]= oldValue;
        }
    }
    pop() {
        return this.cards.shift()
    }

}