import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getQuotes, getCharacterName, getCharacterImg } from '../selectors/simpsons';
import { fetchQuotesWithPromise } from '../actions/simpsons';
import Quotes from '../components/quotes/Quotes';
  


class AllQuotes extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImg: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Quotes {...this.props} />
      </>
    );
  }
}
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
)(AllQuotes);

