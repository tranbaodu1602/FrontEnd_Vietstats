import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Route2 } from "./routes";
import mainLayout from "./layout/mainLayout";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {Route2.map((route, index) => {
              const Layout = route.layout === null ? Fragment : mainLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
