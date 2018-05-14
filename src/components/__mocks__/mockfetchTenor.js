const mockfetchTenor = () =>
  Promise.resolve({
    json: () => ({
      results: [
        { media: [{ gif: { url: './src/components/__mocks__/mockGif.gif' } }] },
        { media: [{ gif: { url: './src/components/__mocks__/mockGif.gif' } }] },
        { media: [{ gif: { url: './src/components/__mocks__/mockGif.gif' } }] },
        { media: [{ gif: { url: './src/components/__mocks__/mockGif.gif' } }] }
      ]
    })
  });

export default mockfetchTenor;
