import { connect } from "react-redux";
import Status from "./status";
import { updatePage } from "../actions/page_actions";

const mapStateToProps = (state) => ({
    page: state.page.page
})

const mapDispatchToProps = dispatch => ({
  updatePage: (page) => dispatch(updatePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);