import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom"; // 추가된 부분
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Edit() {
  const navigate = useNavigate();
  const location = useLocation(); // 추가된 부분
  let info = location.state?.info; // 추가된 부분
  let { id } = useParams();

  const [title, setTitle] = useState(info.title);
  const [imgFile, setImageFile] = useState(info.url);
  const [date, setDate] = useState();
  const [categofies, setCategofies] = useState();
  const [describe, setDescribe] = useState(info.describe);

  const onUpdate = () => {
    axios
      .put(`http://localhost:3001/todos/${id}`, {
        id: id,
        url: imgFile,
        title: title,
        describe: describe,
        categories: "교양",
      })
      .then(function (response) {
        console.log(response);
        navigate("/main");
      })
      .catch(function (error) {
        console.log({
          id: id,
          url: imgFile,
          title: title,
          describe: describe,
          categories: "교양",
        });
        alert("내용을 입력해주세요");
      });
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescribeChange = (e) => {
    setDescribe(e.target.value);
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
        <PostImg src={imgFile} />
        <PostTitle
          value={title}
          placeholder="제목을 입력하세요"
          onChange={onTitleChange}
        ></PostTitle>
        <PostDetail>
          <StartBtn>시작 날짜</StartBtn>
          <EndBtn>종료 날짜</EndBtn>
          <Category>카테고리</Category>
        </PostDetail>
        <PostDescribe
          value={describe}
          placeholder="내용을 입력하세요"
          onChange={onDescribeChange}
        ></PostDescribe>
        <PostBtn onClick={onUpdate}>수정완료</PostBtn>
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
  height: 1rem;
  padding: 3%;
  margin: 0 auto;
  margin-bottom: 2%;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: start;
  color: rgb(95, 111, 195);
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
