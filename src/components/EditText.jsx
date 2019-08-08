import React, {Component} from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: inline-block;
  margin: ${props => props.margin || "0"};
  pad: ${props => props.pad || "0"};
`;
const ValueDisplay = styled.span`
  color: ${props => props.color || "inherit"};
`;
const Input = styled.input`
  border: none;
  border-bottom: none;
  box-shadow:none;
  background:inherit;
  overflow: visible;
  width:100%;
  padding: inherit;
  white-space:pre-wrap; 
  font-family: inherit;
  
  &:focus {
    outline: none;
    ${
      props => props.noBottomLine ? "" : 
      `
      padding-bottom: 5px;
      border-bottom: 3px solid #f8f8f8;
      `
    }
    
  }
  font-size: inherit;
  font-weight: inherit;
  color: ${props => props.color || "inherit"};
  &::placeholder{
    color: ${props => props.placeholderColor}; 
  }
  text-opacity: 0.75;
`;

export default class EditText extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: this.props.value || undefined,
        isEditing: this.props.isEditing || false,
        placeholder: this.props.placeholder || "Click here to edit"
      };
      
      this.input = React.createRef();
      //this.keyUp = this.keyUp.bind(this);
    }
    componentDidUpdate() {
      if (this.state.isEditing == true)  this.input.current.focus();
    }
    handleClick = (e) => {
      this.setState({isEditing: !this.state.isEditing})
      if(this.state.isEditing === true) this.setState({value: e.target.value})
    };
    render() {
      let display = (this.state.value === undefined || this.state.value === '') ? this.state.placeholder : this.state.value;
      return (
        <Box>
          {
            this.state.isEditing 
            ? 
            <Input
              {...this.props}
              ref={this.input}
              onClick={this.handleClick}
              onBlur={this.handleClick}
              defaultValue={this.state.value}
              placeholder={this.state.placeholder}
              placeholderColor={this.props.placeholderColor || "rgba(245, 238, 238, 0.582)"}
              noBottomLine={this.props.noBottomLine || true}
            />
            :
            <ValueDisplay
              {...this.props}
              onClick={this.handleClick}
            >
              {display}
            </ValueDisplay>
          }
        </Box>
      );
    }
  }