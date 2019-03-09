import Quotes from '../components/facts/Facts';
import { connect } from 'react-redux';
import { getQuotes } from '../selectors/simpsons';
import { fetchQuotesWithPromise } from '../actions/simpsons';
import { withFetch } from '../components/withFetch';


const mapStateToProps = state => ({
  quotes: getQuotes(state),
  
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotesWithPromise(10));
  }
});
const AllQuotes = withFetch(Quotes);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllQuotes);

