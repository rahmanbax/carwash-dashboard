const DashboardSkeleton = ({ cards = 2 }: { cards?: number }) => {
    return (
        <div className="space-y-6 animate-pulse">
            {/* Stats Cards Skeleton */}
            <div className={`grid grid-cols-1 lg:grid-cols-${cards} gap-4`}>
                {Array.from({ length: cards }).map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
                                <div className="h-8 bg-gray-200 rounded w-16"></div>
                            </div>
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Line Chart Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-6 bg-gray-200 rounded w-64 mb-4"></div>
                <div className="h-[350px] bg-gray-100 rounded"></div>
            </div>

            {/* Bar Chart and Queue Skeleton */}
            <div className="flex gap-4 w-full">
                {/* Bar Chart Skeleton */}
                <div className="w-full bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
                    <div className="h-[350px] bg-gray-100 rounded"></div>
                </div>

                {/* Queue Skeleton */}
                <div className="w-full bg-white p-5 rounded-lg shadow-sm">
                    <div className="h-6 bg-gray-200 rounded w-40 mb-6"></div>
                    <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                <div className="h-12 bg-gray-200 rounded w-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
