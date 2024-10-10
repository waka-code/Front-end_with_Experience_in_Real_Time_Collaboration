import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api/Api";
export type PropsData = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export function useDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState<PropsData[] | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  const [dashboard, setDataDashBoard] = useState<PropsData>();

  const clearStorage = useCallback(() => {
    navigate("/");
    localStorage.clear();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, [API_URL, setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    clearStorage,
    data,
    showModal,
    setShowModal,
    dashboard,
    setDataDashBoard,
  };
}
