import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

export default function Todo({ props }) {
  const todo = props;
  const id = todo.id;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onDelete = () => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(function (response) {
        console.log(response);
        handleClose();
        window.location.reload();
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <Wrapper>
      <Check>
        <CheckIcon>
          <FontAwesomeIcon icon={faCheck} fontSize="1.4rem" />
        </CheckIcon>
      </Check>
      {/* src={process.env.PUBLIC_URL + "/ */}
      {/* <Image src={todo.url} /> */}
      <Image src={process.env.PUBLIC_URL + `/${todo.url}`} alt={id} />
      <Link
        to={`/edit/${id}`}
        state={{ info: todo }}
        style={{ textDecoration: "none" }}
      >
        <ContentWrapper>
          <Title>{todo.title}</Title>
          <Describe>{todo.describe}</Describe>
        </ContentWrapper>
      </Link>
      <DeleteWrapper onClick={handleOpen}>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          fontSize="1.4rem"
          color="gray"
        />
      </DeleteWrapper>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              삭제하시겠습니까?
            </Typography>
            <ConfirmBtn onClick={onDelete}>확인</ConfirmBtn>
          </Box>
        </Modal>
      </div>
      {/* </Link> */}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  height: 2.5rem;
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
  width: 20rem;
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

const DeleteWrapper = styled.div`
  padding: 0 2%;
  margin-left: 1rem;
  text-align: end;
`;

const ConfirmBtn = styled.button`
  padding: 1%;
  margin-top: 2%;
  width: 50%;
  border: 1px solid rgb(95, 111, 185);
  border-radius: 50px;
  outline: 0;
  background: transparent;
  font-weight: bold;
  color: rgb(95, 111, 185);
  &:hover {
    color: white;
    font-weight: bold;
    background: linear-gradient(0deg, rgb(233, 89, 150), rgb(95, 111, 185));
  }
`;

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};
