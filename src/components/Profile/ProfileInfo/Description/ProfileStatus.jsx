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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={s.profile__status}>
                {this.state.isStatus ? <input type="text" value={this.state.status}
                                              onBlur={() => {
                                                  this.props.changeStatusTC(this.state.status)
                                                  this.onSetStatus()
                                              }}
                                              autoFocus={true}
                                              onChange={e => this.onStatusChange(e.currentTarget.value)}
                                              />
                    : <p onDoubleClick={this.onSetStatus}>{this.props.status}</p>}
            </div>
        )
    }
}

export default ProfileStatus;