import { Component, LayoutDashboard, LifeBuoy, LucideMail, SquareUser } from 'lucide-vue-next'
import type { NavMenuItems } from '~/types/nav'

export const navMenu: NavMenuItems = [
  {
    title: 'Dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    link: '/',
    ariaLabel: 'Dashboard',
  },
  {
    title: 'Email',
    label: 'Email',
    icon: LucideMail,
    link: '/email',
    ariaLabel: 'Email',
  },
  {
    heading: 'Components',
  },
  {
    title: 'Accordion',
    label: 'Accordion',
    icon: Component,
    link: '/components/accordion',
    ariaLabel: 'Accordion',
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help',
    label: 'Help',
    icon: LifeBuoy,
    link: '/help',
    ariaLabel: 'Help',
  },
  {
    title: 'Account',
    label: 'Account',
    icon: SquareUser,
    link: '/account',
    ariaLabel: 'Account',
  },
]