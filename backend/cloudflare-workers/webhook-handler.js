/*
=============================================================================
CUSTOMIZATION CHECKLIST - webhook-handler.js
=============================================================================
CRITICAL CHANGES (Line 33):
☐ Replace "YOUR_BACKEND_URL_HERE" with your n8n webhook URL
   → Example: "https://your-instance.app.n8n.cloud/webhook/your-webhook-id"

DEPLOYMENT STEPS:
☐ Create Cloudflare Worker at workers.cloudflare.com
☐ Paste this code into worker editor
☐ Replace YOUR_BACKEND_URL_HERE on line 33
☐ Deploy and copy your worker URL
☐ Update frontend main.js CONFIG with your worker URL

TESTING:
☐ curl https://your-worker.workers.dev → "✅ API proxy is running"

NO CHANGES NEEDED:
✓ CORS headers work for any domain
✓ All HTTP methods and error handling included
=============================================================================
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
