export interface tagDatatype {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: [];
  _links?: {};
}

export interface categoryDatatype {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: string;
  meta: [];
  _links?: {};
}

export interface postDatatype {
  id: number;
  date: string;
  date_gmt: string;
  guid: {};
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {};
  categories: [number];
  tags: [number];
  jetpack_featured_media_url: string;
  jetpack_publicize_connections: [];
  _embedded: {
    author: [
      {
        id: number;
        name: string;
        url: string;
        description: string;
        link: string;
        slug: string;
        avatar_urls: {};
        _links: {};
      }
    ];
    "wp:featuredmedia": any[];
    "wp:term": [
      [
        {
          id: number;
          link: string;
          name: string;
          slug: string;
          taxonomy: string;
          _links: {};
        }
      ]
    ];
  };
  //   _links: {
  //     self: [
  //       {
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/posts/4344
  //       }
  //     ],
  //     collection: [
  //       {
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/posts
  //       }
  //     ],
  //     about: [
  //       {
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/types/post
  //       }
  //     ],
  //     author: [
  //       {
  //         embeddable: true,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/users/2
  //       }
  //     ],
  //     replies: [
  //       {
  //         embeddable: true,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/comments?post=4344
  //       }
  //     ],
  //     version-history: [
  //       {
  //         count: 5,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/posts/4344/revisions
  //       }
  //     ],
  //     predecessor-version: [
  //       {
  //         id: 4353,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/posts/4344/revisions/4353
  //       }
  //     ],
  //     wp:featuredmedia: [
  //       {
  //         embeddable: true,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/media/4349
  //       }
  //     ],
  //     wp:attachment: [
  //       {
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/media?parent=4344
  //       }
  //     ],
  //     wp:term: [
  //       {
  //         taxonomy: category,
  //         embeddable: true,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/categories?post=4344
  //       },
  //       {
  //         taxonomy: post_tag,
  //         embeddable: true,
  //         href: https://admin.thelifetechfacts.com/wp-json/wp/v2/tags?post=4344
  //       }
  //     ],
  //     curies: [
  //       {
  //         name: wp,
  //         href: https://api.w.org/{rel},
  //         templated: true
  //       }
  //     ]
  //   }
  // }
}
