import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./next-intl.config.mjs');

/** @type {import('next').NextConfig} */


const nextConfig = {};

export default withNextIntl(nextConfig);
