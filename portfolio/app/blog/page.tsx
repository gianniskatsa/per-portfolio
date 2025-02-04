"use client";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt:
        "Learn about the latest features in Next.js 14 and how to use them effectively in your projects.",
      date: "2025-02-04",
      readTime: "5 min read",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Building Modern UIs with Tailwind CSS",
      excerpt:
        "Explore advanced Tailwind CSS techniques and best practices for creating beautiful user interfaces.",
      date: "2025-02-03",
      readTime: "4 min read",
      category: "Design",
    },
    // Add more posts here
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical insights, best practices, and deep dives into modern web development,
            cloud architecture, and software engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time
                    dateTime={post.date}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to the Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay updated with the latest in web development, cloud solutions, and software engineering best practices.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
