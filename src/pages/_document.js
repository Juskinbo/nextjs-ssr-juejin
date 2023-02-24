import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* 在页面交互前实现主题化 id用于Next检索 beforeInteractive 表明这个脚本的执行策略是在交互之前   */}
        <script id='theme-script' strategy='beforeInteractive'>
        {`const item = localStorage.getItem('theme') || 'light';
          localStorage.setItem('theme', item);
          document.getElementsByTagName('html')[0].dataset.theme = item;`}
        </script>
      </body>
    </Html>
  )
}
