import Drawer from "./drawer";
import { Outlet } from "react-router";
function Layout() {
  let path = location.pathname.split("/")[1];
  return (
    <>
      <div>
        <Drawer />
        <div className="relative flex flex-col items-center mx-auto ml-0 lg:ml-72 lg:items-start lg:justify-start ">
          <h1 className="text-5xl font-semibold my-9">
            {path ? path : "Home"}
          </h1>
          <div>
            <Outlet />
          </div>
          <div className="relative">
            <p className="mt-16 text-slate-500 bottom--3">
              created by{" "}
              <a
                className="font-semibold underline"
                href="https://github.com/Sodiqjonmukhtorov"
                target="_blank"
              >
                Sodiqjon Mukhtorov
              </a>{" "}
              youutube.uz
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
