import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import Wrapper from './components/Wrapper/Wrapper.js';
import Title from './components/Title/Title.js'
import WWECard from './components/WWECard/WWECard.js';
import wrestlers from './components/wrestlers.json';

class App extends Component {

  state = {
    wrestlers,
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
    
  }

  render() {

    console.log(this.state.wrestlers)

    //this.shuffle(this.state.wrestlers)
    
    //console.log(this.state.wrestlers)

    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
          <div className="container">
            <Title>
              WWE Clicky Game!
            </Title>
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