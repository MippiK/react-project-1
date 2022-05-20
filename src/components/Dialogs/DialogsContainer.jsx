import Dialogs from "./Dialogs";
import {addMessage, updateMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import withRedirect from "../assets/withRedirect/withRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

export default compose(withRedirect,
    connect(mapStateToProps, {addMessage, updateMessageText}))(Dialogs);