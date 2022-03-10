module.exports = {
  async redirects() {
    return [
      {
        source: "/editor",
        destination: "/templates",
        permanent: false,
      },
    ];
  },
};
