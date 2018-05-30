export const navigation = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'sample',
                'title': 'Sample',
                'translate': 'NAV.SAMPLE.TITLE',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/sample',
                'badge': {
                    'title': 25,
                    'translate': 'NAV.SAMPLE.BADGE',
                    'bg'   : '#B8E9FF',
                    'fg'   : '#000000'
                }
            },
            {
              'id': 'programs',
              'title': 'Programs',
              'type': 'item',
              'icon': 'laptop',
              'url': '/programs',
              'badge': {
                  'title': 4,
                  'bg'  : '#9FFFB7',
                  'fg'  : '#000000'
              }

            }
        ]
    }
];
