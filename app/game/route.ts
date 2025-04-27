import { NextResponse } from 'next/server';
import { GAME_ROUTES } from '@/config/constants';

export async function GET() {
  try {
    const response = await fetch(GAME_ROUTES.EXTERNAL_GAME_URL, {
      next: { revalidate: 3600 } // 1小时缓存
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch game: ${response.status}`);
    }

    const data = await response.text();
    
    return new NextResponse(data, {
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Game fetch error:', error);
    return new NextResponse('游戏加载失败，请稍后再试', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    });
  }
}