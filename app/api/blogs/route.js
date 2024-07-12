import { db } from '@vercel/postgres';

export async function GET(req) {
  const client = await db.connect();

  try {
    const { rows } = await client.sql`SELECT * FROM blogs`;
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.end();
  }
}
