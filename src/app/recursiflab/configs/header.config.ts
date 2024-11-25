export const HeaderConfig = {
  name: '',
  logo: 'assets/images/Rec.png', //logo du header coté gauche
  mobileLogo: 'assets/images/ink.png', //image burger menu
  profilePic: 'assets/images/Photo_linkedin.jpeg',
  menu: [
    {
      name: 'Home',
      routerLink: ['/home'],
      icon: 'fa fa-home'
    },
    {
      name: 'Music',
      routerLink: ['/music'],
      icon: 'fa fa-briefcase'
    },
    {
      name: 'Video',
      routerLink: ['/work'],
      icon: 'fa fa-briefcase'
    },
    {
      name: 'Blog',
      routerLink: ['/blog'],
      icon: 'fa fa-pencil'
    },
    {
      name: 'Contact',
      routerLink: ['/contact'],
      icon: 'fa fa-envelope'
    }
  ]
}