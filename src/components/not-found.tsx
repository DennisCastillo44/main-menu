import TopOptions from "@/components/top-options";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <TopOptions>
        <Link to={"/"}>Home</Link>
      </TopOptions>
      <div className="h-[90%] flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <h1 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Página no encontrada. :(
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;
