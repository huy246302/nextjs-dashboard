// app/api/blogs/[id]/route.js

import { db } from '@vercel/postgres';

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: 'Blog ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const blogId = parseInt(id, 10); // Ensure id is parsed as an integer

  if (isNaN(blogId)) {
    return new Response(JSON.stringify({ error: 'Invalid blog ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const client = await db.connect();

  try {
    const { rows } = await client.query('SELECT * FROM blogs WHERE id = $1', [blogId]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.end();
  }
}
