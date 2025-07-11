// Simple client-side database simulation using localStorage
// In production, this would be replaced with actual API calls to your backend

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  authProvider: "email" | "google" | "github";
  profileCompleted: boolean;
  selectedCourse?: string;
  createdAt: string;
  lastLogin: string;
}

export interface Course {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: "coding" | "design" | "video";
  description: string;
}

const DB_KEYS = {
  USERS: "codemaster_users",
  CURRENT_USER: "codemaster_current_user",
  COURSES: "codemaster_courses",
};

// Initialize courses data
const initializeCourses = () => {
  const courses: Course[] = [
    {
      id: "code-intermediate",
      name: "Coding (Beginner to Intermediate)",
      price: "₦60,000",
      duration: "4-6 months",
      category: "coding",
      description: "HTML, CSS, JavaScript, React basics",
    },
    {
      id: "code-advanced",
      name: "Coding (Beginner to Advanced)",
      price: "₦80,000",
      duration: "6-8 months",
      category: "coding",
      description: "Full-stack development, Node.js, Databases",
    },
    {
      id: "adobe-intermediate",
      name: "Adobe After Effects (Beginner to Intermediate)",
      price: "₦60,000",
      duration: "3-5 months",
      category: "design",
      description: "Motion graphics, basic animations",
    },
    {
      id: "adobe-advanced",
      name: "Adobe After Effects (Beginner to Advanced)",
      price: "₦80,000",
      duration: "5-7 months",
      category: "design",
      description: "Advanced VFX, complex animations, professional workflows",
    },
    {
      id: "capcut-intermediate",
      name: "CapCut (Beginner to Intermediate)",
      price: "₦30,000",
      duration: "2-3 months",
      category: "video",
      description: "Mobile video editing, effects, social media content",
    },
    {
      id: "capcut-advanced",
      name: "CapCut (Beginner to Advanced)",
      price: "₦60,000",
      duration: "3-5 months",
      category: "video",
      description: "Advanced editing, professional content creation",
    },
  ];

  if (!localStorage.getItem(DB_KEYS.COURSES)) {
    localStorage.setItem(DB_KEYS.COURSES, JSON.stringify(courses));
  }
};

// Initialize database
export const initializeDatabase = () => {
  initializeCourses();

  if (!localStorage.getItem(DB_KEYS.USERS)) {
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify([]));
  }
};

// User operations
export const getAllUsers = (): User[] => {
  const users = localStorage.getItem(DB_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const getUserByEmail = (email: string): User | null => {
  const users = getAllUsers();
  return users.find((user) => user.email === email) || null;
};

export const getUserById = (id: string): User | null => {
  const users = getAllUsers();
  return users.find((user) => user.id === id) || null;
};

export const createUser = (
  userData: Omit<User, "id" | "createdAt" | "lastLogin">,
): User => {
  const users = getAllUsers();

  // Check if user already exists
  const existingUser = getUserByEmail(userData.email);
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const newUser: User = {
    ...userData,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));

  return newUser;
};

export const updateUser = (
  userId: string,
  updates: Partial<User>,
): User | null => {
  const users = getAllUsers();
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...updates };
  localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));

  return users[userIndex];
};

export const updateLastLogin = (userId: string): void => {
  updateUser(userId, { lastLogin: new Date().toISOString() });
};

// Current user session
export const getCurrentUser = (): User | null => {
  const currentUser = localStorage.getItem(DB_KEYS.CURRENT_USER);
  return currentUser ? JSON.parse(currentUser) : null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify(user));
  updateLastLogin(user.id);
};

export const clearCurrentUser = (): void => {
  localStorage.removeItem(DB_KEYS.CURRENT_USER);
};

// Course operations
export const getAllCourses = (): Course[] => {
  const courses = localStorage.getItem(DB_KEYS.COURSES);
  return courses ? JSON.parse(courses) : [];
};

export const getCourseById = (id: string): Course | null => {
  const courses = getAllCourses();
  return courses.find((course) => course.id === id) || null;
};

// User course selection
export const selectCourse = (userId: string, courseId: string): boolean => {
  const course = getCourseById(courseId);
  if (!course) {
    return false;
  }

  const updatedUser = updateUser(userId, {
    selectedCourse: courseId,
    profileCompleted: true,
  });

  if (updatedUser) {
    setCurrentUser(updatedUser);
    return true;
  }

  return false;
};

// Simulate OAuth user creation
export const createOAuthUser = (
  provider: "google" | "github",
  oauthData: any,
): User => {
  const userData = {
    email: oauthData.email || `${provider}user@example.com`,
    firstName: oauthData.given_name || oauthData.name?.split(" ")[0] || "User",
    lastName: oauthData.family_name || oauthData.name?.split(" ")[1] || "Name",
    authProvider: provider,
    profileCompleted: false,
  };

  return createUser(userData);
};

// Authentication helpers
export const authenticateUser = (
  email: string,
  password: string,
): User | null => {
  // In production, this would verify password hash
  const user = getUserByEmail(email);
  if (user && user.authProvider === "email") {
    updateLastLogin(user.id);
    return user;
  }
  return null;
};

// Initialize database on import
initializeDatabase();
