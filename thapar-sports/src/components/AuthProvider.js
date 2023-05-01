import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
      <Route exact path="/dashboard" element={<Dashboard />} />
      </Router>
    </AuthProvider>
  );
}