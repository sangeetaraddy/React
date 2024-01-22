import React from 'react';

class Lifecycle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instrument: "Guitar"
        }
    }
    /*static getDerivedStateFromProps(props){
       return {instrument:props.temp} 
    }*/

    /*shouldComponentUpdate() {
        return false;
    }*/

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Before update : '+prevState.instrument)
        return null;
    }

    componentDidUpdate(){
        console.log(' Updated value: '+this.state.instrument)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ instrument: "Drums" });
        }, 5000);
    }
    render() {
        return (
            <div>
                <h1>I know to play the {this.state.instrument}</h1>
            </div>
        );
    }
}

export default Lifecycle1;