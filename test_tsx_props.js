import projectConfig from '/pagic.config.js';
import Hello from './test_tsx_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "test_tsx.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_tsx.html",
    'title': "",
    'content': React.createElement(Hello, { config: {
            blog: {
                root: '/posts/',
                social: {
                    email: 'nedbailov3754256@gmail.com',
                    github: 'venikman',
                    twitter: 'venik_man'
                }
            },
            branch: 'master',
            description: 'My thoughts about everything I do.',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            footer: React.createElement("footer", null,
                "Powered by\u00A0",
                React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
            include: undefined,
            nav: [
                {
                    icon: 'czs-home-l',
                    link: '/',
                    text: 'Home'
                },
                {
                    icon: 'czs-sun-l',
                    link: '/test_tsx.html',
                    text: 'Test tsx'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'blog'
            ],
            port: 8000,
            root: '/',
            serve: false,
            srcDir: 'src',
            theme: 'blog',
            title: 'Stanislau Venikman Niadbailau blog',
            watch: false
        }, content: null, footer: React.createElement("footer", null,
            "Powered by\u00A0",
            React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")), head: null, layoutPath: "_layout.tsx", outputPath: "test_tsx.html", pagePath: "test_tsx.tsx", script: null, title: "" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/LTS.md",
                "title": "Long Term Support",
                "link": "posts/LTS.html",
                "date": "2021-11-14T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "thoughts",
                    "english",
                    "no_answer"
                ],
                "excerpt": "My work When we trying to hire people while we trying to sell idea that work with us is really great, one of our selling point is that we have ofter opportunity to start new projects. (we assume) That people do..."
            },
            {
                "pagePath": "posts/RPNC.md",
                "title": "RPNC",
                "link": "posts/RPNC.html",
                "date": "2021-11-09T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "english",
                    "story",
                    "haskell"
                ],
                "excerpt": "Reverse Polish notation calculator This is another way to do calculation. Even now some of modern calculators support this notation. But where I have learned it? Haskell! Yes, by reading book about Haskell I wa..."
            },
            {
                "pagePath": "posts/first.md",
                "title": "Beginning",
                "link": "posts/first.html",
                "date": "2021-11-07T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "english",
                    "story"
                ],
                "excerpt": "Hello there! I am starting this blogging journey because I am using Deno a tech stack for it and I want to try do some learning in public. I will be posting here anything that relevant for my personal grows. It..."
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "english",
                "count": 3
            },
            {
                "name": "story",
                "count": 2
            },
            {
                "name": "haskell",
                "count": 1
            },
            {
                "name": "no_answer",
                "count": 1
            },
            {
                "name": "thoughts",
                "count": 1
            }
        ]
    }
};
