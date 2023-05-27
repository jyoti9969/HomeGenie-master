import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';
import { Table, Button } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const UserTable = styled(Table)`
  width: 100%;
  margin-bottom: 2rem;

  th,
  td {
    padding: 0.75rem;
    vertical-align: middle !important;
    text-align: center;
  }

  th {
    background-color: #007bff;
    color: #fff;
    font-weight: 500;
  }

  td {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .action-btn {
    font-size: 1.5rem;
    cursor: pointer;
    color: #007bff;
    margin-right: 0.5rem;

    &:hover {
      color: #0056b3;
    }
  }
`;

const ActionButton = styled(Button)`
  margin-right: 0.5rem;
`;

const DeleteButton = styled(ActionButton)`
  background-color: #dc3545;
  border-color: #dc3545;
`;

const EditButton = styled(ActionButton)`
  background-color: #28a745;
  border-color: #28a745;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  height: 50vh;
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  height: 50vh;
  color: #dc3545;
`;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('/api/users/random_user');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching user data');
      }

      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError('Error deleting user');
    }
  };

  return (
    <Container>
      <Title>User Details</Title>
      {isLoading && <Loading>Loading...</Loading>}
      {error && <Error>{error}</Error>}
      {!isLoading && !error && (
        <UserTable striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <EditButton>
                <FaUserEdit className="action-btn" />
                Edit
              </EditButton>
              <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                <FaTrashAlt className="action-btn" />
                Delete
              </DeleteButton>
            </td>
          </tr>
        ))}
            
      </tbody>
      
    </UserTable>
      )
      }
      
    </Container>
      
 ) }
export default Dashboard;

