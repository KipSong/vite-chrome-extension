import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "@/layout";
import Dashboard from '@/views/Dashboard'

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;