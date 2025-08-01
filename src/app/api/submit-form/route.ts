import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

// MongoDB connection
const uri = process.env.MONGODB_URI

if (!uri) {
  console.error('❌ MONGODB_URI environment variable is not set')
}

const client = uri ? new MongoClient(uri) : null

export async function POST(request: NextRequest) {
  try {
    // Check if MongoDB is configured
    if (!client || !uri) {
      console.error('❌ MongoDB not properly configured')
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    // Parse the request body
    const formData = await request.json()
    
    // Validate required fields
    const requiredFields = ['businessName', 'industry', 'businessDescription']
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Connect to MongoDB
    await client.connect()
    const db = client.db('ybe_homepage')
    const collection = db.collection('form_submissions')

    // Add timestamp and processing status
    const submission = {
      ...formData,
      submittedAt: new Date(),
      status: 'pending',
      processed: false,
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    }

    // Insert the form submission
    const result = await collection.insertOne(submission)

    console.log('Form submission saved:', result.insertedId)

    // Close the connection
    await client.close()

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: result.insertedId
    })

  } catch (error) {
    console.error('Error submitting form:', error)
    
    // Make sure to close the connection on error
    if (client) {
      try {
        await client.close()
      } catch (closeError) {
        console.error('Error closing MongoDB connection:', closeError)
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
