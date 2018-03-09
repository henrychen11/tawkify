import { connect } from 'react-redux';
import InputForm from './input_form';
import { addUser, fetchUsers } from '../actions/user_actions';

const mapStateToProps = (state) => ({    
    users: state
});

const mapDispatchToProps = (disaptch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);