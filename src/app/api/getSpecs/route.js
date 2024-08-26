import { NextResponse } from 'next/server';
import { getServerSpecs } from '@/lib/database';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const specs = await getServerSpecs();
        const response = NextResponse.json(specs);

        // Add cache control headers to prevent caching
        response.headers.set('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate');
        response.headers.set('Pragma', 'no-cache');

        return response;
    } catch (error) {
        const errorResponse = NextResponse.json({ error: error.message }, { status: 500 });

        // Add cache control headers for error responses as well
        errorResponse.headers.set('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate');
        errorResponse.headers.set('Pragma', 'no-cache');

        return errorResponse;
    }
}
