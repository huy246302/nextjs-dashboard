import Link from 'next/link';

export default function Home() {
    return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <main className="max-w-4xl mx-auto py-8 px-4 text-center">
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
                    {/* Latest news components */}
                    {/* Example: <LatestNews /> */}
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
