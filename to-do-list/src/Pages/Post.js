import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // 추가된 부분
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  const location = useLocation(); // 추가된 부분
  let postId = location.state?.id; // 추가된 부분
  const navigate = useNavigate();
  console.log("postId", postId);

  const [title, setTitle] = useState("");
  const [imgFile, setImageFile] = useState("");
  const [date, setDate] = useState();
  const [categofies, setCategofies] = useState();
  const [describe, setDescribe] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescribeChange = (e) => {
    setDescribe(e.target.value);
    console.log(title);
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:3001/todos", {
        id: postId,
        //id 중복 안되게 수정하기
        url: "images/eugenius.jpg",
        title: title,
        describe: describe,
        categories: "교양",
      })
      .then(function (response) {
        console.log(response);
        navigate("/main");
      })
      .catch(function (error) {
        alert("내용을 입력해주세요");
      });
    // .then(history.push("/"));
  };

  return (
    <Background>
      <Wrapper>
        <Header>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => navigate(-1)}
            fontSize="1.7rem"
          />
        </Header>

        <PostImg src={process.env.PUBLIC_URL + "/images/eugenius.jpg"} />
        <PostTitle
          placeholder="제목을 입력하세요"
          onChange={onTitleChange}
        ></PostTitle>
        <PostDetail>
          <StartBtn>시작 날짜</StartBtn>
          <EndBtn>종료 날짜</EndBtn>
          <Category>카테고리</Category>
        </PostDetail>
        <PostDescribe
          placeholder="내용을 입력하세요"
          onChange={onDescribeChange}
        ></PostDescribe>
        <PostBtn onClick={onSubmit}>작성완료</PostBtn>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100%;
  margin-left: -1rem;
  margin-top: -1rem;
  padding-bottom: 1rem;
  background: linear-gradient(
    0deg,
    rgba(233, 89, 150, 0.5),
    rgba(95, 111, 185, 0.5)
  );
`;

const Header = styled.div`
  height: 1rem;
  padding: 3%;
  margin: 0 auto;
  margin-bottom: 2%;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: start;
  color: rgb(95, 111, 195);
`;

const Wrapper = styled.div`
  max-width: 30rem;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding-bottom: 1rem;
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
