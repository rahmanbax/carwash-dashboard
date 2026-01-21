const ManagementSkeleton = () => {
    return (
        <div className="space-y-6 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center">
                <div className="h-7 bg-gray-200 rounded w-48"></div>
                <div className="h-10 bg-gray-200 rounded w-40"></div>
            </div>

            {/* Stats Cards Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="h-4 bg-gray-200 rounded w-32 mb-3"></div>
                                <div className="h-8 bg-gray-200 rounded w-16"></div>
                            </div>
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Skeleton */}
            <div className="space-y-2">
                {/* Table Header */}
                <div className="flex bg-white rounded-lg shadow-sm p-4">
                    <div className="flex-1 h-5 bg-gray-200 rounded w-20"></div>
                </div>

                {/* Table Rows */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center bg-white rounded-lg shadow-sm border-t border-gray-200 p-4">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagementSkeleton;
