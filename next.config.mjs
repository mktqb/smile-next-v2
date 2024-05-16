import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.tsx");
export default withNextIntl({
  redirects: async () => {
    return [
      {
        source: "/es/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/blog/salsa-fest-veracruz-2024",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/blog/salsa-fest-veracruz-2024",
        destination: "/",
        permanent: true,
      },
    ];
  },
});
