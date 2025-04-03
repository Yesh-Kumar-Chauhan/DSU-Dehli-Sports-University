const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');
const withInterceptStdout = require('next-intercept-stdout');
const dotenv = require('dotenv');
const path = require('path');

// Determine the correct env file
const envFile = process.env.NEXT_PUBLIC_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(__dirname, envFile) });

var hideWarn = [
	'Invalid next.config.js options detected:',
	'The value at .experimental has an unexpected property, images, which is not in the list of allowed properties',
	'https://nextjs.org/docs/messages/invalid-next-config',
	'You have enabled experimental feature (images) in next.config.js.',
	'Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.',
	'Fast Refresh had to perform a full reload.',
	"Cannot read properties of null (reading 'length')"
];

const nextConfig = withInterceptStdout(
	withImages({
		experimental: {
			images: {
				allowFutureImage: true
			}
		},
		images: {
			disableStaticImages: true
		},
		reactStrictMode: false,
		swcMinify: true,
		i18n,
		env: {
			NEXT_PUBLIC_DEVELOPMENT_API_ENDPOINT: process.env.NEXT_PUBLIC_DEVELOPMENT_API_ENDPOINT,
			NEXT_PUBLIC_PRODUCTION_API_ENDPOINT: process.env.NEXT_PUBLIC_PRODUCTION_API_ENDPOINT,
			NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
		},
		webpack(config, options) {
			return config;
		},
		eslint: {
			ignoreDuringBuilds: true,
		}
	}),
	(log) => (hideWarn.some((warn) => log.includes(warn)) ? '' : log),
);

module.exports = nextConfig;
