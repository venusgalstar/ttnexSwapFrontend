import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://ttndex.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://ttndex.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://ttndex.com/pools',
  },
  // {
  //   // label: 'Lottery',
  //   // icon: 'TicketIcon',
  //   // href: 'https://ttndex.com/lottery',
  //   // status: {
  //   //   text: 'WIN',
  //   //   color: 'warning',
  //   // },
  // },
  {
    label: 'Referral Program',
    icon: 'ReferralIcon',
    href: 'https://ttndex.com/referral'
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://pancakeswap.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Team',
  //       href: 'https://docs.ttndex.com/bridgeswap/our-team',
  //     },
  //     // {
  //     //   label: 'Contact',
  //     //   href: 'https://t.me/officialflutterswap',
  //     // },
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.pancakeswap.finance',
  //     // },
  //     // {
  //     //   label: 'Github',
  //     //   href: 'https://github.com/BridgeSwap-Exchange',
  //     // },
  //     // {
  //     //   label: 'Docs',
  //     //   href: 'https://docs.ttndex.com',
  //     // },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://bridgeswap.medium.com/',
  //     // },
  //     // {
  //     //   label: 'Merch',
  //     //   href: 'https://pancakeswap.creator-spring.com/',
  //     // },
  //   ],
  // },
]

export default config
