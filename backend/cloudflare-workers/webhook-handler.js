/**
 * Cloudflare Worker: API Proxy with CORS
 * 
 * PURPOSE: 
 * - Proxies requests from static frontend (GitHub Pages) to your backend (n8n)
 * - Adds CORS headers so browser allows the requests
 * - Handles OPTIONS preflight requests
 * 
 * SETUP:
 * 1. Create new Worker at workers.cloudflare.com (free tier works)
 * 2. Paste this code
 * 3. Replace YOUR_BACKEND_URL_HERE with your n8n webhook URL
 * 4. Deploy
 * 5. Copy your worker URL (e.g., https://my-worker.workers.dev)
 * 6. Use that URL in frontend CONFIG.N8N_FORM_URL
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
    };

    // Handle OPTIONS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Proxy all /api/ requests to your backend
    if (url.pathname.startsWith("/api/")) {
      // REPLACE THIS with your actual backend URL (n8n webhook endpoint)
      const target = "YOUR_BACKEND_URL_HERE" + url.pathname.replace("/api", "");
      
      try {
        // Forward only essential headers to backend
        const cleanHeaders = new Headers();
        
        if (request.headers.has('content-type')) {
          cleanHeaders.set('Content-Type', request.headers.get('content-type'));
        }
        if (request.headers.has('authorization')) {
          cleanHeaders.set('Authorization', request.headers.get('authorization'));
        }
        if (request.headers.has('accept')) {
          cleanHeaders.set('Accept', request.headers.get('accept'));
        }
        
        cleanHeaders.set('User-Agent', 'Cloudflare-Worker-Proxy/1.0');
        
        console.log(`Proxying ${request.method} to: ${target}`);
        
        const response = await fetch(target, {
          method: request.method,
          headers: cleanHeaders,
          body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null
        });

        console.log(`Backend response status: ${response.status}`);
        
        const responseBody = await response.text();
        
        const newResponse = new Response(responseBody, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            ...corsHeaders,
            'Content-Type': response.headers.get('Content-Type') || 'application/json'
          }
        });

        return newResponse;
        
      } catch (error) {
        console.error('Proxy error:', error);
        
        const errorResponse = {
          error: 'Service Unavailable',
          message: 'Unable to connect to backend service. Check your Worker configuration.',
          code: 'PROXY_ERROR'
        };
        
        return new Response(JSON.stringify(errorResponse), { 
          status: 503, 
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        });
      }
    }
    
    // Health check
    return new Response("✅ API proxy is running", { status: 200, headers: corsHeaders });
  }
};

/**
 * DEPLOYMENT CHECKLIST:
 * □ Replace YOUR_BACKEND_URL_HERE with your n8n instance URL
 * □ Deploy worker and copy the worker URL
 * □ Update frontend CONFIG with your worker URL
 * □ Test: curl https://your-worker.workers.dev (should return "API proxy is running")
 */
