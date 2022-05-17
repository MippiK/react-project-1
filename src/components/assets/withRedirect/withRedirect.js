import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

function withRedirect(Component) {

    function ComponentWithRedirect(props) {
        if (!props.isAuth) return <Navigate to='/login' />
        return (
            <Component {...props}/>
        )
    }
    return connect(mapStateToProps, {})(ComponentWithRedirect);
}

export default withRedirect;