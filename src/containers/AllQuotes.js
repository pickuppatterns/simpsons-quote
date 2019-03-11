import { connect } from 'react-redux';
import { getQuotes, getCharacterName, getCharacterImg } from '../selectors/simpsons';
import { fetchQuotesWithPromise } from '../actions/simpsons';
import Quotes from '../components/quotes/Quotes';
  


const mapStateToProps = state => ({
  quote: getQuotes(state),
  characterName: getCharacterName(state),
  characterImg: getCharacterImg
  
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotesWithPromise());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes);

