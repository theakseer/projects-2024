import { connect } from '@/dbConfig/dbConfig'
import {User} from '@/models/user.model'
import bcryptjs from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const {username, password, email} = await request.json()
    console.log(username, password, email)
    const user = await User.findOne({email})
    if (user) {
      NextResponse.json({error: 'User already exists'},{ status: 400})
      throw new Error;
    }
    // has password
    const salt = await bcryptjs.gensalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
  } catch (error: any) {
    return NextResponse.json({ error: error.message },{ status: 500})
  }
}

connect()
