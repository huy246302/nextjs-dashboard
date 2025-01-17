'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from 'next/image';

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        console.log('Fetched blog posts:', data); // Log the fetched data
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="max-w-4xl mx-auto py-8 px-4 text-center">
        <SpeedInsights />
        <h1 className="text-4xl font-bold mb-8 hover:animate-bounce">
          Welcome to Sports News
        </h1>

        {/* Featured Content Section */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Featured</h2>
          {/* Featured news components */}
          {/* Example: <FeaturedNews /> */}
        </section>

        {/* Latest News Section */}
        <section className="mb-8 bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          {blogPosts.map(blog => (
            <Link key={blog.id} href={`/blog/${blog.id}`}>
              <div className="block mb-8 bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <p className="text-gray-700">{blog.content}</p>
                <div className="flex justify-between mt-4">
                  <p className="text-sm text-gray-500">{blog.author}</p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                {blog.image_url ? (
                  <div className="mt-4 relative w-full" style={{ height: '300px' }}>
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                ) : (
                  <div className="mt-4">
                    <p>No image available</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </section>

        {/* Sports Categories Section */}
        <section className="mb-8 bg-gray-300 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Sports Categories</h2>
          {/* Sports categories components */}
          {/* Example: <SportsCategories /> */}
        </section>
      </main>
    </div>
  );
}
