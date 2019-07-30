import { connect } from "react-redux"
import Appbox from "../../components/appbox/appbox"
// import { show, push_date, hidden } from "../packageaction"

// const mapStateToProps = (state) => {
//     return {
//         show: state.Date.show
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Show_Calendar: () => {
//             dispatch(show())
//         },
//         Hidden_Calendar: () => {
//             dispatch(hidden())
//         },
//         Push_Date: (date) => {
//             dispatch(push_date(date))
//         }
//     }
// }


export default connect(null, null)(Appbox)