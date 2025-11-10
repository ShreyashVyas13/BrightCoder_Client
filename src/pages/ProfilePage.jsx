import { UserProfile } from "@clerk/clerk-react";
import Progress from "./Progress";

function ProfilePage() {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <UserProfile />
    </div>
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <Progress />
    </div>
    </>
  );
}

export default ProfilePage;
