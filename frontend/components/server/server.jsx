import React from "react";

import ServerIndexContainer from "../shared/server_index/server_index_container"
import GroupIndexContainer from "../shared/group_index/group_index_container"
import MessageIndex from "../shared/message_index/message_index"
import UserIndex from "../shared/user_index/user_index"

class Server extends React.Component {
    render() {
        return (
            <div className="server-container">
                <ServerIndexContainer servers={this.props.servers}/>
                <GroupIndexContainer
                    server={this.props.servers.find(obj => obj.id == this.props.match.params.serverId)}
                    currentUser={this.props.currentUser} 
                    logout={this.props.logout}
                />
                <MessageIndex />
                <UserIndex 
                    server={this.props.servers.find(obj => obj.id == this.props.match.params.serverId)}
                    users={this.props.users}
                />
            </div>
        )
    }
}

export default Server