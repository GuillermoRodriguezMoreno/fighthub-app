'use client';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { UseGetUsersQuery } from "../../hooks/user/UseGetUsersQuery";


const AdminPage = () => {

  const {data, error, isLoading} = UseGetUsersQuery();
  if (isLoading) return <div>Loading...</div>
  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Users</h4>
                <div className="table-responsive">
                  <table className="table table-centered table-nowrap mb-0">
                    <thead className="thead-light">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.content.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.firstname}</td>
                          <td>{user.email}</td>
                          <td>{user.dateOfBirth}</td>
                          <td>{user.createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;


