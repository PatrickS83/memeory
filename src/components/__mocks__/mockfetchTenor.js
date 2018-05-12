const mockfetchTenor = () =>
  Promise.resolve({
    json: () => ({
      results: [
        { media: [{ gif: { url: 'https://media.giphy.com/media/gsrkIo59dnI8E/giphy.gif' } }] },
        { media: [{ gif: { url: 'https://media.giphy.com/media/gsrkIo59dnI8E/giphy.gif' } }] },
        { media: [{ gif: { url: 'https://media.giphy.com/media/gsrkIo59dnI8E/giphy.gif' } }] },
        { media: [{ gif: { url: 'https://media.giphy.com/media/gsrkIo59dnI8E/giphy.gif' } }] }
      ]
    })
  });

export default mockfetchTenor;
