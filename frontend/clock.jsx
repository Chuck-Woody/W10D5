import React from "react"

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.title = (<h1> CLOCK</h1>)
    this.date = new Date()
    this.state = {
      date: this.date,
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds()
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.date = new Date();
    this.setState({
      date: new Date(),
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds()
    })

  }
  
  componentDidMount() {
    console.log("componentDidMount")
    let clock = setInterval(this.tick, 1000)
  }

  render() {
    return (
      <div id="clock">
        {`${this.state.hours.toString().padStart(2,'0')} : ${this.state.minutes.toString().padStart(2,'0')} : ${this.state.seconds.toString().padStart(2,'0')}`}


        <button>Hello</button>
      </div>
    )
  }

}

export default Clock