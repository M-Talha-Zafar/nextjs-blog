import { useEffect, useState } from "react";
import Navbar from "../app/components/Navbar";
import { Spinner } from "../app/components/Spinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Navbar />
      {loading && <Spinner />}
    </div>
  );
}
