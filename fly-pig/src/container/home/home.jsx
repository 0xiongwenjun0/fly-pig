import { connect } from "react-redux"
import Home from "../../components/home/home"
import { login_in } from "../packageaction"

const mapStateToProps = (state) => {
    return {
        sign: state.Sign
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         sign_in: (username) => {
//             dispatch(login_in(username))
//         }
//     }
// }


export default connect(mapStateToProps, null)(Home)