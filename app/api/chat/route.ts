import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    const systemMessage = {
      role: 'system',
      content: 'You are Baby NEXUS V6 AI, an enthusiastic and helpful assistant. Be friendly, use emojis appropriately, and provide valuable assistance.'
    };
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...messages],
      temperature: 0.8,
      max_tokens: 500,
    });
    
    const reply = completion.choices[0].message;
    
    return NextResponse.json({
      message: reply.content,
      role: 'assistant'
    });
    
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    
    return NextResponse.json({
      message: "I apologize, but I'm having trouble connecting right now. Please try again later.",
      role: 'assistant',
      error: true
    });
  }
}