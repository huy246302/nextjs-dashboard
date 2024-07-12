// import { db } from '@vercel/postgres';
// import bcrypt from 'bcrypt';

// const client = await db.connect();

// async function seedAuthors() {
//   try {
//     await client.query('BEGIN');

//     // Seed authors table
//     await client.query(`
//       INSERT INTO authors (name, bio, email, profile_picture_url)
//       VALUES
//         ('John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'john.doe@example.com', 'https://via.placeholder.com/150'),
//         ('Jane Smith', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'jane.smith@example.com', 'https://via.placeholder.com/150');
//     `);

//     await client.query('COMMIT');
//     console.log('Authors seeded successfully');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.error('Error seeding authors:', error);
//   }
// }

// async function seedCategories() {
//   try {
//     await client.query('BEGIN');

//     // Seed categories table
//     await client.query(`
//       INSERT INTO categories (name)
//       VALUES
//         ('Sports'),
//         ('Technology'),
//         ('Health');
//     `);

//     await client.query('COMMIT');
//     console.log('Categories seeded successfully');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.error('Error seeding categories:', error);
//   }
// }

// async function seedSubcategories() {
//   try {
//     await client.query('BEGIN');

//     // Seed subcategories table
//     await client.query(`
//       INSERT INTO subcategories (name, category_id)
//       VALUES
//         ('Football', 1),
//         ('Basketball', 1),
//         ('Mobile Apps', 2),
//         ('Web Development', 2),
//         ('Fitness', 3),
//         ('Nutrition', 3);
//     `);

//     await client.query('COMMIT');
//     console.log('Subcategories seeded successfully');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.error('Error seeding subcategories:', error);
//   }
// }

// async function seedBlogs() {
//   try {
//     await client.query('BEGIN');

//     // Seed blogs table
//     await client.query(`
//       INSERT INTO blogs (title, content, author_id, category_id, subcategory_id, date, image_url)
//       VALUES
//         ('Breaking News: Team A Wins Championship!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 1, 1, '2024-07-05', 'https://via.placeholder.com/400x200'),
//         ('Introduction to React Hooks', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 2, 2, 4, '2024-07-06', 'https://via.placeholder.com/400x200');
//     `);

//     await client.query('COMMIT');
//     console.log('Blogs seeded successfully');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.error('Error seeding blogs:', error);
//   }
// }

// // Uncomment and run the seeding functions as needed
// // Ensure you handle connection closing appropriately

// // Example usage:
// await seedAuthors();
// await seedCategories();
// await seedSubcategories();
// await seedBlogs();

// // Close the client connection when done
// await client.end();
