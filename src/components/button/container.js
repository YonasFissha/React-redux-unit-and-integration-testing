import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
}
export default (Component) => connect(null, mapDispatchToProps)(Component);
