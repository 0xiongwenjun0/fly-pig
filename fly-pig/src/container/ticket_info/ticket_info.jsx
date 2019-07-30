import {connect} from "react-redux"
import Ticket_Info from "../../components/ticket_info/ticket_info"

const mapStateToProps = (state) => {
    return {
        ticket: state.Ticket
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Push_Ticket: (ticket) => {
//             dispatch(push_ticket(ticket))
//         }
//     }
// }


export default connect(mapStateToProps, null)(Ticket_Info)