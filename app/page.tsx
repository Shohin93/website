import ThemeToggle from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Temporary theme toggle - will move to Navigation later */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <header>{/* Navigation component will go here */}</header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Your Title / Role
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Brief intro about yourself
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              About section content goes here...
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Skills section content goes here...
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Projects section content goes here...
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>Footer content goes here...</p>
        </div>
      </footer>
    </div>
  );
}
