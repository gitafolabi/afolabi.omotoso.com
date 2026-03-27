const allowedDevOrigins = process.env.NEXT_ALLOWED_DEV_ORIGINS
  ? process.env.NEXT_ALLOWED_DEV_ORIGINS.split(",").map((origin) =>
      origin.trim()
    ).filter(Boolean)
  : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = allowedDevOrigins?.length
  ? { allowedDevOrigins }
  : {};

export default nextConfig;
