/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return[
            {
                source: '/user',
                destination: '/',
                permanent: false
            },
            {
                source: '/user/:userId',
                destination: '/',
                permanent: false
            },
            {
                source: '/admin',
                destination: '/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
