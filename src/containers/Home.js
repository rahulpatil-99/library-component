import { connect } from 'react-redux';
import Home from '../components/Home';
import { filterBookAction, setSearchTextAction } from '../actions/home-action';

const mapStateToProps = state => ({
        books: state.homeReducer.books,
        searchText:state.homeReducer.searchText
});

const mapDispatchToProps = dispatch => ({
    filterBooks: () => {
        dispatch(filterBookAction());
    },
    setSearchText: (text) => {
        dispatch(setSearchTextAction(text));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);