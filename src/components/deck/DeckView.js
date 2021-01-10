import React, {Component} from "react"
import "materialize-css/dist/css/materialize.min.css";
import store from "../../store/store";
import * as  action from "../../actions/actions"
import './Deck.css';


class DeckView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deckCard : [],
            displayCards : false,
            displayCard : false,
            card : {
                suit : "",
                value : ""
            }
        };
        this.selectCard= this.selectCard.bind(this);
        this.displayCards=this.displayCards.bind(this);
        this.shuffleDeck=this.shuffleDeck.bind(this);
    }
    componentDidMount() {
        store.on("start", () => {
            this.setState({
                deckCard: store.getAll(),
                displayCards : true
            });
        })
        store.on("dealOneCard", () => {
            if(store.card !== undefined){
                this.setState({
                        card:store.card,
                        displayCard :true
                    });
            }
        })
    }
    componentWillUnmount() {
        store.off("start", () => {
            this.setState({
                deckCard: store.getAll(),
                displayCards : true
            });
        })
        store.off("dealOneCard", () => {
            if(store.card !== undefined){
                this.setState({
                    card:store.card,
                    displayCard :true
                });
            }
        })
    }

    cardSize(){
        return this.state.deckCard.length;
    }
    displayCards(){
        if(this.cardSize() === 0) {
            action.startGame();
        }
    }
    selectCard(){
        if(this.cardSize() === 0){
            alert("First you have to diplay the cards!");
            window.location.reload(false);
        }
        else action.playCard();
    }
    shuffleDeck(){
        if(this.cardSize() === 0) alert("First you have to diplay the cards!");
        else action.shuffleDeck();
    }
    render(){
        let hideShowDeck = this.state.displayCards;
        let hideShowCard = this.state.displayCard;
        let value =  this.state.card.value;
        let suit =  this.state.card.suit;
        let cardColor = suit === "♠" || suit === "♣" ? "black" : "red";
        return(
            <div>
                <nav className="card light-blue darken-3">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo center">CARD GAME</a>
                    </div>
                </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div className="card light-blue darken-3 ">
                                    <div className="card-content white-text">
                                        <span className="card-title">Deck of Cards</span>
                                        <p>Game rules, Before you shuffle the cards or select a card you have first of all to display the cards</p>
                                    </div>
                                    <div className="card-action">
                                        <button  style={{marginRight : 20}} className="waves-effect  waves-light btn-small" onClick={this.displayCards}>Display</button>
                                        <button  style={{marginRight : 20}} className="waves-effect waves-light btn-small" onClick={this.shuffleDeck}>Shuffle</button>
                                        <button  style={{marginRight : 20}} className="waves-effect waves-light btn-small" onClick={this.selectCard}>Select Card</button>
                                    </div>
                                    <div className="row">
                                        { hideShowDeck &&(
                                            <div className="col s12 m6">
                                                <div style={{height : 250}} className="card-panel teal z-depth-4">
                                                    <div style={{fontSize : 100}}>{this.cardSize()}</div>
                                                </div>
                                            </div>
                                        )}
                                        { hideShowCard &&(
                                            <div className="col s12 m6">
                                                <div style={{height : 250}} className="card-panel white">
                                                    <div className="left">
                                                        <div style={{color : cardColor}}>{value}</div>
                                                        <div style={{color : cardColor}}>{suit}</div>
                                                    </div>
                                                    <div style={{fontSize : 100, color : cardColor}} className="center-block">{suit}</div>
                                                    <div className="right">
                                                        <div style={{color : cardColor}}>{value}</div>
                                                        <div style={{color : cardColor}} className="rotate">{suit}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
}

export default DeckView;
