import React, { useState, useEffect } from "react";
import Head from "next/head";
import CustomCard from "../components/card";

export default function Home() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ search: "", sort: "", page: 1 });
  const perPage = 4;

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/random/100");
      const data = await response.json();
      setAllData(data);
      setFilteredData(data.slice(0, filters.page * perPage));
    })();
  }, []);

  useEffect(() => {
    let data = allData.filter(
      (x) => x.name.toLowerCase().indexOf(filters.search.toLowerCase()) >= 0
    );

    if (filters.sort === "asc" || filters.sort === "desc") {
      data.sort((a, b) => {
        const diff = a.ibu - b.ibu;

        if (diff === 0) return 0;

        const sign = Math.abs(diff) / diff;

        return filters.sort === "asc" ? sign : -sign;
      });
    }

    setFilteredData(data.slice(0, filters.page * perPage));
  }, [filters]);

  return (
    <div className="p-5">
      <Head>
        <title>Frontend Test</title>
        <meta name="description" content="Front End Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-5xl font-bold text-yellow-200">Beer List</p>
      <div>
        <CustomCard
          data={filteredData}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
}
