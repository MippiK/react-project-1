import React from "react";
import s from './Description.module.css';


class ProfileStatus extends React.Component {
    state = {isStatus: false, status: this.props.status}
    onSetStatus = () => {
        this.setState({isStatus: !this.state.isStatus})
    }
    onStatusChange = (text) => {
        this.setState({status: text})
    }

    render() {
        return (
            <div className={s.profile__status}>
                {this.state.isStatus ? <input type="text" value={this.state.status}
                                              onBlur={this.onSetStatus}
                                              autoFocus={true}
                                              onChange={e => this.onStatusChange(e.currentTarget.value)}
                                              onDoubleClick={() => this.props.changeStatusTC(this.state.status)}/>
                    : <p onDoubleClick={this.onSetStatus}>{this.props.status}</p>}
            </div>
        )
    }
}

export default ProfileStatus;