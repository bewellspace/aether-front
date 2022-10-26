import { Box } from '@mantine/core'
export const Content91DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.1,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          title: { className: 'block-title', children: '2022 Q4' },
          content: {
            className: 'block-content', children: () => {
              return (
                <Box style={{ background: '#071A3C', borderRadius: '45px 5px 45px 5px', padding: '35px 20px' }}>
                  Launch of Official Website <br />
                  Release NFT Blind Box<br />
                  The World Cup Special Reward Event Starts<br />
                  Modeling and Building in the Aether Metaverse<br />
                </Box>
              )
            }
          },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.1,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          title: { className: 'block-title', children: '2023 Q1' },
          content: {
            className: 'block-content', children: () => {
              return (
                <Box style={{ background: '#071A3C', borderRadius: '45px 5px 45px 5px', padding: '35px 20px' }}>
                  Official Website Upgrade<br />
                  NFT Item Mapping<br />
                  NFT Airdrop<br />
                  Launch of NFT Marketplace<br />
                  Launch of the Aether Metaverse Beta 1.0<br />
                  Free Access to the Aether Metaverse
                </Box>
              )
            }
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.1,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          title: { className: 'block-title', children: '2023 Q2' },
          content: {
            className: 'block-content', children: () => {
              return (
                <Box style={{ background: '#071A3C', borderRadius: '45px 5px 45px 5px', padding: '35px 20px' }}>
                  Build More Public Scenes in the Aether Metaverse<br />
                  Presale of NFT in the Aether Metaverse<br />
                  Co-Create Function Goes Online
                </Box>
              )
            }
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.1,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          title: { className: 'block-title', children: '2023 Q3+' },
          content: {
            className: 'block-content', children: () => {
              return (
                <Box style={{ background: '#071A3C', borderRadius: '45px 5px 45px 5px', padding: '35px 20px' }}>
                  Launch of Livestream Aggregator <br />
                  More Planets in Aether Metaverse<br />
                  Cooperate with More Brands, Artists<br />
                  Aether DAO Governance<br />
                  ......
                </Box>
              )
            }
          },
        },
      },
    ],
  },
};
