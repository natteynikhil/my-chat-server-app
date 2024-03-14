// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains : [
//       "utfs.io"
//     ]
//   }
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns : [
//       {
//         protocol: "https",
//         hostname: "utfs.io",
//       }
      
//     ]
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });

    return config;
  },
  images: {
    remotePatterns : [
      {
        protocol: "https",
        hostname: "utfs.io",
      }
      
    ]
  }
};

export default nextConfig;


