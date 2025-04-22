import { useState } from "react";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { NavigationController } from "./NavigationController";

export const Page = () => {
  return (
    <NavigationController>
      <Layout>
        <Sidebar />
        <Main />
      </Layout>
    </NavigationController>
  );
};
