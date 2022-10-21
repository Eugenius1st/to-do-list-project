import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>
          <CheckIcon>
            <FontAwesomeIcon icon={faCheck} fontSize="10rem" />
          </CheckIcon>
        </Logo>
        <Title>Eugenius Todo</Title>
      </LogoWrapper>

      <BtnWrapper>
        <Link to="/main" style={{ textDecoration: 'none' }}>
          <Btn>Login</Btn>
        </Link>
        <Btn>Join</Btn>
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 10% auto;
`;

const LogoWrapper = styled.div`
  max-width: 18rem;
  height: 18rem;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 80%;
  padding-top: 80%;
  margin: auto auto;
  border-radius: 50%;
  background: linear-gradient(0deg, rgb(233, 89, 150), rgb(95, 111, 185));
  position: relative;
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 17%;
  left: 17%;
  color: white;
`;

const Title = styled.div`
  margin-top: 10%;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: rgba(190, 125, 200, 0.9);
`;

const BtnWrapper = styled.div`
  max-width: 18rem;
  margin: 0 auto;
  margin-top: 5%;
`;

const Btn = styled.div`
  border: 1px solid rgb(95, 111, 185);
  padding: 5%;
  margin-bottom: 7%;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgb(95, 111, 185);

  &:hover {
    background: linear-gradient(35deg, rgb(233, 89, 150), rgb(95, 111, 185));
    opacity: 0.75;
    color: white;
  }
`;
