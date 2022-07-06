import { useState } from "react";

const useChangeView = () => {
  const [showInfo, setShowInfo] = useState(false);

  return { showInfo, setShowInfo };
}
export { useChangeView };