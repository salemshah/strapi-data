module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('dyfhuqcow'),
      api_key: env('352376459975678'),
      api_secret: env('EV672ACGCmMHc0ep8dvk2paVpxE'),
    },
  },
  // ...
});
