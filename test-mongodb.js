import { MongoClient } from 'mongodb'

// Simple MongoDB connection test
async function testMongoConnection() {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://theartificialdev:jGSIDeI6IbXDtbcN@cluster0.mjzm9c0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  const client = new MongoClient(uri)
  
  try {
    console.log('Attempting to connect to MongoDB...')
    await client.connect()
    console.log('✅ Successfully connected to MongoDB!')
    
    // Test database access
    const db = client.db('ybe_homepage')
    const collection = db.collection('form_submissions')
    
    // Test a simple operation
    const count = await collection.countDocuments()
    console.log(`📊 Current submissions count: ${count}`)
    
    await client.close()
    console.log('🔐 MongoDB connection closed')
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error)
    process.exit(1)
  }
}

// Run the test
testMongoConnection().then(() => {
  console.log('🎉 MongoDB test completed successfully!')
}).catch(error => {
  console.error('💥 MongoDB test failed:', error)
  process.exit(1)
})
