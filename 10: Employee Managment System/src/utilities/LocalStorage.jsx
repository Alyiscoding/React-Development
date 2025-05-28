

const employees = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com",
        password: "123",
        taskCounts: {
            active: 4,      // "Design Login Page" and "Fix Navbar Bug"
            completed: 5,   // "Write Unit Tests"
            failed: 0,
            new: 2          // "Design Login Page"
        },
        tasks: [
            {
                title: "Design Login Page",
                description: "Create a responsive login page for the app.",
                date: "2024-06-01",
                category: "UI/UX",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix Navbar Bug",
                description: "Resolve the issue with the navbar dropdown.",
                date: "2024-06-03",
                category: "Bugfix",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Write Unit Tests",
                description: "Add unit tests for the authentication module.",
                date: "2024-06-05",
                category: "Testing",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 2,
        name: "Jamshaid",
        email: "jamshaid@gmail.com",
        password: "123",
        taskCounts: {
            active: 2,      // "Implement Logout" and "Optimize Images"
            completed: 1,   // "Update Readme"
            failed: 0,
            new: 1          // "Implement Logout"
        },
        tasks: [
            {
                title: "Update Readme",
                description: "Improve project documentation in README.md.",
                date: "2024-06-02",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Implement Logout",
                description: "Add logout functionality to the dashboard.",
                date: "2024-06-04",
                category: "Feature",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Optimize Images",
                description: "Compress and optimize images for faster loading.",
                date: "2024-06-06",
                category: "Performance",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 3,
        name: "Meerab",
        email: "meerab@gmail.com",
        password: "123",
        taskCounts: {
            active: 2,      // "Setup CI/CD" and "Add Dark Mode"
            completed: 0,
            failed: 1,      // "Refactor Codebase"
            new: 1          // "Setup CI/CD"
        },
        tasks: [
            {
                title: "Setup CI/CD",
                description: "Configure continuous integration and deployment.",
                date: "2024-06-01",
                category: "DevOps",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Refactor Codebase",
                description: "Refactor old code for better maintainability.",
                date: "2024-06-03",
                category: "Refactoring",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Add Dark Mode",
                description: "Implement dark mode toggle in settings.",
                date: "2024-06-07",
                category: "Feature",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 4,
        name: "Junaid",
        email: "junaid@gmail.com",
        password: "123",
        taskCounts: {
            active: 2,      // "Deploy to Production" and "Fix Footer Alignment"
            completed: 1,   // "Customer Feedback"
            failed: 0,
            new: 1          // "Deploy to Production"
        },
        tasks: [
            {
                title: "Customer Feedback",
                description: "Collect and analyze customer feedback.",
                date: "2024-06-02",
                category: "Research",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Deploy to Production",
                description: "Deploy the latest version to production server.",
                date: "2024-06-05",
                category: "Deployment",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix Footer Alignment",
                description: "Correct the alignment issue in the footer.",
                date: "2024-06-08",
                category: "Bugfix",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        name: "Khizar",
        email: "khizar@gmail.com",
        password: "123",
        taskCounts: {
            active: 2,      // "Integrate API" and "Resolve Merge Conflicts"
            completed: 1,   // "Update User Roles"
            failed: 0,
            new: 1          // "Integrate API"
        },
        tasks: [
            {
                title: "Integrate API",
                description: "Integrate third-party API for payments.",
                date: "2024-06-03",
                category: "Integration",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Update User Roles",
                description: "Add new user roles and permissions.",
                date: "2024-06-06",
                category: "Feature",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Resolve Merge Conflicts",
                description: "Fix merge conflicts in the main branch.",
                date: "2024-06-09",
                category: "Git",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        name: "Hiba",
        email: "hiba@gmail.com",
        password: "123",
        taskCounts: {
            active: 2,      // "Integrate API" and "Resolve Merge Conflicts"
            completed: 1,   // "Update User Roles"
            failed: 0,
            new: 1          // "Integrate API"
        },
        tasks: [
            {
                title: "Integrate API",
                description: "Integrate third-party API for payments.",
                date: "2024-06-03",
                category: "Integration",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Update User Roles",
                description: "Add new user roles and permissions.",
                date: "2024-06-06",
                category: "Feature",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Resolve Merge Conflicts",
                description: "Fix merge conflicts in the main branch.",
                date: "2024-06-09",
                category: "Git",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    }
];


const admin = [
    {
        id: 100,
        name: "Syed Ali",
        email: "admin@example.com",
        password: "123"
    }
];

// Export for use in your app
// export { employees, admin };
export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin };
};

