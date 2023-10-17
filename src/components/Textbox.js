import React from 'react';
import styled from 'styled-components';

const StyledTextBox = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 45px;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
`;

const Icon = styled.span`
  margin-right: 10px;
  color: white;
  padding: 13px 0px 12px 12px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  &::placeholder {
    color: white;
    opacity: 0.7;
    font-family: 'Montserrat', sans-serif;
  }
`;

const TextBox = ({ icon, ...props }) => (
  <StyledTextBox>
    {icon && <Icon>{icon}</Icon>}
    <Input required {...props} />
  </StyledTextBox>
);

export default TextBox;
