import { NextResponse } from 'next/server';
import { getCachedTest } from '@/lib/database';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const result = await getCachedTest();

        // Create a new response with the result data
        const response = NextResponse.json(result);

        // Add cache control headers to prevent caching
        response.headers.set('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate');
        response.headers.set('Pragma', 'no-cache');

        return response;
    } catch (error) {
        // For error responses, we'll also add cache control headers
        const errorResponse = NextResponse.json({ error: error.message }, { status: 500 });
        errorResponse.headers.set('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate');
        errorResponse.headers.set('Pragma', 'no-cache');
        return errorResponse;
    }
}