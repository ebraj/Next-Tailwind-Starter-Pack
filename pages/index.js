import Head from "next/head";
import Layout from "../components/layouts/Layout";
import MaxWLayout from "../components/layouts/MaxWLayout";

// Components
export default function Home() {
  return (
    <>
      <Layout>
        <MaxWLayout>
          <div>Contents...</div>
        </MaxWLayout>
      </Layout>
    </>
  );
}
