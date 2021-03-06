import React from "react"

class GroupIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
        this.toggleInviteDropDown = this.toggleInviteDropDown.bind(this)
        this.handleDeleteServer = this.handleDeleteServer.bind(this)
    }

    toggleInviteDropDown(e) {
        if(this.props.server != undefined) {
            if (!this.state.dropdown) {
                this.props.setCurrentInvite(this.props.server.invite)
            }
    
            this.setState({dropdown: !this.state.dropdown})
        }
    }

    handleDeleteServer (e) {
        this.props.deleteServer(this.props.server)
    }

    render() {
        let dropdown;
        if(this.state.dropdown) {
            dropdown = (
                <div className="dropdown">
                    <ul>
                        <li className="invite-li" onClick={this.props.openInvite}>
                            <h2>Invite People</h2>
                            <i className="fas fa-user-plus"></i>
                        </li>

                        <li>
                            <h2>Add Channel</h2>
                            <i className="fas fa-plus"></i>
                        </li>

                        <li className="delete-li" onClick={this.handleDeleteServer}>
                            <h2>Delete Server</h2>
                            <i className="fas fa-trash"></i>
                        </li>
                    </ul>
                </div>
            )
        } else {
            dropdown = null;
        }

        let serverInfo;
        if (this.props.server != undefined) {
            serverInfo = (
                <>  
                    <div className="server-name">
                        <h2>{this.props.server.name}</h2>
                        {this.state.dropdown ? (
                            <i className="fas fa-chevron-up"></i>
                        ) : (
                            <i className="fas fa-chevron-down"></i>
                        )}
                    </div>
                    {dropdown}
                </>
            )
        } else {
            serverInfo = null
        }
        return (
            <div className="group-index">
                <div className="server-info" onClick={this.toggleInviteDropDown}>
                    {serverInfo}
                </div>
                <div></div>
                <div className="user-box">
                    <div className="user-info">
                        <div className="user-pfp"></div>
                        <h3>{this.props.currentUser.username}</h3>
                    </div>
                    <div className="user-options">
                        <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
                        {/* <i className="fas fa-cog"></i> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupIndex;