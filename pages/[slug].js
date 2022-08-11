import { useRouter } from 'next/router';
// import type { NextPage } from "next";

const Slug = () => {
  const params = useRouter();
  const { slug } = params.query;
  return (
    <>
      {slug}
    </>
  )
}

export default Slug