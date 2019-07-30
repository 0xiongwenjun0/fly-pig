import {connect} from "react-redux"
import Ticket from "../../components/ticket/ticket"
import {push_ticket} from "../packageaction"

// const mapStateToProps = (state) => {
//     return {
//         sign: state.
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        Push_Ticket: (ticket) => {
            dispatch(push_ticket(ticket))
        }
    }
}


export default connect(null, mapDispatchToProps)(Ticket)