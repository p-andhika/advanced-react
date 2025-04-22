import { useState } from "react";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

export const Page = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Layout>
      <Sidebar
        isNavExpanded={isNavExpanded}
        toggleNav={() => setIsNavExpanded(!isNavExpanded)}
      />
      <Main isNavExpanded={isNavExpanded} />
    </Layout>
  );
};
