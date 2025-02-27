import siteMetadata from "@/lib/siteMetaData";

export default function Head() {
  return (
    <>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="author" content={siteMetadata.author} />
      
      {/* Open Graph (Para redes sociais) */}
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:type" content="website" />

      {/* Ícone do site */}
      <link rel="icon" href={siteMetadata.favicon} />
    </>
  );
}