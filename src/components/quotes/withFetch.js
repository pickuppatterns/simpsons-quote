import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PunishmentLoader from '../../asset/Punishment_loader.png';;

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { isLoading } = this.props;
      return (
        <>
        <div className='loadingScreen'>
          {isLoading ?
            <img src="PunishmentLoader"></img> : <Component {...this.props} />}
        </div>
        </>
      );
    }
  }

  return WithFetch;
};
