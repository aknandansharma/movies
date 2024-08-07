import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';

const HomePage = () => {
    const [filters, setFilters] = useState([]);
    const [sort, setSort] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const rating = params.getAll('rating');
        const order = params.get('order');
        setFilters(rating);
        setSort(order);
    }, [location.search]);

    const handleApplyFilters = () => {
        const params = new URLSearchParams();
        filters.forEach(filter => params.append('rating', filter));
        if (sort) params.append('order', sort);
        navigate({ search: params.toString() });
    };

    return (
        <div className="flex flex-row gap-6 p-6">
            <aside className="w-full lg:w-1/4 bg-gray-100 border-r border-gray-300 p-4">
                <SideBar filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
                <button 
                    onClick={handleApplyFilters} 
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Apply Filters
                </button>
            </aside>
            <main className="w-full lg:w-3/4">
                <div className="flex flex-nowrap">
                    <MovieList filters={filters} sort={sort} />
                    <MovieList filters={filters} sort={sort} />
                    <MovieList filters={filters} sort={sort} />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
