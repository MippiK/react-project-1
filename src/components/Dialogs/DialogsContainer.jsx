import Dialogs from "./Dialogs";
import {addMessage, updateMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import withRedirect from "../assets/withRedirect/withRedirect";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

const DialogsContainer = connect(mapStateToProps,
    {addMessage, updateMessageText})(withRedirect(Dialogs));

export default DialogsContainer;