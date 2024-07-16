import { notFound } from 'next/navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Image from 'next/image';

export async function generateStaticParams() {
    // Fetch blog IDs from your database or API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    const blogPosts = await res.json();

    return blogPosts.map(post => ({
        id: post.id.toString(),
    }));
}

export default async function Post({ params }) {
    const { id } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`);
    const post = await res.json();

    if (!post || post.error) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <SpeedInsights />
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex justify-between mb-4">
                <p className="text-sm text-gray-500">{post.author}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            <div>
            <Image fill={true} src={post.imageUrl} alt={post.title} className="rounded-lg shadow-md" />
            </div>
        </div>
    );
}
