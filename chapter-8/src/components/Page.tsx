import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

export const Page = () => {
  return (
    <Layout>
      <Sidebar />
      <Main />
    </Layout>
  );
};
