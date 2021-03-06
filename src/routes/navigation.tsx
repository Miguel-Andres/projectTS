import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
 
} from "react-router-dom";
 
import { routes } from "./routes";
 
import logo from "../logo.svg";
 
export const Navigation = () => {
  return (
        <Suspense fallback={<span>Loading</span>} >

       
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    to={path}
                    end
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
 
          <Routes>
          {routes.map(({ path,Component}) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
           
           
          </Routes>
        </div>
      </Router>
      </Suspense>
  );
};

 