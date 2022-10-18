import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Todo from "../Components/Todo";

export default function Main() {
  return (
    <Wrapper>
      <UserWrapper>
        <UserImgWrapper>
          <UserImg src="images/eugenius.jpg" alt="eugenius"></UserImg>
        </UserImgWrapper>
        Eugenius1st
        <BtnWrapper>
          <FilterBtn>전체보기</FilterBtn>
          <FollowerBtn>❤️199,808</FollowerBtn>
        </BtnWrapper>
      </UserWrapper>
      <Todos>
        <Link to="/detail" style={{ textDecoration: "none" }}>
          <Todo props={"images/CSS.png"} />
        </Link>
        <Todo props={"images/git.png"} />
        <Todo props={"images/js.png"} />
        <Todo props={"images/react.png"} />
        <Todo props={"images/CSS.png"} />
        <Todo props={"images/git.png"} />
        <Todo props={"images/js.png"} />
        <Todo props={"images/react.png"} />
      </Todos>
      <Link to="/post" style={{ textDecoration: "none" }}>
        <CreateBtn>Creat New Todo</CreateBtn>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

const UserWrapper = styled.div`
  max-width: 15rem;
  height: 15rem;
  margin: 0 auto;
  margin-top: 2%;
`;

const UserImgWrapper = styled.div`
  width: 80%;
  padding-top: 80%;
  margin: auto auto;
  border-radius: 50%;
  background: linear-gradient(0deg, rgb(233, 89, 150), rgb(95, 111, 185));
  position: relative;
`;

const UserImg = styled.img`
  width: 95%;
  top: 3.2%;
  left: 2.5%;
  border-radius: 50%;
  position: absolute;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FilterBtn = styled.button`
  border: 1px solid red;
  width: 45%;
  height: 100%;
  border: 1px solid rgb(95, 111, 185);
  border-radius: 50px;
  outline: 0;
  background: transparent;
  font-weight: bold;
  color: rgb(95, 111, 185);
`;

const FollowerBtn = styled.button`
  width: 45%;
  height: 100%;
  border: 0;
  border-radius: 50px;
  outline: 0;
  background: transparent;
  font-weight: bold;
  color: white;
  background: rgba(190, 125, 200, 0.8);
`;

const Todos = styled.div`
  max-width: 30rem;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const CreateBtn = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 2%;
  width: 30rem;
  padding: 0.5rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(233, 89, 150, 0.8),
    rgba(95, 111, 185, 0.8)
  );
  text-align: center;
`;

//background: linear-gradient(35deg, rgb(233, 89, 150), rgb(95, 111, 185));
