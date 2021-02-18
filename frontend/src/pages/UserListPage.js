import React, { useEffect } from "react";

import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsersAdmin } from "../actions/userActions";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LinkContainer extends React.Component {
  render() {
    return null;
  }
}

LinkContainer.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
const UserListPage = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userListAdmin);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    console.log("delete");
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsersAdmin());
    } else {
      history.push("/login");
    }
  }, [dispatch, history]);
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className={"table-sm"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className={"fas fa-check"} style={{ color: "green" }} />
                  ) : (
                    <i className={"fas fa-times"} style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <Link to={`/user/${user._id}/edit`}>
                    <Button variant={"light"} className={"btn-sm"}>
                      <i className={"fas fa-edit"} />
                    </Button>
                  </Link>
                  <Button
                    variant={"danger"}
                    className={"btn-sm"}
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className={"fas fa-trash"} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListPage;
