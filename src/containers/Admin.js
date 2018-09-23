import { connect } from 'react-redux';
import Admin from '../components/Admin';
import {setReaderNameAction, setAddressAction, setDOBAction, addReaderAction,
        setBookTitle, setIsbn, setAuthor, setCopies, addBookAction} from '../actions/admin-action';

const mapStateToProps = (state) => ({
    addReaderData: {
        readerName: state.adminReducer.readerName,
        address: state.adminReducer.address,
        dob: state.adminReducer.dob
    },
    addBookData: {
        title: state.adminReducer.title,
        isbn: state.adminReducer.isbn,
        author: state.adminReducer.author,
        copies: state.adminReducer.copies
    }
});

const mapDispatchToProps = dispatch =>({
    addReaderDispatch: {
        handleReaderName: readerName => dispatch(setReaderNameAction(readerName)),
        handleAddress: address => dispatch(setAddressAction(address)),
        handleDOB: dob => dispatch(setDOBAction(dob)),
        addReader: () => dispatch(addReaderAction())
    },
    addBookDispatch: {
        handleTitle: title => dispatch(setBookTitle(title)),
        handleIsbn: isbn => dispatch(setIsbn(isbn)),
        handleAuthor: author => dispatch(setAuthor(author)),
        handleCopies: copies => dispatch(setCopies(copies)),
        addBook: () => dispatch(addBookAction())
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Admin);