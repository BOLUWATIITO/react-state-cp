import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Jane Vangoe',
      bio: 'Here and There.',
      imgSrc: 'https://media.istockphoto.com/id/487361187/photo/buying-a-lottery-ticket-las-ramblas.jpg?s=612x612&w=0&k=20&c=07_9wgLSxGsFZDZh8K9Xakp0cu_WO4RZvW-XejE7m9o=',
      profession: 'Web Developer',
    },
    shows: false,
    mountedTime: new Date(),
    intervalId: null,
  };

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState({ mountedTime: new Date() });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShows = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShows}>{shows ? 'Hide' : 'Show'} Profile</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component mounted since {Math.floor((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
