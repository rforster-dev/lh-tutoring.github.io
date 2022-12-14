import Head from "next/head";

/**
 *
 * @param {*} props title, meta description
 * @returns
 */
export default function Head(props) {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
