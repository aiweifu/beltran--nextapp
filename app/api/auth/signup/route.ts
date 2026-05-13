// app/api/auth/signup/route.ts

import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into database
    await pool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );

  } catch (error: any) {

    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    console.error("Signup Error:", error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}