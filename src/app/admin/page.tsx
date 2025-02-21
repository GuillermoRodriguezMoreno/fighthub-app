'use client';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { UseGetUsersQuery } from "../../hooks/user/UseGetUsersQuery";
import { UseGetUserQuery } from "@/hooks/user/UserGetUserQuery";
import { UseGetStylesQuery } from "@/hooks/style/UseGetStylesQuery";
import { UseGetStyleQuery } from "@/hooks/style/UseGetStyleQuery";


const AdminPage = () => {

  const {data, error, isLoading} = UseGetStyleQuery(1);
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
      <div>
          <div key={data.id}>{data.name}</div>
      </div>
    </>
  );
};

export default AdminPage;


