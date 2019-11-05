import React from 'react';
import ShowResponse from './ShowResponse';
import ButtonMarkup from './ButtonMarkup';

class Error extends React.Component {

    state = {
        showErrorMsg:true,
        showCacheResponse:false,
        showRetryButton:true
    }

    retryRequest = () => {
        this.setState({
            showErrorMsg:false,
            showCacheResponse:true,
            showRetryButton:false
        })
        console.log('retry!');
    }

    render() {
        const {cacheResponse} = this.props;
        return (
        <div>
            {this.state.showCacheResponse && <ShowResponse response={cacheResponse} />} 
            {this.state.showErrorMsg && <h1>Request is failed!!</h1>}         
            <div className="ButtonWrapper" onClick={this.retryRequest}>
               {this.state.showRetryButton && <ButtonMarkup name="Повторить  запрос" />}
            </div>
        </div>
        );
    }
}

export default Error;
