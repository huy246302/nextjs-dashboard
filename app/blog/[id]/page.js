import { notFound } from 'next/navigation';
import { blogPosts, posts } from '@/app/mockdata/post';
import { SpeedInsights } from '@vercel/speed-insights/next';

export async function generateStaticParams() {
    return blogPosts.map(post => ({
        id: post.id.toString(),
    }));
}

export default function Post({ params }) {
    const { id } = params;
    const post = blogPosts.find(post => post.id.toString() === id);

    if (!post) {
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
            <img src={post.imageUrl} alt={post.title} className="rounded-lg shadow-md" />
        </div>
    );
}

