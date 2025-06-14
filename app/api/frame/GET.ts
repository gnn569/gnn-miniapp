export async function GET(request: Request) {
  return new Response(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Neobase Punks</title>
        <meta property="og:title" content="Mint your Neobase Punk!" />
        <meta property="og:image" content="https://neobasepunks.xyz/preview.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://neobasepunks.xyz/preview.png" />
        <meta name="fc:frame:button:1" content="Mint Free Punk" />
        <meta name="fc:frame:post_url" content="https://neobasepunks.xyz/mint" />
      </head>
      <body></body>
    </html>
  `, {
    headers: {
      'Content-Type': 'text/html'
    }
  });
}
