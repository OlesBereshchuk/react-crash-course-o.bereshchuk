import React from 'react';

export const ButtonFontStyle = React.createContext('bold');

export function withButtonFontStyle (Component) {
    return class ButtonWrapper extends React.Component{
        render() {
            return (
                <ButtonFontStyle.Consumer>
                    {(value) => (        
                        // <button onClick={props.func} style={{fontWeight: value}}>{props.name}</button>
                        <Component {...this.props} fontWeight={value} />
                    )}
                </ButtonFontStyle.Consumer>
            )
        }
    }
}