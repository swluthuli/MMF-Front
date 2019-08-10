export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer'
    },
    {
      name: 'Bookings',
      icon: 'fa fa-book',
      children: [
        {
          name: 'Bookings',
          url: '/paddingbooking',
          icon: 'fa fa-list',
        },
        {
          name: 'Make Booking',
          url: '/Book',
          icon: 'fa fa-edit',
        }
      ]
    },
    {
      name: 'Users',
      icon: 'fa fa-user-circle',
      children: [
        {
          name: 'Existing Users',
          url: '/users',
          icon: 'fa fa-users',
        },
        {
          name: 'Register User',
          url: '/register',
          icon: 'fa fa-user-plus',
        }
      ]
    },
    {
      name: 'Vehicle',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Listed Vehicle',
          url: '/cars',
          icon: 'fa fa-car',
        },
        {
          name: 'Add Vehicle',
          url: '/addcars',
          icon: 'fa fa-edit',
        }
      ]
    }
  ]
};
