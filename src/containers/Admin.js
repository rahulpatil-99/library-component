import { connect } from 'react-redux';
import Admin from '../components/Admin';
import {setReaderNameAction, setLastNameAction, setDOBAction, addReaderAction,
        setBookTitle, setIsbn, setAuthor, setCopies, addBookAction} from '../actions/admin-action';
import {createReader} from '../actions/backend-actions';

const mapStateToProps = (state) => ({
    addReaderData: {
        readerName: state.adminReducer.readerName,
        lastName: state.adminReducer.lastName,
        dob: state.adminReducer.dob,
        readerAddMsg: state.adminReducer.readerAddMsg
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
        handleLastName: lastName => dispatch(setLastNameAction(lastName)),
        handleDOB: dob => dispatch(setDOBAction(dob)),
        addReader: reader =>{
            dispatch(addReaderAction());
            createReader(dispatch,reader);
        }
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