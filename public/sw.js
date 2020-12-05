const CACHE_NAME = 'cities-localhost-v1'

self.addEventListener('fetch', (evt) => {
	if (evt.request.method != 'GET') return

	evt.respondWith(
		(async function () {
			// Try to get the response from a cache.
			const cache = await caches.open('dynamic-v1')
			const cachedResponse = await cache.match(evt.request)

			if (cachedResponse) {
				// If we found a match in the cache, return it, but also
				// update the entry in the cache in the background.
				evt.waitUntil(cache.add(evt.request))
				return cachedResponse
			}

			// If we didn't find a match in the cache, use the network.
			return fetch(evt.request)
		})()
	)
})
