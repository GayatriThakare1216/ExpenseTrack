import { create } from "zustand";

const getUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const useAuthStore = create((set, get) => ({
  user:
    JSON.parse(localStorage.getItem("currentUser")) || null,

  isAuthenticated:
    !!localStorage.getItem("currentUser"),

  // ===========================
  // Register
  // ===========================

  registerUser: (newUser) => {
    const users = getUsers();

    const alreadyExists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        newUser.email.toLowerCase()
    );

    if (alreadyExists) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const updatedUsers = [...users, newUser];

    saveUsers(updatedUsers);

    return {
      success: true,
      message: "Account created",
    };
  },

  // ===========================
  // Login
  // ===========================

  login: (
    email,
    password,
    remember = false
  ) => {
    const users = getUsers();

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {
      return false;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(foundUser)
    );

    if (remember) {
      localStorage.setItem(
        "rememberMe",
        "true"
      );
    } else {
      localStorage.removeItem(
        "rememberMe"
      );
    }

    set({
      user: foundUser,
      isAuthenticated: true,
    });

    return true;
  },

  // ===========================
  // Logout
  // ===========================

  logout: () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("rememberMe");

    set({
      user: null,
      isAuthenticated: false,
    });
  },

  // ===========================
  // Update Profile
  // ===========================

  updateProfile: (updatedData) => {
    const users = getUsers();

    const currentUser = get().user;

    if (!currentUser) return;

    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            ...updatedData,
          }
        : user
    );

    saveUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedCurrentUser)
    );

    set({
      user: updatedCurrentUser,
    });
  },

  // ===========================
  // Clear All Auth Data
  // ===========================

  clearAllUsers: () => {
    localStorage.removeItem("users");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("rememberMe");

    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;