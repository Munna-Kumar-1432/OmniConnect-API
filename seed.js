require('dotenv').config();
const mongoose = require('mongoose');
const Employee = require('./src/models/Employee');
const Student = require('./src/models/Student');
const YouTubeContent = require('./src/models/YouTubeContent');
const Message = require('./src/models/Message');

const seedData = async () => {
    try {
        console.log('Connecting to MongoDB for seeding...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected!');

        // Clear existing data
        await Employee.deleteMany({});
        await Student.deleteMany({});
        await YouTubeContent.deleteMany({});
        await Message.deleteMany({});
        console.log('🗑️  Cleared existing data.');

        // Seed Employees
        const employees = await Employee.create([
            { firstName: 'Munna', lastName: 'Kumar', email: 'munna@example.com', position: 'Lead Developer', salary: 95000, status: 'active' },
            { firstName: 'Rahul', lastName: 'Sharma', email: 'rahul@example.com', position: 'NodeJS Developer', salary: 75000, status: 'active' },
            { firstName: 'Ankit', lastName: 'Verma', email: 'ankit@example.com', position: 'UI Designer', salary: 65000, status: 'active' }
        ]);
        console.log(`✅ Seeded ${employees.length} Employees`);

        // Seed Students
        const students = await Student.create([
            { fullName: 'Amit Singh', email: 'amit@student.com', course: 'Computer Science', studentId: 'CS101', status: 'enrolled' },
            { fullName: 'Priya Patel', email: 'priya@student.com', course: 'Data Science', studentId: 'DS202', status: 'enrolled' }
        ]);
        console.log(`✅ Seeded ${students.length} Students`);

        // Seed YouTube Content
        const content = await YouTubeContent.create([
            { title: 'NodeJS Tutorial', description: 'Learn NodeJS from scratch', videoUrl: 'https://res.cloudinary.com/demo/video/upload/dog.mp4', category: 'Education', tags: ['node', 'js', 'coding'], uploadStatus: 'completed' },
            { title: 'API Design Best Practices', description: 'Advanced API patterns', videoUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', category: 'Tech', tags: ['api', 'rest'], uploadStatus: 'completed' }
        ]);
        console.log(`✅ Seeded ${content.length} YouTube videos`);

        // Seed Chat Messages
        const messages = await Message.create([
            { sender: 'System', content: 'Welcome to the OmniConnect Chat!', room: 'general' },
            { sender: 'Munna', content: 'Hello everyone, the API is now live!', room: 'general' }
        ]);
        console.log(`✅ Seeded ${messages.length} Chat Messages`);

        console.log('\n🌟 Seeding Completed Successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
};

seedData();
