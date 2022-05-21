import React from "react";
import s from './Description.module.css';

class ProfileStatus extends React.Component {
    state = {isStatus: false}
    onSetStatus = () => {
        this.setState({isStatus: !this.state.isStatus})
    }
    render() {
        return (
            <div className={s.profile__status}>
                {this.state.isStatus ? <input type="text" value={this.props.status} onBlur={this.onSetStatus} autoFocus={true}/>
                    : <p onDoubleClick={this.onSetStatus}>{this.props.status}</p>}
            </div>
        )
    }
}

export default ProfileStatus;