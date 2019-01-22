import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';
import User from './User';
class App extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler = () => {
        this.props.getData();
    }
    render() {
        const {username} = this.props;
        return(
            <div>
                <button onClick={this.clickHandler}>Click</button>
                <User/>
            </div>
        )
    }
}
const mapDispatchToProps = {
    getData: getData,
};
export default connect(null,mapDispatchToProps)(App);