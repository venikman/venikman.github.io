import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/RPNC.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/RPNC.html",
    'title': "RPNC",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>RPNC</h1>\n<h1>Reverse Polish notation calculator</h1>\n<p>This is another way to do calculation. Even now some of modern calculators\nsupport this notation. But where I have learned it? Haskell! Yes, by reading\nbook about Haskell I was able to learn this new thing.</p>\n<p>From <a href="https://en.wikipedia.org/wiki/Reverse_Polish_notation">Wiki</a> we can see\nthat this is notation where operators (<code>-</code>, <code>+</code>, <code>*</code>, <code>/</code>) follows by operands\n(simple way to explain it is: numbers). Here is some of expamples:</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token number">4</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span>\n\n<span class="token number">1</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">5</span>\n<span class="token number">10</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token operator">-</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre>\n<p>I am not sure if I will have any other chance to learn this notation on other\nsituation. But this is very interesting thing where by trying to learn as my\nprimary goal, which is learn new programming language Haskell I can get bonus\nlike this.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "RPNC"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Reverse Polish notation calculator</h1>\n<p>This is another way to do calculation. Even now some of modern calculators\nsupport this notation. But where I have learned it? Haskell! Yes, by reading\nbook about Haskell I was able to learn this new thing.</p>\n<p>From <a href="https://en.wikipedia.org/wiki/Reverse_Polish_notation">Wiki</a> we can see\nthat this is notation where operators (<code>-</code>, <code>+</code>, <code>*</code>, <code>/</code>) follows by operands\n(simple way to explain it is: numbers). Here is some of expamples:</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token number">4</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span>\n\n<span class="token number">1</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">5</span>\n<span class="token number">10</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token operator">-</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre>\n<p>I am not sure if I will have any other chance to learn this notation on other\nsituation. But this is very interesting thing where by trying to learn as my\nprimary goal, which is learn new programming language Haskell I can get bonus\nlike this.</p>'
        } }),
    'toc': null,
    'author': "Stanislau",
    'contributors': [
        "Stanislau"
    ],
    'date': "2021-11-10T02:31:10.000Z",
    'updated': null,
    'excerpt': "Reverse Polish notation calculator This is another way to do calculation. Even now some of modern calculators support this notation. But where I have learned it? Haskell! Yes, by reading book about Haskell I wa...",
    'cover': undefined,
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/RPNC.md",
                "title": "RPNC",
                "link": "posts/RPNC.html",
                "date": "2021-11-10T02:31:10.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
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
                "count": 1
            },
            {
                "name": "story",
                "count": 1
            }
        ]
    }
};