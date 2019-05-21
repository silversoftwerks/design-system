import { useMemo } from "react";
const useSelector = ({ selector = () => { }, dependencies = [] }) => useMemo(selector, dependencies);
export default useSelector