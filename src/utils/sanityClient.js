import { createClient } from '@sanity/client';

const sanityClient = createClient({
	projectId: 'zgitbbp9',
	dataset: 'production',
	apiVersion: '2025-01-01',
	useCdn: true,
	token:
		'skSTAo7DnNVNvvyKhKI6RdovMzoCxgwhtNGJoJ9kmh3hGPNyL8rAlD77XasQ5QD8W9aY5fk8WCBxyo5W46n8e8NRpp2stxi8vAYjtTVlQg1TROPnpSSZkT8LlJIjYrS7Eixe4zm0Dn4nCeKGyh8xwBMXqhCt79mqLV3U0i0Bf8VPHqLQkt6z',
});

export default sanityClient;
