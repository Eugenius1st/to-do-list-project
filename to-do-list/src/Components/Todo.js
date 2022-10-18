import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Todo({ props }) {
  const imgs = props;
  console.log(imgs);
  return (
    <Wrapper>
      <Check>
        <CheckIcon>
          <FontAwesomeIcon icon={faCheck} fontSize="1.4rem" />
        </CheckIcon>
      </Check>

      <Image src={imgs} />
      <ContentWrapper>
        <Title>Https 공부하기</Title>
        <Describe>Http와 Https 차이점 공부하기</Describe>
      </ContentWrapper>
      <Link to="/edit" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          fontSize="1.4rem"
          color="gray"
        />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  height: 3.5rem;
  border: 1px solid rgba(95, 111, 185, 0.6);
  margin-bottom: 2%;
  padding: 1% 1%;
`;

const Check = styled.image`
  position: relative;
  border-radius: 50%;
  border: 1px solid rgba(95, 111, 185, 0.6);
  color: white;
  width: 2rem;
  height: 2rem;
  &:hover {
    background: linear-gradient(35deg, rgb(233, 89, 150), rgb(95, 111, 185));
    opacity: 0.75;
    color: white;
  }
  margin-right: 0.5%;
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 12%;
  left: 10%;
  /* color: white; */
`;

const Image = styled.img`
  width: 3.5rem;
  margin-left: 1%;
  margin-right: 1%;
  opacity: 0.75;
`;

const ContentWrapper = styled.div`
  margin-left: 2%;
  padding-left: 1%;
  width: 77%;
`;

const Title = styled.div`
  color: rgb(95, 111, 225);
  font-size: 0.9rem;
  font-weight: bold;
`;

const Describe = styled.div`
  font-size: 0.2rem;
  color: gray;
`;
