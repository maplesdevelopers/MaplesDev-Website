export const NotFound = () => {
    return (
        <main 
            className="
                relative
                place-content-center
                top-0
                w-full
                h-[calc(100vh-var(--header-height))] 
                overflow-hidden 
                bg-sky-100 
                z-0
            "
        >
            <div
                className="
                    relative 
                    items-center 
                    justify-center 
                    flex
                "
            >
                Sorry. Not Found.
            </div>
        </main>    
    );
};