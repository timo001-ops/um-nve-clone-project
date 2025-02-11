import { ContentfulContentSource } from '@stackbit/cms-contentful';

const config = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID || "spaceId not valid",
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "previewToken not valid",
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || "accessToken not valid",
    }),
  ],
  modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }],
};

export default config;
