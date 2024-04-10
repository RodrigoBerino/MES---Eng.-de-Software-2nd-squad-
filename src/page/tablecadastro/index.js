//import './App.css';
//import LoginPage from './components/login';
//import HomeApp from './page/home/homeapp';
import GlobalStyle from "../../styles/global"
import Form from "../../components/form/form";
import Grid from '../../components/grid/grid';
import styled from "styled-components";
import {useState, useEffect} from 'react';
//import { toast, ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Container = styled.div`
  width: 100wh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #fff;
  padding:32px;
  gap: 32px;
  border-radius: 6px;
`
const Title = styled.h2`
  color: #242526;
  font-weight: 600;
  width: 100wh;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
`;

function Cadastro() {
  const [users, setUsers] = useState ([]);
  const [onEdit, setOnEdit] = useState (null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers (res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error){
      <Title>Erro</Title>
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);


  return (
    //<HomeApp/>
    <>
    <Container>  
      <Title> <i className='bx bx-user icon'></i> Cadastrar novo Usuário</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
      <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
    </Container>
    <GlobalStyle/>
    </>
    //<LoginPage/>
  );
}

export default Cadastro;