import { connect } from 'react-redux';
import Admin from '../components/Admin';
import { setReaderNameAction, setAddressAction, setDOBAction, addReaderAction } from '../actions/admin-action';

const mapStateToProps = (state) => ({
    readerName: state.adminReducer.readerName,
    address: state.adminReducer.address,
    dob: state.adminReducer.dob
});

const mapDispatchToProps = dispatch =>({
    handleReaderName: readerName => dispatch(setReaderNameAction(readerName)),
    handleAddress: address => dispatch(setAddressAction(address)),
    handleDOB: dob => dispatch(setDOBAction(dob)),
    addReader: () => dispatch(addReaderAction())
});

export default connect(mapStateToProps,mapDispatchToProps)(Admin);