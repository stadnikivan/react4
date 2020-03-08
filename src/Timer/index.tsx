import React from 'react';

interface State {
  time: number,
  start: number,
}

export default class Timer extends React.Component<{}, State>  {
  timer: any

    constructor(props: never) {
        super(props);
        this.state = {
            time: 0,
            start: Date.now()
        }
        console.log("constructor")
    }

    componentDidMount() { 
        console.log("Запуск метода монтирования")
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }

    
    shouldComponentUpdate(props:{}, nextState: State) {
        console.log("Метод shouldComponentUpdat вызывается перед рендером")
        return nextState !== this.state;
    }
        
    
    componentDidUpdate(props:{}, prevState: State) {
        console.log("Метод componentDidUpdate вызывается при обновлении")
    }
      
    componentWillUnmount() {
        console.log("Запуск метода размонтирования(очистка)")
        clearInterval(this.timer);
    }

    getTime() {
        const startTime = new Date(this.state.time)
        const date = startTime
        date.setHours(date.getHours() - 3)
        return date.toLocaleTimeString()
    }
    render() {
        return (
            <div>
                <p>{this.getTime()}</p>
            </div>
        )    
    }
}
