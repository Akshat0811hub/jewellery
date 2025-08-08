import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header>
        <h1>My App Header</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
};

export default AppLayout; // ✅ this is must!
