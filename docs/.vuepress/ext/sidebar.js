module.exports = {
    '/get-started/': [
        { text: 'Giới thiệu tổng quát',  link : '/get-started/introduction.md' ,
            children: [
                { text: 'Ngôn ngữ PHP là gì?',  link : '/get-started/what-is-php.md' },
                { text: 'Máy chủ web và hosting',  link : '/get-started/webserver-and-hosting.md',
                    children: [
                        { text: 'Máy chủ web',  link : '/get-started/webserver-and-hosting.md#may-chu-web' },
                        { text: 'Hosting',  link : '/get-started/webserver-and-hosting.md#hosting' },
                    ],
                },
            ]
        },
        { text: 'Getting started',  link : '/get-started/'},
    ]
}
    
