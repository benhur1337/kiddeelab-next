/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'hjjvqkkuostdemaf.public.blob.vercel-storage.com'
            }
        ]
    }
}

module.exports = nextConfig
