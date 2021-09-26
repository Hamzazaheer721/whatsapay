import { memo, Suspense, lazy } from "react";
import Loader from "../../components/Loader";

const View = lazy(() => import("./view"));

const HomeRoute = memo((props) => {
  return (
    <Suspense fallback={<Loader />}>
      <View {...props} />
    </Suspense>
  );
});

export default HomeRoute;
