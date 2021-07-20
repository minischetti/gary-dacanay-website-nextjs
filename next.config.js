const withMDX = require('@next/mdx')()
const withMDXConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

module.exports = withMDX(withMDXConfig);