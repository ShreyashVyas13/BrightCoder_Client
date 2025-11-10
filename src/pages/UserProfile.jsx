import { UserProfile } from "@clerk/clerk-react";

function UserProfilePage() {
  return (
    <div style={{ margin: "2rem", display: "flex", justifyContent: "center" }}>
      <UserProfile />
    </div>
  );
}

export default UserProfilePage;
