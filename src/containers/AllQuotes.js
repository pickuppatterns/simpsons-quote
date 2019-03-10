import Quotes from '../components/quotes/Quotes';
import { connect } from 'react-redux';
import { getQuotes, getCharacterName, getCharacterImg } from '../selectors/simpsons';
import { fetchQuotesWithPromise } from '../actions/simpsons';
  


const mapStateToProps = state => ({
  quotes: getQuotes(state),
  name: getCharacterName(state),
  img: getCharacterImg
  
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotesWithPromise());
  }
});
const AllQuotes = Quotes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllQuotes);

