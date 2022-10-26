const nextConfig = {
  experimental: {
    largePageDataBytes: 128 * 100000
  },
  images: {
    domains: ['raw.githubusercontent.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
