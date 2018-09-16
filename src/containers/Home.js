import { connect } from 'react-redux';
import Home from '../components/Home';

const filterBookAction = text => ({
        type: "FILTER_BOOKS",
        searchText:text
});

const mapStateToProps = state => ({
        books: state.homeReducer.books,
        searchText:state.homeReducer.searchText
});

const mapDispatchToProps = dispatch => ({
    filterBooks: (text) => {
        dispatch(filterBookAction(text));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);