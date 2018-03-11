import { connect } from "react-redux";
import Photo from "./photo";
import { updatePage } from "../actions/page_actions";

const mapDispatchToProps = dispatch => ({
  updatePage: (page) => dispatch(updatePage(page))
});

export default connect(null, mapDispatchToProps)(Photo);