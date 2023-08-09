import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Employees app</title>
        <meta name="theme-color" content="#00649D"></meta>
        <link rel="icon" href="/Logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        ></link>
      </Head>
      {children}
    </>
  );
}
