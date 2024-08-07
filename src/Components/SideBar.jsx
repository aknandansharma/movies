import React from 'react';

const SideBar = ({ filters, setFilters, sort, setSort }) => {
    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        const newFilters = checked
            ? [...filters, value]
            : filters.filter(filter => filter !== value);
        setFilters(newFilters);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    return (
        <div className="w-64 bg-gray-100 border-r border-gray-200 h-screen p-4">
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Filter by Rating</h3>
                <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map(rating => (
                        <label key={rating} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={rating}
                                checked={filters.includes(String(rating))}
                                onChange={handleFilterChange}
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="text-gray-700">{rating}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Sort by Year</h3>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="asc"
                            checked={sort === "asc"}
                            onChange={handleSortChange}
                            className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="text-gray-700">Ascending</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="desc"
                            checked={sort === "desc"}
                            onChange={handleSortChange}
                            className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="text-gray-700">Descending</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
