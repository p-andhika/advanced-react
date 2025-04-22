import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { MainHOC } from "./Main";

export const Page = () => {
  return (
    <Layout>
      <Sidebar />
      <MainHOC />
    </Layout>
  );
};
