import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
    </div>
}