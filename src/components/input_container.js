import { connect } from 'react-redux';
import InputForm from './input_form';

const mapStateToProps = (state) => ({    
    users: state
});

const mapDispatchToProps = (disaptch) => ({
    addUser: (user) => dispatch(addUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);