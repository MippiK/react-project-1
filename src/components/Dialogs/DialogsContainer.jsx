import Dialogs from "./Dialogs";
import {addMessage, updateMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const DialogsContainer = connect(mapStateToProps,
    {addMessage, updateMessageText})(Dialogs);

export default DialogsContainer;