const mockfetchTenor = () =>
  Promise.resolve({
    json: () => ({
      results: [
        { media: [{ gif: { url: 'url1' } }] },
        { media: [{ gif: { url: 'url2' } }] },
        { media: [{ gif: { url: 'url3' } }] },
        { media: [{ gif: { url: 'url4' } }] }
      ]
    })
  });

export default mockfetchTenor;
