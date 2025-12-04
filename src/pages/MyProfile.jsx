import React, { useContext, useRef, useState } from "react";
import { AuthContext, auth } from "../provider/AuthProvider";
import { updateEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { FaUserEdit, FaCheck, FaEnvelope, FaUser, FaImage } from "react-icons/fa";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const photoRef = useRef();
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const currentUser = auth.currentUser;
    if (!currentUser) return toast.error("User not found!");

    const newName = nameRef.current.value.trim();
    const newEmail = emailRef.current.value.trim();
    const newPhoto = photoRef.current.value.trim();

    try {
      // Update name and photo
      await updateUser({
        displayName: newName || currentUser.displayName,
        photoURL: newPhoto || currentUser.photoURL,
      });

      // Update email only if changed
      if (newEmail && newEmail !== currentUser.email) {
        await updateEmail(currentUser, newEmail);
      }

      setUser({
        ...currentUser,
        displayName: newName || currentUser.displayName,
        photoURL: newPhoto || currentUser.photoURL,
        email: newEmail || currentUser.email,
      });

      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/requires-recent-login") {
        toast.error("Please login again to update your profile.");
      } else {
        toast.error("Update failed: " + err.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-start py-10 bg-gray-900 min-h-screen">
      <title>My Profile | GreenNest</title>

      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6">
        {/* Left Card: User info */}
        <div className="lg:w-1/3 p-8 flex flex-col items-center gap-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
          <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-600 bg-white shadow-inner">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FaUser className="w-16 h-16 text-gray-400" />
            )}
          </div>

          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-100">
            <FaUser /> {user?.displayName || "Your Name"}
          </h2>
          <p className="flex items-center gap-2 text-gray-300">
            <FaEnvelope /> {user?.email || "Your Email"}
          </p>

          {!editMode && (
            <button
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 text-white font-semibold mt-4"
              onClick={() => setEditMode(true)}
            >
              Edit Profile <FaUserEdit />
            </button>
          )}
        </div>

        {/* Right Card: Edit form */}
        {editMode && (
          <div className="flex-1 p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-100">Edit Profile</h2>
              <button
                className="text-gray-400 hover:text-gray-100"
                onClick={() => setEditMode(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="flex items-center gap-2 mb-1 text-gray-200">
                    <FaUser /> Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName || ""}
                    ref={nameRef}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="flex items-center gap-2 mb-1 text-gray-200">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email || ""}
                    ref={emailRef}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Photo URL */}
                <div className="flex flex-col lg:col-span-2">
                  <label className="flex items-center gap-2 mb-1 text-gray-200">
                    <FaImage /> Photo URL
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.photoURL || ""}
                    ref={photoRef}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 px-4 py-3"
              >
                <FaCheck /> Update Profile
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
