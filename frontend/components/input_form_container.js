import { connect } from "react-redux";
import InputForm from "./input_form";
import { updatePage } from "../actions/page_actions";

const mapDispatchToProps = dispatch => ({
  updatePage: (page) => dispatch(updatePage(page))
});

export default connect(null, mapDispatchToProps)(InputForm);