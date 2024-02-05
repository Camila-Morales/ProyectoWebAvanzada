import useAuth from "../hooks/useAuth";

function Profile() {
  const { user, logout } = useAuth();
  const closeSession = () => {
    logout();
  };
  return (
    <div className="flex justify-end gap-5 m-2 items-center">
      <h1>Este es el perfil de {user.userName}</h1>
      <button
        onClick={closeSession}
        className="bg-red-700 text-white w-24 h-10 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
