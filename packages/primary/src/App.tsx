import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './styles.css'

const CounterAppOne = React.lazy(() => import("app1/App"));
const Systems = React.lazy(() => import("app2/App"))

const App = () => (
  <>
    <Tabs>
      <TabList>
        <Tab>Applications</Tab>
        <Tab>Teams</Tab>
        <Tab>Systems</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CounterAppOne />
        </TabPanel>
        <TabPanel>
          <h1>Teams</h1>
        </TabPanel>
        <TabPanel>
          <Systems />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
);

export default App;