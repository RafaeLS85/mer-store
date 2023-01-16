import AboutPage from "../components/About/About";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout title="About">
      <main className="">
        <AboutPage />
      </main>
    </Layout>
  );
}