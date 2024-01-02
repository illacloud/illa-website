import Head from "@docusaurus/Head"

const StructureData = ({ data }) => {
  return (
    <Head>
      <script key="structured-data" type="application/ld+json" />
      {JSON.stringify(data)}
    </Head>
  )
}

export default StructureData
