import { Users } from "lucid-react";

const SidebarSkeleton = () => {
    // creating skeleton items
    const skeletonContacts = Array(8).fill(null);

    return (
        <aside className="flex flex-col w-20 h-full transition-all duration-200 border-r lg:w-72 border-base-300">
              {/* Header */}
            <div className="w-full p-5 border-b border-base-300">
                <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 "/>
                    <span className="hidden font-medium lg:block">Contacts</span>
                </div>
            </div>

            {/* Skeleton Contacts */}
            <div className="w-full py-3 overflow-y-auto">
                {skeletonContacts.map((_, indx) => (
                    <div key={indx} className="flex items-center w-full gap-3 p-3">
                        {/*Avata skeleton*/}
                        <div className="rounded-full skeleton size-12"/>
                        <div className="w-full h-4 skeleton"/>
                    </div>
                ))}
            </div>
            {/* User info for the skeleton - only seen on larger screens */}
<div className="flex-1 hidden min-w-0 text-left lg:block">
                <div className="w-32 h-4 mb-2 skeleton"/>
                <div className="w-16 h-3 skeleton" />
            </div>
        </aside>
    )

}