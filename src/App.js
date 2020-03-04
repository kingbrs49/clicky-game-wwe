import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import Wrapper from './components/Wrapper/Wrapper.js';
import Title from './components/Title/Title.js'
import WWECard from './components/WWECard/WWECard.js';
import wrestlers from './components/wrestlers.json';

class App extends Component {

  state = {
    wrestlers,
    message: "Click a WWE Superstar to begin!",
    score: 0,
    topScore: 0
  };

  shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    this.setState({wrestlers: array})
    //return array.sort(() => Math.random() - 0.5);
  }

  onClick() {
    this.shuffle(this.state.wrestlers);
    this.setState((state) => {
      return {score: state.score + 1};
    });
  }

  render() {
    console.log(this.state.wrestlers);

    return (
      <div>
      <Header score={this.state.score} topScore={this.state.topScore} />
        <Title>
          WWE Clicky Game!
        </Title>
        <div className="container">
          <Wrapper>
          {
            wrestlers.map((wrestler) => {
              return (
              <div onClick={()=> this.onClick()}>
                <WWECard 
                image={wrestler.image}
              />
              </div>
              )
            })
          }
          </Wrapper>
        </div>
      </div>
    )
  }
}

export default App;