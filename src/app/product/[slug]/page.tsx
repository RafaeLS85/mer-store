import Layout from "@/components/Layout/Layout";

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <Layout title="Product">
        <div>My Post: {params.slug}</div>
      </Layout>
    )
  }