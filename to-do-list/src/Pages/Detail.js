import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <Background>
      <Wrapper>
        <Header>뒤로가기 버튼</Header>
        <PostImg src="images/js.png" />
        <PostTitle placeholder="제목을 입력하세요"></PostTitle>
        <PostDetail>
          <StartBtn>시작 날짜</StartBtn>
          <EndBtn>종료 날짜</EndBtn>
          <Category>카테고리</Category>
        </PostDetail>
        <PostDescribe></PostDescribe>
        <PostBtn>작성완료</PostBtn>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(233, 89, 150, 0.5),
    rgba(95, 111, 185, 0.5)
  );
`;

const Header = styled.div`
  height: 2rem;
  padding: 2%;
  margin: 0 auto;
  margin-bottom: 2%;
  border: 1px solid red;
`;

const Wrapper = styled.div`
  width: 40rem;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

const PostImg = styled.img`
  width: 80%;
`;

const PostTitle = styled.input`
  width: 80%;
  height: 4rem;
  margin-top: 1rem;
`;

const PostDetail = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
`;

const StartBtn = styled.div`
  width: 19%;
  padding: 2%;
  border: 1px solid rgb(95, 111, 185);
  border-radius: 50px;
  font-weight: bold;
  color: rgb(95, 111, 185);
`;

const EndBtn = styled.div`
  width: 19%;
  padding: 2%;
  border-radius: 50px;
  font-weight: bold;
  border: 1px solid rgb(95, 111, 185);
`;

const Category = styled.div`
  width: 45%;
  padding: 2%;
  border: 0;
  border-radius: 50px;
  border: 1px solid rgb(95, 111, 185);
  font-weight: bold;
`;

const PostDescribe = styled.input`
  width: 80%;
  height: 8rem;
  margin-top: 1rem;
`;

const PostBtn = styled.div`
  width: 90%;
  padding: 3%;
  margin: 1rem auto;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(233, 89, 150, 0.8),
    rgba(95, 111, 185, 0.8)
  );
`;
